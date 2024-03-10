// slot pega todas as rotas disponiveis dentro da pasta app
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium
} from "@expo-google-fonts/poppins";

import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Layout = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium
  });

  return (
    <>
      <StatusBar style="dark" />
      {fontsLoaded ? <Slot /> : null}
    </>
  );
};

export default Layout;
