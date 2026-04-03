const images = import.meta.glob(
  "/src/assets/Grocery Website Assets/*.png",
  {
    eager: true,
    import: "default",
  }
);

const getImg = (name) =>
  images[`/src/assets/Grocery Website Assets/${name}.png`];

const ProductList = [
  {
    id: 1,
    title: "Strawberry",
    price: "3.00",
    category: "Fruits",
    image: getImg("strawberry"),
  },
  {
    id: 2,
    title: "Butter",
    price: "3.50",
    category: "Dairy",
    image: getImg("butter"),
  },
  {
    id: 3,
    title: "Eggs",
    price: "3.05",
    category: "Dairy",
    image: getImg("eggs"),
  },
  {
    id: 4,
    title: "Cabbage",
    price: "2.20",
    category: "Vegetables",
    image: getImg("cabbage"),
  },
  {
    id: 5,
    title: "Shrimp",
    price: "6.00",
    category: "Seafood",
    image: getImg("shrimp"),
  },
  {
    id: 6,
    title: "Kiwi",
    price: "4.56",
    category: "Fruits",
    image: getImg("kiwi"),
  },
  {
    id: 7,
    title: "Capsicum",
    price: "5.26",
    category: "Vegetables",
    image: getImg("capsicum"),
  },
  {
    id: 8,
    title: "Beef",
    price: "7.29",
    category: "Seafood",
    image: getImg("beef"),
  },
  {
    id: 9,
    title: "Kale",
    price: "3.90",
    category: "Vegetables",
    image: getImg("kale"),
  },
  {
    id: 10,
    title: "Cheese",
    price: "8.63",
    category: "Dairy",
    image: getImg("cheese"),
  },
  {
    id: 11,
    title: "Salmon",
    price: "8.56",
    category: "Seafood",
    image: getImg("salmon"),
  },
  {
    id: 12,
    title: "Milk",
    price: "7.15",
    category: "Dairy",
    image: getImg("milk"),
  },
  {
    id: 13,
    title: "Lettuce",
    price: "6.74",
    category: "Vegetables",
    image: getImg("lettuce"),
  },
  {
    id: 14,
    title: "Pineapple",
    price: "5.95",
    category: "Fruits",
    image: getImg("pineapple"),
  },
  {
    id: 15,
    title: "Tilapia",
    price: "6.35",
    category: "Seafood",
    image: getImg("tilapia"),
  },
  {
    id: 16,
    title: "Slice Cheese",
    price: "3.65",
    category: "Dairy",
    image: getImg("slice-cheese"),
  },
  {
    id: 17,
    title: "Grapes",
    price: "6.71",
    category: "Fruits",
    image: getImg("grapes"),
  },
  {
    id: 18,
    title: "Ricotta Cheese",
    price: "4.15",
    category: "Dairy",
    image: getImg("ricotta-cheese"),
  },
  {
    id: 19,
    title: "Fresh Fruits",
    price: "6.00",
    category: "Fruits",
    image: getImg("fresh-fruits"),
  },
  {
    id: 20,
    title: "Yogurt",
    price: "5.00",
    category: "Dairy",
    image: getImg("yogurt"),
  },
];

export default ProductList;