import { z } from "zod";

export const paginationInput = z.object({
  skip: z.number().int(),
  take: z.number().int(),
});

export const actionIdToButtonText = (actionId: number) => {
  switch (actionId) {
    case 1001:
      return "Send påminnelse";
    case 1002:
      return "Send markedsførings-epost";
    case 1003:
      return "Send takk-e-post";
    case 1004:
      return "Generer faktura";
    case 1005:
      return "Generer rapport";
    case 1006:
      return "Generer rapport";
    case 1007:
      return "Generer rapport";
  }
};
