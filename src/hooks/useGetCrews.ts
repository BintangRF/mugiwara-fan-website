"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type CrewsDataProps = {
  id: number;
  name: string;
  size?: string;
  age?: string;
  bounty?: string;
  job?: string;
  status?: string;
  crew: {
    id: number;
    name: string;
    description?: string | null;
    status?: string;
    number?: string;
    roman_name?: string;
    total_prime?: string;
    is_yonko?: boolean;
  };
  fruit?: {
    id: number;
    name: string;
    description?: string;
    type?: string;
    filename?: string;
    roman_name?: string;
    technicalFile?: string;
  };
  [key: string]: any;
};

const fetchCrews = async () => {
  const { data } = await axios.get<CrewsDataProps[]>(
    "https://api.api-onepiece.com/v2/characters/en/crew/1"
  );

  return data;
};

export const useCrews = {
  useGet: () =>
    useQuery<CrewsDataProps[]>({
      queryKey: ["crews"],
      queryFn: fetchCrews,
      staleTime: 1000 * 60 * 60,
    }),
};
