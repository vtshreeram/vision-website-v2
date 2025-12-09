// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.
import { client } from "./client";

// Fallback implementation since defineLive is not available in current next-sanity version
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sanityFetch = async <T = any>(
  query: string,
  params?: Record<string, unknown>
) => {
  return client.fetch<T>(query, params || {});
};

export const SanityLive = () => null;
