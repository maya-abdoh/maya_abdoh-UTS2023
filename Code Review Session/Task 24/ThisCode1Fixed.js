function printFoodsAndDrinks() {
    var drinks = ['lemonade', 'soda', 'tea', 'water'];
    var foods = ['beans', 'chicken', 'rice'];

    console.log("Drinks:");
    for (var i = 0; i < drinks.length; i++) {
        console.log(drinks[i]);
    }

    console.log("Foods:");
    for (var j = 0; j < foods.length; j++) {
        console.log(foods[j]);
    }
}

function calculateAge() {
    const birthDate = new Date(1985, 1, 16);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    console.log(age);
  }
printFoodsAndDrinks();
calculateAge();
