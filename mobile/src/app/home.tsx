import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Alert, View } from "react-native";

import { api } from "@/services/api";
import { Maps } from "@/components/Maps";
import { Places } from "@/components/Places";
import { PlaceProps } from "@/components/Place";
import { Categories, CategoryProps } from "@/components/Categories";

export interface MarketsProps extends PlaceProps {
  latitude: number;
  longitude: number;
}

export default function Home() {
  const [category, setCategory] = useState("");
  const [markets, setMarkets] = useState<MarketsProps[]>([]);
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
  async function fetchMarkets() {
    try {
      if (!category) return;

      const { data } = await api(`markets/category/${category}`);
      setMarkets(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Locais", "Não foi possivel carregar os locais");
    }
  }

  async function getCurrentLocation() {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();

      if (granted) {
        const location = await Location.getCurrentPositionAsync();
        console.log(location);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCategories();
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchMarkets();
  }, [category]);

  return (
    <View style={{ flex: 1 }}>
      <Categories data={categories} selected={category} onSelected={setCategory} />

      <Maps markets={markets} />

      <Places data={markets} />
    </View>
  );
}
