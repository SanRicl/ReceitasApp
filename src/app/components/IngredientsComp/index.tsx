import { ScrollView } from "react-native";
import  { Ingredient ,IngredientsProps } from "../Ingredient";
import { styles } from "./styles";
import { services } from "@/services";

type Props = {
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  ingredients: IngredientResponse[]
};

const Ingredients = ({ selected, setSelected, ingredients }: Props) => {
  const handleTogleSelected = (value: string) => {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value));
    }

    return setSelected((state) => [...state, value]);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {ingredients.map((item) => (
        <Ingredient
          key={item.id}
          name={item.name}
          image={`${services.storage.imagePath}/${item.image}`}
          selected={selected.includes(item.id)}
          onPress={() => handleTogleSelected(item.id)}
        />
      ))}
    </ScrollView>
  );
};

export default Ingredients;
