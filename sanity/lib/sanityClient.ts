import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: "gwozhq55",        // your projectId from sanity.config.ts
  dataset: "production",        // your dataset
  apiVersion: "2025-01-01",     // any recent date; controls GROQ features
  useCdn: true,                 // use the edge cache for faster, public data
});
