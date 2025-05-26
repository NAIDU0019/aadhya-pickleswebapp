interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  type: string;
  pricePerWeight: { [key: string]: number };
  stockPerWeight: { [key: string]: number };
  tags?: string[];
  description?: string;
  ingredients?: string;
  tagline?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Mango Pickle",
    image: "/mango.jpeg",
    category: "fruit",
    type: "veg",
    description: "A tangy and spicy pickle made with raw mangoes, mustard oil, and a blend of aromatic spices.",
    ingredients: "Raw mangoes, mustard oil, salt, fenugreek seeds, fennel seeds, nigella seeds, red chili powder, turmeric powder, asafoetida",
    pricePerWeight: {
      "100": 60,
      "250": 139,
      "500": 274,
      "1000": 549,
    },
    stockPerWeight: {
      "100": 10,
      "250": 13,
      "500": 30,
      "1000": 30,
    },
    tagline: "Tantalize your taste buds with our tangy mango magic!",
  },
  {
    id: "2",
    name: "Lemon Pickle",
    image: "/lemon.jpg",
    category: "fruit",
    type: "veg",
    description: "A zingy and refreshing pickle made with fresh lemons and spices.",
    ingredients: "Lemons, salt, red chili powder, turmeric, mustard seeds, fenugreek, mustard oil",
    pricePerWeight: {
      "100": 60,
      "250": 139,
      "500": 274,
      "1000": 549,
    },
    stockPerWeight: {
      "100": 10,
      "250": 30,
      "500": 30,
      "1000": 30,
    },
    tagline: "When life gives you lemons, pickle them to perfection!",
  },
  {
    id: "3",
    name: "Mixed Vegetable Pickle",
    image: "/mixveg.jpg",
    category: "vegetable",
    type: "veg",
    description: "A colorful medley of vegetables pickled with our special blend.",
    ingredients: "Carrots, turnips, cauliflower, ginger, vinegar, mustard oil",
    pricePerWeight: {
      "100": 60,
      "250": 139,
      "500": 274,
      "1000": 549,
    },
    stockPerWeight: {
      "100": 10,
      "250": 30,
      "500": 30,
      "1000": 30,
    },
    tagline: "Color, crunch, and spice in every bite!",
  },
  {
    id: "4",
    name: "Garlic Pickle",
    image: "/garlic.jpg",
    category: "vegetable",
    type: "veg",
    description: "Garlic pickle that adds bold flavor to any meal.",
    ingredients: "Garlic, mustard oil, fenugreek seeds, fennel, turmeric, chili",
    pricePerWeight: {
      "100": 60,
      "250": 139,
      "500": 274,
      "1000": 549,
    },
    stockPerWeight: {
      "100": 10,
      "250": 30,
      "500": 30,
      "1000": 30,
    },
    tagline: "Garlic lovers, rejoice in every pungent punch!",
  },
  {
    id: "5",
    name: "Chicken Pickle",
    image: "/chicken.jpeg",
    category: "non-veg",
    type: "non-veg",
    description: "Spicy and flavorful chicken pickle made with authentic Andhra spices.",
    ingredients: "Chicken, mustard oil, chili powder, garlic, turmeric",
    pricePerWeight: {
      "100": 130,
      "250": 299,
      "500": 498,
      "1000": 999,
    },
    stockPerWeight: {
      "100": 5,
      "250": 18,
      "500": 30,
      "1000": 30,
    },
    tagline: "Bold bites of Andhra-style chicken in every jar!",
  },
  {
    id: "6",
    name: "Fish Pickle",
    image: "/fish.jpg",
    category: "non-veg",
    type: "non-veg",
    description: "Tangy and spicy fish pickle preserved in mustard oil.",
    ingredients: "Fish, garlic, chili powder, mustard oil, spices",
    pricePerWeight: {
      "100": 100,
      "250": 199,
      "500": 397,
      "1000": 889,
    },
    stockPerWeight: {
      "100": 10,
      "250": 30,
      "500": 30,
      "1000": 30,
    },
    tagline: "Catch the coastal kick with every spoon!",
  },
  {
    id: "7",
    name: "Green Chili Pickle",
    image: "/gchilli.jpg",
    category: "vegetable",
    type: "veg",
    description: "Fiery green chili pickle made with mustard oil and aromatic spices.",
    ingredients: "Green chilies, mustard oil, fenugreek, turmeric, asafoetida",
    pricePerWeight: {
      "100": 55,
      "250": 119,
      "500": 209,
      "1000": 379,
    },
    stockPerWeight: {
      "100": 10,
      "250": 30,
      "500": 30,
      "1000": 30,
    },
    tagline: "For those who like it hot and tangy!",
  },
  {
    id: "8",
    name: "Prawn Pickle",
    image: "/prawns.jpg",
    category: "non-veg",
    type: "non-veg",
    description: "Juicy prawns cooked and preserved in traditional pickle masala.",
    ingredients: "Prawns, mustard oil, garlic, ginger, vinegar",
    pricePerWeight: {
      "100": 129,
      "250": 309,
      "500": 599,
      "1000": 1199,
    },
    stockPerWeight: {
      "100": 10,
      "250": 30,
      "500": 30,
      "1000": 30,
    },
    tagline: "A sea of spice in every bite!",
  },
  {
    id: "9",
    name: "Ginger Pickle",
    image: "/ginger.jpg",
    category: "vegetable",
    type: "veg",
    description: "Zesty ginger pickle great for digestion and flavor enhancement.",
    ingredients: "Ginger, lemon juice, cumin, mustard oil, chili",
    pricePerWeight: {
      "100": 45,
      "250": 99,
      "500": 179,
      "1000": 329,
    },
    stockPerWeight: {
      "100": 10,
      "250": 30,
      "500": 30,
      "1000": 30,
    },
    tagline: "Spice up your gut with a zingy twist!",
  },
  {
    id: "10",
    name: "Mutton Pickle",
    image: "/mutton.jpeg",
    category: "non-veg",
    type: "non-veg",
    description: "Slow-cooked tender mutton with bold spices.",
    ingredients: "Mutton, mustard oil, garlic, ginger, garam masala",
    pricePerWeight: {
      "100": 180,
      "250": 449,
      "500": 899,
      "1000": 1799,
    },
    stockPerWeight: {
      "100": 5,
      "250": 9,
      "500": 30,
      "1000": 30,
    },
    tagline: "Bold, rich and meaty – the perfect indulgence!",
  },
  {
    id: "13",
    name: "Crab Pickle",
    image: "/crab.jpg",
    category: "seafood",
    type: "non-veg",
    description: "Rich and spicy crab pickle that delivers coastal flavor with every bite.",
    ingredients: "Crab, mustard oil, chili powder, garlic, ginger, spices",
    pricePerWeight: {
      "100": 230,
      "250": 549,
      "500": 1099,
      "1000":1999,
    },
    stockPerWeight: {
      "100": 10,
      "250": 30,
      "500": 30,
      "1000": 30,
    },
    tagline: "Dive into oceanic delight with every spicy claw!",
  },
  {
    id: "14",
    name: "Gongura Chicken Pickle",
    image: "/gchicken.jpg",
    category: "meat",
    type: "non-veg",
    description: "A fiery fusion of tangy gongura leaves and succulent chicken pieces.",
    ingredients: "Chicken, gongura leaves, mustard oil, red chili, garlic, spices",
    pricePerWeight: {
      "100": 89,
      "250": 249,
      "500": 499,
      "1000": 899,
    },
    stockPerWeight: {
      "100": 10,
      "250": 30,
      "500": 30,
      "1000": 30,
    },
    tagline: "Tang meets spice in every bite!",
  },
  {
    id: "15",
    name: "Dry Mango Pickle",
    image: "/dmango.jpeg",
    category: "fruit",
    type: "veg",
    description: "Traditional sun-dried mango pickle infused with bold Indian spices.",
    ingredients: "Dry mango slices, mustard oil, salt, chili powder, asafoetida",
    pricePerWeight: {
      "100": 55,
      "250": 129,
      "500": 239,
      "1000": 449,
    },
    stockPerWeight: {
      "100": 10,
      "250": 30,
      "500": 30,
      "1000": 30,
    },
    tagline: "Sun-kissed mango magic in every jar!",
  },
  {
    id: "16",
    name: "Tomato Pickle",
    image: "/tomato.jpg",
    category: "vegetable",
    type: "veg",
    description: "Juicy tomato pickle packed with Andhra-style flavors and fiery tang.",
    ingredients: "Tomatoes, mustard oil, chili powder, salt, fenugreek seeds",
    pricePerWeight: {
      "100": 60,
      "250": 139,
      "500": 274,
      "1000": 549,
    },
    stockPerWeight: {
      "100": 10,
      "250": 30,
      "500": 30,
      "1000": 30,
    },
    tagline: "A tangy tomato twist to spice up your meals!",
  },
  {
    id: "17",
    name: "Red Chili Pickle",
    image: "/rchelli.jpg",
    category: "vegetable",
    type: "veg",
    description: "Fiery red chili pickle for spice lovers who dare to challenge their taste buds.",
    ingredients: "Red chilies, mustard oil, fenugreek, turmeric, salt",
    pricePerWeight: {
      "100": 55,
      "250": 119,
      "500": 209,
      "1000": 379,
    },
    stockPerWeight: {
      "100": 10,
      "250": 30,
      "500": 30,
      "1000": 30,
    },
    tagline: "Heat and flavor packed in every bite!",
  },
].sort((a, b) => {
  // Step 1: non-veg first
  if (a.type === "non-veg" && b.type !== "non-veg") return -1;
  if (a.type !== "non-veg" && b.type === "non-veg") return 1;

  // Step 2: sort by price for 250g ascending
  const priceA = a.pricePerWeight["250"];
  const priceB = b.pricePerWeight["250"];
  if (priceA < priceB) return -1;
  if (priceA > priceB) return 1;

  // Step 3: if price equal, sort by name alphabetically
  return a.name.localeCompare(b.name);
});
