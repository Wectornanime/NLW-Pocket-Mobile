import { FlatList } from "react-native";
import { Category } from "../category";
import { s } from "./styles";

export type CategoriesProp = {
  id: string;
  name: string;
}[];

type Props = {
  data: CategoriesProp;
  selected: string;
  onSelect: (id: string) => void;
}

export function Categories({data, selected, onSelect}: Props) {
  return <FlatList
  data={data}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <Category
      name={item.name}
      iconId={item.id}
      onPress={() => onSelect(item.id)}
      isSelected={item.id === selected}
    />
  )}
  horizontal
  showsHorizontalScrollIndicator={false}
  style={s.container}
  contentContainerStyle={s.content}
  />;
}
