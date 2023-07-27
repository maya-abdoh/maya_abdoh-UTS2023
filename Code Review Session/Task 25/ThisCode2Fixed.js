function foodsAndDrinks() {
    const drinks = ['lemonade', 'soda', 'tea', 'water'];
    const foods = ['beans', 'chicken', 'rice'];
  
    for (let i = 0; i < drinks.length; i++) {
      console.log(drinks[i]);
    }
  
    for (let i = 0; i < foods.length; i++) {
      console.log(foods[i]);
    }
  
    return;
  }

  function getAge() {
    const birthDate = new Date(1985, 1, 16);
    const now = new Date();
    const age = now.getFullYear() - birthDate.getFullYear();
    return age;
  }
  
  function PrintNumberAsWord(value) {
    const words = ["zero", "one", "two", "three", "four", "five"];
    return words[value] || "Invalid value"; 
  }
  