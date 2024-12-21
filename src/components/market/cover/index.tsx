import { ImageBackground, View } from "react-native";
import { IconArrowLeft } from "@tabler/icons-react-native";
import { router } from "expo-router";
import { s } from './styles'
import { Button } from "@/components/button";

type Props = {
  uri: string;
};

export default function Cover(props: Props) {
  return (
    <ImageBackground source={{ uri: props.uri }} style={s.container}>
      <View style={s.header}>
        <Button style={{ height: 40, width: 40 }} onPress={() => router.back()}>
          <Button.Icon icon={IconArrowLeft} />
        </Button>
      </View>
    </ImageBackground>
  )
}
