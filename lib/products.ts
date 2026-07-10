// Product catalog — auto-generated from /public/bakedit assets

export interface Product {
  id: string;
  name: string;
  category: Category;
  filename: string;
  imagePath: string;
  description: string;
  price: number;
  isSignature?: boolean;
}

export type Category =
  | "All"
  | "Cakes"
  | "Pastries"
  | "Swiss Rolls"
  | "Cream Rolls"
  | "Patties"
  | "Cookies"
  | "Biscuits"
  | "Breads"
  | "Snacks"
  | "Others";

export const CATEGORIES: Category[] = [
  "All",
  "Cakes",
  "Pastries",
  "Swiss Rolls",
  "Cream Rolls",
  "Patties",
  "Biscuits",
  "Breads",
  "Snacks",
];

export const PRODUCTS: Product[] = [
  {
    id: "blackforest",
    name: "Black Forest Cake",
    category: "Pastries",
    filename: "blackforest.png",
    imagePath: "/bakedit/blackforest.png",
    description: "Layers of rich chocolate sponge, fresh cream and cherries in our classic Black Forest.",
    price: 45,
    isSignature: true,
  },
  {
    id: "butterscotch",
    name: "Butterscotch Cake",
    category: "Pastries",
    filename: "butterscotch.png",
    imagePath: "/bakedit/butterscotch.png",
    description: "Dreamy butterscotch cream atop a buttery sponge — a perennial favourite.",
    price: 45,
    isSignature: true,
  },
  {
    id: "biskof-cake",
    name: "Biskof Cake",
    category: "Cakes",
    filename: "biskof cake.png",
    imagePath: "/bakedit/biskof cake.png",
    description: "A signature layered cake crafted with premium biscuit and cream — utterly indulgent.",
    price: 650,
    isSignature: true,
  },
  {
    id: "chocochippastry",
    name: "Choco Chip Pastry",
    category: "Pastries",
    filename: "chocochippastry.png",
    imagePath: "/bakedit/chocochippastry.png",
    description: "Moist pastry studded with premium chocolate chips and crowned with velvety cream.",
    price: 50,
    isSignature: true,
  },
  {
    id: "pineapplepastery",
    name: "Pineapple Pastry",
    category: "Pastries",
    filename: "pineapplepastery.png",
    imagePath: "/bakedit/pineapplepastery.png",
    description: "Light sponge filled with fresh pineapple cream — tropical and refreshing.",
    price: 35,
    isSignature: false,
  },
  {
    id: "swissroll",
    name: "Classic Swiss Roll",
    category: "Swiss Rolls",
    filename: "swiss roll.png",
    imagePath: "/bakedit/swiss roll.png",
    description: "Perfectly rolled sponge filled with silky cream — fresh-baked every morning.",
    price: 30,
    isSignature: true,
  },
  {
    id: "chocolateroll",
    name: "Chocolate Swiss Roll",
    category: "Swiss Rolls",
    filename: "chocolateroll.png",
    imagePath: "/bakedit/chocolateroll.png",
    description: "Dark chocolate sponge spiralled with rich chocolate cream — an all-time bestseller.",
    price: 45,
    isSignature: false,
  },
  {
    id: "nutroll",
    name: "Nut Roll",
    category: "Swiss Rolls",
    filename: "nutroll.png",
    imagePath: "/bakedit/nutroll.png",
    description: "Soft sponge rolled with a luscious nut cream filling — satisfyingly rich.",
    price: 30,
    isSignature: false,
  },
  {
    id: "creamroll",
    name: "Classic Cream Roll",
    category: "Cream Rolls",
    filename: "creamroll.png",
    imagePath: "/bakedit/creamroll.png",
    description: "Our iconic freshly piped cream roll — a timeless Chandigarh favourite.",
    price: 30,
    isSignature: true,
  },
  {
    id: "creamrolls",
    name: "Assorted Cream Rolls",
    category: "Cream Rolls",
    filename: "creamrolls.png",
    imagePath: "/bakedit/creamrolls.png",
    description: "A delightful assortment of our freshest cream rolls, perfect for sharing.",
    price: 100,
    isSignature: true,
  },
  {
    id: "cheesechillypatty",
    name: "Cheese Chilly Patty",
    category: "Patties",
    filename: "cheesechilly patty.png",
    imagePath: "/bakedit/cheesechilly patty.png",
    description: "Golden flaky patty filled with spiced cheese and green chillies — an irresistible snack.",
    price: 40,
    isSignature: true,
  },
  {
    id: "mushroompatty",
    name: "Mushroom Patty",
    category: "Patties",
    filename: "mushroompatty.png",
    imagePath: "/bakedit/mushroompatty.png",
    description: "Buttery patty encasing a savoury mushroom filling — earthy, rich and satisfying.",
    price: 40,
    isSignature: true,
  },
  {
    id: "chocochipCake",
    name: "Choco chip Cake",
    category: "Cakes",
    filename: "chocochipCake.jpeg",
    imagePath: "/bakedit/chocochipCake.jpeg",
    description: "Choco chip cake with rich chocolate cream and chocolate chips — a chocolate lover's dream.",
    price: 550,
    isSignature: false,
  },
  {
    id:'trufflepastry',
    name:'trufflepastry',
    category:'Pastries',
    filename:'trufflepastry.png',
    imagePath:'/bakedit/trufflepastry.png',
    description:'trufflepastry with rich truffle cream and truffle chunks — a chocolate lover\'s dream.',
    price:60,
    isSignature:false,
  },
  {
    id: "pineappleCake",
    name: "Pineapple Cake",
    category: "Cakes",
    filename: "pineappleCake.jpeg",
    imagePath: "/bakedit/pineappleCake.jpeg",
    description: "Pineapple cake with rich pineapple cream and pineapple chunks — a chocolate lover's dream.",
    price: 450,
    isSignature: false,
  },
  {
    id: "Jamroll",
    name: "Jam Roll",
    category: "Swiss Rolls",
    filename: "Jamroll.png",
    imagePath: "/bakedit/Jamroll.png",
    description: "Jam roll with rich jam and cream — a chocolate lover's dream.",
    price: 40,
    isSignature: false,
  },
  {
    id: "paneerpatty",
    name: "Paneer Patty",
    category: "Patties",
    filename: "paneerpatty.png",
    imagePath: "/bakedit/paneerpatty.png",
    description: "Flaky golden crust stuffed with spiced paneer filling — a crowd pleaser.",
    price: 40,
    isSignature: true,
  },
  {
    id: "vegpatty",
    name: "Veg Patty",
    category: "Patties",
    filename: "vegpatty.png",
    imagePath: "/bakedit/vegpatty.png",
    description: "Classic vegetable patty in a crispy pastry shell, seasoned to perfection.",
    price: 30,
    isSignature: true,
  },
  {
    id: "paw",
    name: "Paw Bread",
    category: "Breads",
    filename: "paw.png",
    imagePath: "/bakedit/paw.png",
    description: "Soft paw-shaped bread — baked daily for morning freshness.",
    price: 60,
    isSignature: false,
  },
  {
    id: "bigbread",
    name: "Big Bread Loaf",
    category: "Breads",
    filename: "bigbread.png",
    imagePath: "/bakedit/bigbread.png",
    description: "Soft, fresh-baked sandwich bread — baked daily for morning freshness.",
    price: 60,
    isSignature: false,
  },
  {
    id: "bighotdog",
    name: "Hot Dog Bun",
    category: "Breads",
    filename: "bighotdog.png",
    imagePath: "/bakedit/bighotdog.png",
    description: "Pillowy soft hot dog buns, baked fresh every day — perfect for any filling.",
    price: 60,
    isSignature: false,
  },
  {
    id: "paneerkulcha",
    name: "Paneer Kulcha",
    category: "Snacks",
    filename: "paneerkulcha.png",
    imagePath: "/bakedit/paneerkulcha.png",
    description: "Soft leavened bread stuffed with seasoned paneer — a North Indian classic.",
    price: 70,
    isSignature: false,
  },
  {
    id: "smallburgerbun",
    name: "Burger Bun",
    category: "Breads",
    filename: "smallbugerbun.png",
    imagePath: "/bakedit/smallbugerbun.png",
    description: "Perfectly proportioned burger buns with a glossy top — baked fresh daily.",
    price: 60,
    isSignature: false,
  },
  {
    id: "carrotsandwich",
    name: "Carrot Sandwich",
    category: "Snacks",
    filename: "carrot-sandwitch.png",
    imagePath: "/bakedit/carrot-sandwitch.png",
    description: "Wholesome carrot filling between slices of our fresh-baked bread — light and nutritious.",
    price: 45,
    isSignature: false,
  },
  {
    id: "cornsandwich",
    name: "Corn Sandwich",
    category: "Snacks",
    filename: "corn-sandwitch.png",
    imagePath: "/bakedit/corn-sandwitch.png",
    description: "Creamy corn filling in our soft bread — a universally loved quick snack.",
    price: 45,
    isSignature: false,
  },
];

// Gallery images (WhatsApp shop images)
export const GALLERY_IMAGES = [
  {
    id: "g1",
    src: "/bakedit/WhatsApp Image 2026-06-29 at 11.53.24 AM (2).jpeg",
    alt: "New Capital Bakery Product Display",
  },
  {
    id: "g2",
    src: "/bakedit/WhatsApp Image 2026-06-29 at 11.53.24 AM.jpeg",
    alt: "Fresh Bakery Products at New Capital Bakery",
  },
  {
    id: "g3",
    src: "/bakedit/WhatsApp Image 2026-06-29 at 11.53.25 AM.jpeg",
    alt: "New Capital Bakery Showcase",
  },
  {
    id: "g4",
    src: "/bakedit/WhatsApp Image 2026-06-29 at 11.53.28 AM.jpeg",
    alt: "New Capital Bakery Interior",
  },
  {
    id: "g5",
    src: "/bakedit/WhatsApp Image 2026-06-29 at 11.53.36 AM (1).jpeg",
    alt: "New Capital Bakery Freshly Baked Goods",
  },
];

export const SIGNATURE_PRODUCTS = PRODUCTS.filter((p) => p.isSignature);
