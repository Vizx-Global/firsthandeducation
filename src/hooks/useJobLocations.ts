import { useQuery } from "@tanstack/react-query";
import { getJobLocations } from "../lib/endpoints";

export function useJobLocations() {
  return useQuery({
    queryKey: ["job-locations"],
    queryFn: getJobLocations
  });
}
