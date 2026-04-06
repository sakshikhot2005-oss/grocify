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
    price: "80.00",
    category: "Fruits",
    image: getImg("strawberry"),
  },
  {
    id: 2,
    title: "Butter",
    price: "350.50",
    category: "Dairy",
    image: getImg("butter"),
  },
  {
    id: 3,
    title: "Eggs",
    price: "7.00",
    category: "Dairy",
    image: getImg("eggs"),
  },
  {
    id: 4,
    title: "Cabbage",
    price: "40.20",
    category: "Vegetables",
    image: getImg("cabbage"),
  },
  {
    id: 5,
    title: "Shrimp",
    price: "60.00",
    category: "Seafood",
    image: getImg("shrimp"),
  },
  {
    id: 6,
    title: "Kiwi",
    price: "90.00",
    category: "Fruits",
    image: getImg("kiwi"),
  },
  {
    id: 7,
    title: "Capsicum",
    price: "50.00",
    category: "Vegetables",
    image: getImg("capsicum"),
  },
  {
    id: 8,
    title: "Beef",
    price: "10.00",
    category: "Seafood",
    image: getImg("beef"),
  },
  {
    id: 9,
    title: "Kale",
    price: "70.00",
    category: "Vegetables",
    image: getImg("kale"),
  },
  {
    id: 10,
    title: "Cheese",
    price: "120.00",
    category: "Dairy",
    image: getImg("cheese"),
  },
  {
    id: 11,
    title: "Salmon",
    price: "80.00",
    category: "Seafood",
    image: getImg("salmon"),
  },
  {
    id: 12,
    title: "Milk",
    price: "65.00",
    category: "Dairy",
    image: getImg("milk"),
  },
  {
    id: 13,
    title: "Lettuce",
    price: "50.00",
    category: "Vegetables",
    image: getImg("lettuce"),
  },
  {
    id: 14,
    title: "Pineapple",
    price: "30.00",
    category: "Fruits",
    image: getImg("pineapple"),
  },
  {
    id: 15,
    title: "Tilapia",
    price: "55.00",
    category: "Seafood",
    image: getImg("tilapia"),
  },
  {
    id: 16,
    title: "Slice Cheese",
    price: "30.00",
    category: "Dairy",
    image: getImg("slice-cheese"),
  },
  {
    id: 17,
    title: "Grapes",
    price: "120.00",
    category: "Fruits",
    image: getImg("grapes"),
  },
  {
    id: 18,
    title: "Ricotta Cheese",
    price: "40.00",
    category: "Dairy",
    image: getImg("ricotta-cheese"),
  },
  {
    id: 19,
    title: "Fresh Fruits",
    price: "60.00",
    category: "Fruits",
    image: getImg("fresh-fruits"),
  },
  {
    id: 20,
    title: "Yogurt",
    price: "50.00",
    category: "Dairy",
    image: getImg("yogurt"),
  },
];

export default ProductList;