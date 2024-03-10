import { Alert, Text, View } from "react-native";
import { styles } from "./styles";
import Ingredients from "../components/IngredientsComp";
import Selected from "../components/Selected";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { services } from "@/services";

const Index = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);
  
  const handleClearSetSelected = () => {
    Alert.alert("Limpar", "Deseja limpar tudo?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => setSelected([]) }
    ]);
  };

  const handleSearch = () => {
    router.navigate(`/recipes/${selected}`);
  };

  useEffect(() => {
    services.ingredientes.findAll().then(setIngredients);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {"\n"}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>
      <Text style={styles.message}>
        Descubra receitas baseadas nos produtos que você escolheu.
      </Text>

      <Ingredients selected={selected} setSelected={setSelected} ingredients={ingredients}/>

      {selected.length > 0 && (
        <Selected
          quantity={selected.length}
          onClear={handleClearSetSelected}
          onSearch={handleSearch}
        />
      )}
    </View>
  );
};

export default Index;
