import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
   projectId,
   dataset,
   apiVersion,
   useCdn: false, // Set to false to disable caching and get instant updates
   perspective: "published", // Only fetch published content
   stega: false, // Disable stega for faster responseto false if statically generating pages, using ISR or tag-based revalidation
});
