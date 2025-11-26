import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2023-08-01",
  token: process.env.SANITY_WRITE_TOKEN,   // ADD THIS
  useCdn: false,
});
