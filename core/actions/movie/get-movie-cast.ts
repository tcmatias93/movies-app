import { movieApi } from "@/core/api/movie-api";
import { MovieDBCreditsResponse } from "@/infraestructure/interfaces/credit.response";
import { CastMapper } from "@/infraestructure/mappers/cast.mapper";

export const getMovieCastAction = async (id: number) => {
  try {
    const { data } = await movieApi.get<MovieDBCreditsResponse>(
      `/${id}/credits`
    );

    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.log(error);
    throw "Cannot load now cast";
  }
};
