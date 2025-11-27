import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "1st-call-uk-immigration-cms",

  projectId: "gwozhq55",
  dataset: "production",

  // Desk tool with default behaviour
  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },

  // (Optional) keep default document actions (includes Delete, Duplicate, etc.)
  document: {
    actions: (prev) => prev,
  },
});
