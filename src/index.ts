import { app } from "@getcronit/pylon";
import { serve } from "@hono/node-server";

export const graphql = {
  Query: {
    hello: () => {
      return "Hello, world!";
    },
  },
  Mutation: {},
};

serve(
  {
    fetch: app.fetch,
    port: process.env.PORT ? parseInt(process.env.PORT) : 4000,
  },
  (info) => {
    console.log(`Server running at ${info.port}`);
  }
);
