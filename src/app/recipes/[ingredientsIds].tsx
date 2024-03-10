import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { router, useLocalSearchParams } from "expo-router";
import { Recipe } from "../components/Recipe";
import { useEffect, useState } from "react";
import { services } from "@/services";
import { Ingredients } from "../components/Ingredients";

const Recipes = () => {
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);
  const [recipes, setRecipes] = useState<RecipeResponse[]>([]);
  const params = useLocalSearchParams<{ ingredientsIds: string }>();

  const ingredientsIds = params.ingredientsIds.split(",");

  useEffect(() => {
    services.ingredientes.findByIds(ingredientsIds).then(setIngredients);
  }, []);

  useEffect(() => {
    services.recipes.findByIngredientsIds(ingredientsIds).then(setRecipes);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={32}
          onPress={() => router.back()}
        />
        <Text style={styles.title}> Ingredientes</Text>
      </View>

      <Ingredients ingredients={ingredients} />

      <FlatList
        style={styles.recipes}
        contentContainerStyle={styles.recipesContainer}
        numColumns={2}
        columnWrapperStyle={{ gap: 16 }}
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Recipe
            recipe={item}
            onPress={() => router.navigate(`/recipe/${item.id}`)}
          />
        )}
      />
    </View>
  );
};

export default Recipes;
