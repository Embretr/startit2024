import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const fakturaoversiktSchema = z.object({
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
  id: z.string(), // Assuming ID is always present and is a string.
});

export const fakturaRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        skip: z.number().int(),
        take: z.number().int(),
      }),
    )
    .output(z.array(fakturaoversiktSchema))
    .query(({ ctx, input }) => {
      return ctx.db.fakturaoversikt.findMany({
        skip: input.skip,
        take: input.take,
      });
    }),

  create: publicProcedure
    .input(
      z.object({
        faktura_dato: z.string(),
        forfallsdato: z.string(),
        kundenummer: z.number(),
        avdelingsnummer: z.string(),
        avdelingsnavn: z.string(),
        prosjektnummer: z.string(),
        prosjektledernummer: z.string(),
        belop_eks_mva: z.number(),
        valuta: z.string(),
        belop_inkl_mva: z.number(),
        betalt: z.number(),
        utestaende: z.number(),
        purring: z.number(),
        purring_status: z.string(),
        purring_sist_sendt: z.string(),
        purring_forfallsdato: z.string(),
      }),
    )
    .output(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.fakturaoversikt.create({
        data: { ...input, selskap: 1 },
      });
    }),
});
