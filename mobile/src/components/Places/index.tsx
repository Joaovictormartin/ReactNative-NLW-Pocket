import { useRef } from "react";
import { router } from "expo-router";
import { Text, useWindowDimensions } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

import { Place, PlaceProps } from "@/components/Place";

import { styles } from "./styles";

interface PlacesProps {
  data: PlaceProps[];
}

export function Places({ data }: PlacesProps) {
  const dimension = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = {
    min: 278,
    max: dimension.height - 130,
  };

  const handleNavigateMarket = (place: PlaceProps) => {
    return router.navigate(`/market/${place.id}`);
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      enableOverDrag={false}
      backgroundStyle={styles.container}
      handleIndicatorStyle={styles.indicator}
      snapPoints={[snapPoints.min, snapPoints.max]}
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
        renderItem={({ item }) => <Place data={item} onPress={() => handleNavigateMarket(item)} />}
        ListHeaderComponent={() => <Text style={styles.title}>Explore locais perto de você</Text>}
      />
    </BottomSheet>
  );
}
