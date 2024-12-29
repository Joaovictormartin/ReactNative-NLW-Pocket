import { FlatList } from "react-native";

import { Category } from "@/components/Category";

import { styles } from "./styles";

export interface CategoryProps {
  id: string;
  name: string;
}
[];

interface CategoriesProps {
  selected: string;
  data: CategoryProps[];
  onSelected: (id: string) => void;
}

export function Categories({ selected, data, onSelected }: CategoriesProps) {
  return (
    <FlatList
      horizontal
      data={data}
      style={styles.container}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          iconId={item.id}
          isSelected={item.id === selected}
          onPress={() => onSelected(item.id)}
        />
      )}
    />
  );
}
