import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

export const upComingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/upcoming");
    //console.log("data: ", JSON.stringify(data, null, 2));

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
    //console.log("movies: ", JSON.stringify(movies, null, 2));

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
