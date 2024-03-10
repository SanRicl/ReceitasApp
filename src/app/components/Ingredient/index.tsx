import { Image, Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";

export type IngredientsProps = {
  name: string;
  image: string;
  selected?: boolean;
};

export const Ingredient = ({
  image,
  name,
  selected = false,
  ...rest
}: IngredientsProps & PressableProps) => {
  // Pressable = component de toque

  return (
    <Pressable
      style={[styles.container, selected && styles.selected]}
      {...rest}
    >
      <Image source={{ uri: image }} style={styles.image}/>
      <Text>{name}</Text>
    </Pressable>
  );
};
