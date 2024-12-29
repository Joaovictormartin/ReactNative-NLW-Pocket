import { useEffect, useState } from "react";
import { Alert, View } from "react-native";

import { api } from "@/services/api";
import { Categories, CategoryProps } from "@/components/Categories";

export default function Home() {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  async function fetchCategories() {
    try {
      const { data } = await api("/categories");
      setCategories(data);
      setCategory(data[0].id);
    } catch (error) {
      console.log(error);
      Alert.alert("Categorias", "Não foi possivel carregar as categorias");
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Categories data={categories} selected={category} onSelected={setCategory} />
    </View>
  );
}
