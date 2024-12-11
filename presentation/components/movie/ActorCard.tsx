import { View, Text, Image } from "react-native";
import { Cast } from "@/infraestructure/interfaces/cast.interface";

interface Props {
  actor: Cast;
}

const ActorCard = ({ actor }: Props) => {
  return (
    <View className="mx-10 w-[60px]">
      <Image
        source={{ uri: actor.avatar }}
        className="w-[100px] h-[150px] rounded-2xl shadow"
        resizeMode="cover"
      />
      <View>
        <Text
          className="font-bold text-lg"
          numberOfLines={2}
          adjustsFontSizeToFit
        >
          {actor.name}
        </Text>
        <Text className="text-gray-600 text-xs">{actor.character}</Text>
      </View>
    </View>
  );
};

export default ActorCard;
