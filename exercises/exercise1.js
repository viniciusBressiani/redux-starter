// Write code in a functional style to convert the input to the output:
//   input = { tag: “JAVASCRIPT” } 
//   output = “(javascript)” 
import { pipe } from "lodash/fp";

let input = { tag: "JAVASCRIPT"}

const extractTag = (obj) => obj.tag;
const toLowerCase = (str) => str.toLowerCase();
const wrapCurlBrackets = (str) => `"(${str})"`;

const result = pipe(extractTag, toLowerCase, wrapCurlBrackets )(input);

console.log(result);

// Exercise 2

const recipe = {
    name: "Spaghetti Bolognese",
    ingredients: ["egg", "salt"]
  };
  
  // Add an ingredient
  const added = {
    ...recipe,
    ingredients: [...recipe.ingredients, "cream"]
  };
  
  // Update an ingredient
  const updated = {
    ...recipe,
    ingredients: recipe.ingredients.map(ingredient =>
      ingredient === "egg" ? "egg white" : ingredient
    )
  };
  
  // Remove an ingredient
  const removed = {
    ...recipe,
    ingredients: recipe.ingredients.filter(ingredient => ingredient !== "egg")
  };