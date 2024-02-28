import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import fetchFakturaQueries from "../../fetch_faktura_queries";
import { promptInvoice } from "~/server/openai";

export const AIRouter = createTRPCRouter({
  getInvoiceActions: publicProcedure.query(async () => {
    return await promptInvoice();
  }),
});
