import { View, Text } from "react-native";
import { colors } from "@/styles/theme";
import { s } from './styles';
import { IconProps } from "@tabler/icons-react-native";

type Props = {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
}

export function Step({icon: Icon, ...props}: Props) {
  return (
    <View style={s.container}>
      <Icon size={32} color={colors.red.base} />
      <View style={s.details}>
        <Text style={s.title}>{props.title}</Text>
        <Text style={s.description}>{props.description}</Text>
      </View>
    </View>
  );
}
