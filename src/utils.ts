import { z } from "zod";

export const paginationInput = z.object({
  skip: z.number().int(),
  take: z.number().int(),
});

export const actionIdToButtonText = (actionId: number) => {
  switch (actionId) {
    case 1001:
      return "Send en påminnelse på e-post for fakturaen.";
    case 1002:
      return "Send en markedsførings-e-post.";
    case 1003:
      return "Send en takk-e-post.";
    case 1004:
      return "Generer en faktura.";
    case 1005:
      return "Generer en rapport basert på de mest lovende kundene.";
    case 1006:
      return "Generer en rapport basert på de minst lovende kundene.";
    case 1007:
      return "Generer en analyse basert på selskapets fortjeneste.";
  }
};
