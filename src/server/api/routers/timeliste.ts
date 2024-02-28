import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { paginationInput } from "../../../utils";

const timelisteSchema = z.object({
  avdelingsnummer: z.string().optional().nullable(),
  avdelingsnavn: z.string().optional().nullable(),
  ansattnummer: z.string().optional().nullable(),
  normaltid: z.number().optional().nullable(),
  registrert_tid_sum_med_lonn: z.number().optional().nullable(),
  registrert_tid_fravaer_med_lonn: z.number().optional().nullable(),
  registrert_tid_nettotid: z.number().optional().nullable(),
  registrert_tid_pluss_tid: z.number().optional().nullable(),
  fakt_timer_budsjett: z.number().optional().nullable(),
  fakt_timer_registrert: z.number().optional().nullable(),
  fakt_grad_budsjett_prosent: z.number().optional().nullable(),
  fakt_grad_prosent_registrert: z.number().optional().nullable(),
  budsjett_oppnaa_grad_prosent: z.number().optional().nullable(),
  fakt_tid_i_prosent_av_nettotid: z.number().optional().nullable(),
  sum_ufakturert_prosj: z.number().optional().nullable(),
  selskap: z.number().optional().nullable(),
  id: z.string(), // Assuming the ID is always provided and not null
  sum_div_oppgaver: z.number().optional().nullable(),
  sum_gen_akt: z.number().optional().nullable(),
});

type Timesheet = z.infer<typeof timelisteSchema>;

export { timelisteSchema as timeliste };

export const timelisteRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(paginationInput)
    .output(z.array(timelisteSchema))
    .query(({ ctx, input }) => {
      return ctx.db.timestatistikk.findMany({
        skip: input.skip,
        take: input.take,
      });
    }),
});
