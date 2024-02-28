import { createTRPCRouter } from "~/server/api/trpc";
import { fakturaRouter } from "./routers/faktura";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  faktura: fakturaRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
