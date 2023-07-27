function foodsAndDrinks() {
  // Variables to store drinks and foods
  const drinks = ['lemonade', 'soda', 'tea', 'water'];
  const foods = ['beans', 'chicken', 'rice'];

  // print drinks
  console.log("Drinks:");
  for (const drink of drinks) {
    console.log(drink);
  }

  // print foods
  console.log("Foods:");
  for (const food of foods) {
    console.log(food);
  }
}
// calculate age
function getAge() {
  const birthDate = new Date(1985, 1, 16);
  const now = new Date();
  const age = now.getFullYear() - birthDate.getFullYear();
  return age;
}

function printNumberAsWord(value) {
  const words = ["zero", "one", "two", "Three", "Four", "Five"];
  return words[value] || "Invalid value";
}
