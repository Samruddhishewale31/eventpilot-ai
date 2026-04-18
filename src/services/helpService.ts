import { mockFAQs } from "../data/mock";
import { FAQ } from "../types";

export async function getFAQs(): Promise<FAQ[]> {
  await new Promise(resolve => setTimeout(resolve, 250));
  return mockFAQs;
}
