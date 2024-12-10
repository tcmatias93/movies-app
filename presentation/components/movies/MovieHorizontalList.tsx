import { View, Text, FlatList } from "react-native";
import { Movie } from "@/infraestructure/interfaces/movie.interface";
import MoviePoster from "./MoviePoster";

interface Props {
  title?: string;
  movies: Movie[];
  className?: string;
}
const MovieHorizontalList = ({ title, movies, className }: Props) => {
  return (
    <View className={`${className}`}>
      {title && <Text className="text-3xl font-light px-2 mb-2">{title}</Text>}

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <MoviePoster
            id={item.id}
            poster={item.poster}
            smallPoster
            className="px-1"
          />
        )}
      />
    </View>
  );
};

export default MovieHorizontalList;
