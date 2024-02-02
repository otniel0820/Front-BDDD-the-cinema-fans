"use client";

import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../data/api";


interface Options {
  id: string;
}

export const useUserById = ({ id }: Options) => {
  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
  });
  return {
    error,
    isError,
    isFetching,
    isLoading,
    data,
  };
};