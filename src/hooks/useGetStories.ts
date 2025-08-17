"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type StoriesDataProps = {
  [key: string]: any;
};

const fetchStories = async () => {
  const { data } = await axios.get<StoriesDataProps[]>(
    "https://api.api-onepiece.com/v2/arcs/en"
  );

  return data.filter((arc) => arc.description !== "");
};

export const useStories = {
  useGet: () =>
    useQuery<StoriesDataProps[]>({
      queryKey: ["stories"],
      queryFn: fetchStories,
      staleTime: 1000 * 60 * 60,
    }),
};
