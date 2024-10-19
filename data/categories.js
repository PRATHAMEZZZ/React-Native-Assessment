
const categories = [
    {
      name: "Coffee",
      image: require("../assets/images/coffee.png"), // Replace with your image path
      color:"bg-red-100",
      subcategories: [
        {
          name: "Espresso",
          rating: 4.8,
          cafeName: "Cafe Espresso",
          image: require("../assets/images/burger.png"), // Replace with your image path
        },
        {
          name: "Latte",
          rating: 4.5,
          cafeName: "Latte Lounge",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Cappuccino",
          rating: 4.7,
          cafeName: "Cappuccino Corner",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Americano",
          rating: 4.6,
          cafeName: "American Coffee House",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Mocha",
          rating: 4.9,
          cafeName: "Mocha Masters",
          image: require("../assets/images/burger.png"),
        },
      ],
    },
    {
      name: "Tea",
      image: require("../assets/images/tea.png"),
      color:"bg-red-100",
      subcategories: [
        {
          name: "Green Tea",
          rating: 4.6,
          cafeName: "Tea Garden",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Black Tea",
          rating: 4.4,
          cafeName: "Black Tea Bistro",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Chai",
          rating: 4.9,
          cafeName: "Chai Station",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Herbal Tea",
          rating: 4.8,
          cafeName: "Herbal Haven",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Oolong Tea",
          rating: 4.5,
          cafeName: "Oolong Oasis",
          image: require("../assets/images/burger.png"),
        },
      ],
    },
    {
      name: "Pastries",
      image: require("../assets/images/pastry.png"),
      color:"bg-red-100",
      subcategories: [
        {
          name: "Croissant",
          rating: 4.7,
          cafeName: "Bakery Bliss",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Danish",
          rating: 4.8,
          cafeName: "Danish Delights",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Muffin",
          rating: 4.6,
          cafeName: "Muffin Mania",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Eclair",
          rating: 4.5,
          cafeName: "Eclair Emporium",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Tart",
          rating: 4.9,
          cafeName: "Tart Treats",
          image: require("../assets/images/burger.png"),
        },
      ],
    },
    {
      name: "Smoothies",
      image: require("../assets/images/smoothie.png"),
      color:"bg-red-100",
      subcategories: [
        {
          name: "Berry Blast",
          rating: 4.7,
          cafeName: "Smoothie Central",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Tropical Mango",
          rating: 4.8,
          cafeName: "Tropical Treats",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Green Detox",
          rating: 4.6,
          cafeName: "Detox Delight",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Chocolate Banana",
          rating: 4.5,
          cafeName: "Choco Smoothies",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Peanut Butter",
          rating: 4.9,
          cafeName: "Peanut Paradise",
          image: require("../assets/images/burger.png"),
        },
      ],
    },
    {
      name: "Breakfast",
      image: require("../assets/images/breakfast.png"),
      color:"bg-red-100",
      subcategories: [
        {
          name: "Pancakes",
          rating: 4.8,
          cafeName: "Pancake Palace",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Omelette",
          rating: 4.7,
          cafeName: "Omelette House",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "French Toast",
          rating: 4.6,
          cafeName: "French Toast Café",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Smoothie Bowl",
          rating: 4.9,
          cafeName: "Bowl of Smoothies",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Avocado Toast",
          rating: 4.5,
          cafeName: "Avocado Corner",
          image: require("../assets/images/burger.png"),
        },
      ],
    },
    {
      name: "Desserts",
      image: require("../assets/images/burger.png"),
      color:"bg-red-100",
      subcategories: [
        {
          name: "Chocolate Cake",
          rating: 4.9,
          cafeName: "Chocolate Heaven",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Cheesecake",
          rating: 4.8,
          cafeName: "Cheesecake Delight",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Ice Cream",
          rating: 4.7,
          cafeName: "Ice Cream Dream",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Brownies",
          rating: 4.6,
          cafeName: "Brownie Bar",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Fruit Tart",
          rating: 4.5,
          cafeName: "Fruit Tart Café",
          image: require("../assets/images/burger.png"),
        },
      ],
    },
    {
      name: "Snacks",
      image: require("../assets/images/burger.png"),
      color:"bg-red-100",
      subcategories: [
        {
          name: "Chips",
          rating: 4.6,
          cafeName: "Snack Shack",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Popcorn",
          rating: 4.5,
          cafeName: "Popcorn Palace",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Nuts",
          rating: 4.8,
          cafeName: "Nutty Nibbles",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Trail Mix",
          rating: 4.7,
          cafeName: "Trail Mix Tasty",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Dried Fruits",
          rating: 4.9,
          cafeName: "Fruit Fiesta",
          image: require("../assets/images/burger.png"),
        },
      ],
    },
    {
      name: "Beverages",
      image: require("../assets/images/burger.png"),
      color:"bg-red-100",
      subcategories: [
        {
          name: "Soft Drinks",
          rating: 4.5,
          cafeName: "Beverage Bar",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Juice",
          rating: 4.6,
          cafeName: "Juice Junction",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Water",
          rating: 4.8,
          cafeName: "Pure Water Co.",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Energy Drinks",
          rating: 4.7,
          cafeName: "Energy Express",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Cocktails",
          rating: 4.9,
          cafeName: "Cocktail Corner",
          image: require("../assets/images/burger.png"),
        },
      ],
    },
    {
      name: "Ice Cream",
      image: require("../assets/images/burger.png"),
      color:"bg-red-100",
      subcategories: [
        {
          name: "Vanilla",
          rating: 4.5,
          cafeName: "Vanilla Vibes",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Chocolate",
          rating: 4.6,
          cafeName: "Chocolate Castle",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Strawberry",
          rating: 4.8,
          cafeName: "Strawberry Fields",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Mint",
          rating: 4.7,
          cafeName: "Mint Magic",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Cookie Dough",
          rating: 4.9,
          cafeName: "Cookie Dough Den",
          image: require("../assets/images/burger.png"),
        },
      ],
    },
    {
      name: "Lunch",
      image: require("../assets/images/burger.png"),
      color:"bg-red-100",
      subcategories: [
        {
          name: "Sandwich",
          rating: 4.6,
          cafeName: "Sandwich Stop",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Salad",
          rating: 4.5,
          cafeName: "Salad Station",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Pasta",
          rating: 4.8,
          cafeName: "Pasta Palace",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Burrito",
          rating: 4.9,
          cafeName: "Burrito Bar",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Rice Bowl",
          rating: 4.7,
          cafeName: "Bowl of Rice",
          image: require("../assets/images/burger.png"),
        },
      ],
    },
    {
      name: "Dinner",
      image: require("../assets/images/burger.png"),
      color:"bg-red-100",
      subcategories: [
        {
          name: "Steak",
          rating: 4.8,
          cafeName: "Steak House",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Grilled Chicken",
          rating: 4.7,
          cafeName: "Grill & Chill",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Fish",
          rating: 4.6,
          cafeName: "Fish Fryery",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Vegetarian Platter",
          rating: 4.9,
          cafeName: "Veggie Vibes",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Pizza",
          rating: 4.5,
          cafeName: "Pizza Place",
          image: require("../assets/images/burger.png"),
        },
      ],
    },
    {
      name: "Brunch",
      image: require("../assets/images/burger.png"),
      color:"bg-red-100",
      subcategories: [
        {
          name: "Avocado Toast",
          rating: 4.7,
          cafeName: "Avocado Haven",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Pancakes",
          rating: 4.6,
          cafeName: "Pancake Palace",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Omelette",
          rating: 4.8,
          cafeName: "Omelette Oasis",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Quiche",
          rating: 4.9,
          cafeName: "Quiche Corner",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Smoothie Bowl",
          rating: 4.5,
          cafeName: "Smoothie Station",
          image: require("../assets/images/burger.png"),
        },
      ],
    },
    {
      name: "Cocktails",
      image: require("../assets/images/burger.png"),
      color:"bg-red-100",
      subcategories: [
        {
          name: "Mojito",
          rating: 4.7,
          cafeName: "Mojito Mansion",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Margarita",
          rating: 4.6,
          cafeName: "Margarita Mecca",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Daiquiri",
          rating: 4.9,
          cafeName: "Daiquiri Den",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Pina Colada",
          rating: 4.8,
          cafeName: "Pina Colada Paradise",
          image: require("../assets/images/burger.png"),
        },
        {
          name: "Old Fashioned",
          rating: 4.5,
          cafeName: "Old Fashioned Bar",
          image: require("../assets/images/burger.png"),
        },
      ],
    },
  ];
  
  export default categories;
  