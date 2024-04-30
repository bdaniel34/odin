import React from "react";
import Recipes from "./Recipes";
export default function Body({name}) {
  const recipes = [
    {
      id: "greek-salad",
      name: "Greek Salad",
      ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
      amount: "100 gr",
      color: "red",
    },
    {
      id: "hawaiian-pizza",
      name: "Hawaiian Pizza",
      ingredients: [
        "pizza crust",
        "pizza sauce",
        "mozzarella",
        "ham",
        "pineapple",
      ],
      amount: "200 gr",
      color: "hdfhjsdfw",
    },
    {
      id: "hummus",
      name: "Hummus",
      ingredients: [
        "chickpeas",
        "olive oil",
        "garlic cloves",
        "lemon",
        "tahini",
      ],
      amount: "340 gr",
      color: "ldhfihwe",
    },
  ];
  recipes[0].name = name;  

  return (
    <div>
      <Recipes recipes={recipes}></Recipes>
      {name}
    </div>
  );
}
