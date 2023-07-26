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

function calculateAge(birthDate) {
    var now = new Date();
    var birthDateObj = new Date(birthDate);
    var timeDifference = now - birthDateObj;
    var ageInYears = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));
    console.log("Age: " + ageInYears + " years");
}
printFoodsAndDrinks();
calculateAge('2002-02-20');
