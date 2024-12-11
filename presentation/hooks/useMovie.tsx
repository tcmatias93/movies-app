import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id";
import { getMovieCastAction } from "@/core/actions/movie/get-movie-cast";
import { useQuery } from "@tanstack/react-query";

export const useMovie = (id: number) => {
  const movieQuery = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  const castQuery = useQuery({
    queryKey: ["cast", id],
    queryFn: () => getMovieCastAction(id),
    staleTime: 1000 * 60 * 60 * 14,
  });

  return {
    movieQuery,
    castQuery,
  };
};
