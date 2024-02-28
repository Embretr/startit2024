import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import fetchFakturaQueries from "../../fetch_faktura_queries";
import { promptInvoice } from "~/server/openai";



export const AIRouter = createTRPCRouter({
  getInvoiceActions: publicProcedure
    .query(async ({ ctx, input }) => {
      const actions = await promptInvoice();
      return {
        actions
      }
    }),

  create: publicProcedure
    .input(
      z.object({
        faktura_nr: z.number().nullable().optional(),
        faktura_dato: z.string().nullable().optional(),
        forfallsdato: z.string().nullable().optional(),
        kundenummer: z.number().nullable().optional(),
        avdelingsnummer: z.string().nullable().optional(),
        avdelingsnavn: z.string().nullable().optional(),
        prosjektnummer: z.string().nullable().optional(),
        prosjektledernummer: z.string().nullable().optional(),
        belop_eks_mva: z.number().nullable().optional(),
        valuta: z.string().nullable().optional(),
        belop_inkl_mva: z.number().nullable().optional(),
        betalt: z.number().nullable().optional(),
        utestaende: z.number().nullable().optional(),
        purring: z.number().nullable().optional(),
        purring_status: z.string().nullable().optional(),
        purring_sist_sendt: z.string().nullable().optional(),
        purring_forfallsdato: z.string().nullable().optional(),
        selskap: z.number().nullable().optional(),
      }),
    )
    .output(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.fakturaoversikt.create({
        data: { ...input, selskap: 1 },
      });
    }),

  fetchfak: publicProcedure.query(async () => {
    return await fetchFakturaQueries();
  }),
});
