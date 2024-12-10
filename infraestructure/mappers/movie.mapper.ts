import { Movie } from "../interfaces/movie.interface";
import { Result } from "../interfaces/moviedb-response";

//Con esta class comvierto mi resultado de la api en la interface que yo cree solo para nombres. NO CAMBIA RESULTADO
export class MovieMapper {
  static fromTheMovieDBToMovie = (movie: Result): Movie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: movie.release_date,
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    };
  };
}
