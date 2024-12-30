import { useEffect, useRef, useState } from "react";
import { useCameraPermissions } from "expo-camera";
import { Alert, ScrollView, StatusBar, View } from "react-native";
import { Redirect, router, useLocalSearchParams } from "expo-router";

import { api } from "@/services/api";
import { Button } from "@/components/Button";
import { Loading } from "@/components/Loading";
import { Cover } from "@/components/Market/Cover";
import { Coupon } from "@/components/Market/Coupon";
import { ModalQrCode } from "@/components/Market/ModalQrCode";
import { Details, PropsDetails } from "@/components/Market/Details";

interface DataProps extends PropsDetails {
  cover: string;
}

export default function Market() {
  const qrLock = useRef(false);
  const [_, requestPermission] = useCameraPermissions();
  const params = useLocalSearchParams<{ id: string }>();

  const [data, setData] = useState<DataProps>();
  const [isLoading, setIsLoading] = useState(true);
  const [coupon, setCoupon] = useState<string | null>(null);
  const [couponIsFetching, setCouponIsFetching] = useState(false);
  const [isVisibleCameraModal, setIsVisibleCameraModal] = useState(false);

  const fetchMarket = async () => {
    setIsLoading(true);

    try {
      const { data } = await api.get(`/markets/${params.id}`);
      setData(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível carregar os dados", [
        { text: "OK", onPress: () => router.back() },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenCamera = async () => {
    try {
      const { granted } = await requestPermission();

      if (!granted) {
        return Alert.alert("Câmera", "Você precisa habilitar o uso da câmera");
      }

      qrLock.current = false;
      setIsVisibleCameraModal(true);
    } catch (error) {
      console.log(error);
      Alert.alert("Câmera", "Não foi possível utilizar a câmera");
    }
  };

  const handleUseCoupon = async (id: string) => {
    handleCloseModal();

    Alert.alert(
      "Cupom",
      "Não é possível reutilizar um cupom resgatado. Deseja realmente resgatar o cupom?",
      [
        { style: "cancel", text: "Não" },
        { text: "Sim", onPress: () => getCoupon(id) },
      ]
    );
  };

  const getCoupon = async (id: string) => {
    setCouponIsFetching(true);

    try {
      const { data } = await api.patch(`/coupons/${id}`);

      Alert.alert("Cupom", data.coupon);
      setCoupon(data.coupon);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível utilizar o cupom");
    } finally {
      setCouponIsFetching(false);
    }
  };

  const handleCloseModal = () => setIsVisibleCameraModal(false);

  useEffect(() => {
    fetchMarket();
  }, [params.id, coupon]);

  if (isLoading) return <Loading />;
  if (!data) return <Redirect href="/home" />;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Cover uri={data.cover} />
        <Details data={data} />
        {coupon && <Coupon code={coupon} />}
      </ScrollView>

      <View style={{ padding: 30 }}>
        <Button onPress={handleOpenCamera}>
          <Button.Title>Ler QR Code</Button.Title>
        </Button>
      </View>

      <ModalQrCode
        qrLock={qrLock}
        visible={isVisibleCameraModal}
        handleUseCoupon={handleUseCoupon}
        handleCloseModal={handleCloseModal}
        couponIsFetching={couponIsFetching}
      />
    </View>
  );
}
