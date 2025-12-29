import { useQuery } from "@tanstack/react-query";
import { getPublicSettings } from "../lib/endpoints";

export function usePublicSettings() {
  return useQuery({
    queryKey: ["public-settings"],
    queryFn: getPublicSettings
  });
}
