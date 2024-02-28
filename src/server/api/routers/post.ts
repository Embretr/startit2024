import { ChatOpenAI } from "@langchain/openai";
import { CSVLoader } from "langchain/document_loaders/fs/csv";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "@langchain/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { createRetrievalChain } from "langchain/chains/retrieval";

import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { INVOICE_1, OPENAI_API_TOKEN } from "~/server/settings";

export const postRouter = createTRPCRouter({
  getSuggestion: publicProcedure
    .query(async ({ input, ctx }) => {
      const chatModel = new ChatOpenAI({
        openAIApiKey: OPENAI_API_TOKEN
      });

      const loader = new CSVLoader(INVOICE_1);
      const docs = await loader.load();

      const splitter = new RecursiveCharacterTextSplitter();
      const splitDocs = await splitter.splitDocuments(docs);

      const embeddings = new OpenAIEmbeddings();

      const vectorstore = await MemoryVectorStore.fromDocuments(
        splitDocs,
        embeddings
      );

      const prompt = ChatPromptTemplate
        .fromTemplate(`Answer the following question based only on the provided context:

          <context>
          {context}
          </context>

          Question: {input}`
        );

      const documentChain = await createStuffDocumentsChain({
        llm: chatModel,
        prompt,
      });

      const retriever = vectorstore.asRetriever();

      const retrievalChain = await createRetrievalChain({
        combineDocsChain: documentChain,
        retriever,
      });

      return {
        
      }
    }),

  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          name: input.name,
        },
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),
});
