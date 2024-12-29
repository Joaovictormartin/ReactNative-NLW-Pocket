import { Text, View } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";

import { MarketsProps } from "@/app/home";

import { styles } from "./styles";

interface MapsProps {
  markets: MarketsProps[];
}

const currentLocation = {
  latitude: -23.561187293883442,
  longitude: -46.656451388116494,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

export function Maps({ markets }: MapsProps) {
  return (
    <MapView style={{ flex: 1 }} initialRegion={currentLocation}>
      <Marker
        identifier="currentLocation"
        coordinate={currentLocation}
        image={require("@/assets/location.png")}
      />

      {markets.map((market) => (
        <Marker
          key={market.id}
          identifier={market.id}
          image={require("@/assets/pin.png")}
          coordinate={{ latitude: market.latitude, longitude: market.longitude }}
        >
          <Callout>
            <View>
              <Text style={styles.calloutName}>{market.name}</Text>
              <Text style={styles.calloutAddress}>{market.address}</Text>
            </View>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
}
