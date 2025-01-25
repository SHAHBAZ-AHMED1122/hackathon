import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "q200xkbg",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});