import { Formater } from "@/config/helpers/formatter";
import { CompleteMovie } from "@/infraestructure/interfaces/movie.interface";
import { View, Text } from "react-native";

interface Props {
  movie: CompleteMovie;
}

const MovieDescription = ({ movie }: Props) => {
  return (
    <View className="mx-5">
      <View className="flex flex-row">
        <Text>{movie.rating}</Text>
        <Text> - {movie.genres.join(", ")} </Text>
      </View>

      <Text className="font-bold mt-5">Historia</Text>
      <Text className="font-normal mt-2">{movie.description}</Text>

      <Text className="font-bold mt-3 text-2xl">
        {Formater.currency(movie.budget)}
      </Text>
    </View>
  );
};

export default MovieDescription;
