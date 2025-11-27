"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity/sanity.config"; 
import type { Config } from "sanity";  // ← correct type

export default function StudioPage() {
  return <NextStudio config={config as Config} />;
}
