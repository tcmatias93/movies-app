import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { topRankedAction } from "@/core/actions/movies/top-ranked.action";
import { upComingAction } from "@/core/actions/movies/up-coming.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPlayingAction, // es lo mismo que poner () => nowPlayingAction() ya que no se pasa parametro ni nada
    staleTime: 1000 * 60 * 60 * 24, // 24Horas
  });

  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularMoviesAction, // es lo mismo que poner () => nowPlayingAction() ya que no se pasa parametro ni nada
    staleTime: 1000 * 60 * 60 * 24, // 24Horas
  });

  const topRaledQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "top_rated"],
    queryFn: ({ pageParam }) => {
      console.log({ pageParam });
      return topRankedAction({ page: pageParam });
    },
    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (pages) => pages.length + 1,
  });

  const upComingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: upComingAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRaledQuery,
    upComingQuery,
  };
};
