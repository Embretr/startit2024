import { z } from "zod";

export const paginationInput = z.object({
  skip: z.number().int(),
  take: z.number().int(),
});
