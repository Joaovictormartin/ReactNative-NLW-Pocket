import { Ref } from "react";
import { CameraView } from "expo-camera";
import { Modal, View } from "react-native";

import { Button } from "@/components/Button";

import { styles } from "./styles";

interface ModalQrCodeProps {
  visible: boolean;
  couponIsFetching: boolean;
  qrLock: { current: boolean };
  handleCloseModal: () => void;
  handleUseCoupon: (id: string) => void;
}

export function ModalQrCode({
  qrLock,
  visible,
  handleUseCoupon,
  couponIsFetching,
  handleCloseModal,
}: ModalQrCodeProps) {
  return (
    <Modal style={{ flex: 1 }} visible={visible}>
      <CameraView
        facing="back"
        style={{ flex: 1 }}
        onBarcodeScanned={({ data }) => {
          if (data && !qrLock.current) {
            qrLock.current = true;
            setTimeout(() => handleUseCoupon(data), 500);
          }
        }}
      />

      <View style={styles.qrCodeBox} />

      <View style={{ position: "absolute", bottom: 32, left: 30, right: 30 }}>
        <Button onPress={handleCloseModal} isLoading={couponIsFetching}>
          <Button.Title>Voltar</Button.Title>
        </Button>
      </View>
    </Modal>
  );
}
