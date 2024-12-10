import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useMovies } from "@/presentation/hooks/useMovies";
import MainSlideshow from "@/presentation/components/movies/MainSlideshow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRaledQuery, upComingQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color={"purple"} size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">Movie App</Text>

        {/* Carrousel de imagenes */}
        <MainSlideshow movies={nowPlayingQuery.data ?? []} />

        {/* Popular */}
        <MovieHorizontalList
          title="Populares"
          movies={popularQuery.data ?? []}
          className="mb-5"
        />

        <MovieHorizontalList
          title="Mejor calificadas"
          movies={topRaledQuery.data ?? []}
          className="mb-5"
        />

        <MovieHorizontalList
          title="Próximamente en cines"
          movies={upComingQuery.data ?? []}
          className="mb-5"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
