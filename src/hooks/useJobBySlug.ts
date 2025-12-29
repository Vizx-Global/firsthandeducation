import { useQuery } from "@tanstack/react-query";
import { getJobBySlug } from "../lib/endpoints";

export function useJobBySlug(slug: string) {
  return useQuery({
    queryKey: ["job", slug],
    queryFn: () => getJobBySlug(slug),
    enabled: Boolean(slug)
  });
}
