import { useQuery } from "@tanstack/react-query";
import { getJobs } from "../lib/endpoints";

export function useJobs(params?: { keyword?: string; locationId?: string; page?: number; limit?: number }) {
  return useQuery({
    queryKey: ["jobs", params],
    queryFn: () => getJobs(params)
  });
}
