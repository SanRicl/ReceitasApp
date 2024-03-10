import * as recipes from "./recipesService"
import * as ingredientes from "./ingredientsService"
import * as preparations from "./preparationsService"

export const services = {
  ingredientes,
  recipes,
  preparations,

  storage:{
    imagePath: "https://ubwscaqvskcifxqhalkk.supabase.co/storage/v1/object/public/ingredients"
  }

};
