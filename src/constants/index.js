import { FavoriteBorder, Person2, ShoppingBag } from "@mui/icons-material";

export const VIEW_TYPES = {
  LIST: "LIST",
  GRID: "GRID",
};

export const SORT_OPTIONS = {
  RECOMMENDED: "isPersonalised",
  TRENDING: "isFastFashion",
  POPULARITY: "rating",
};

export const HEADER_MAIN_MENU = [
  { name: "MEN", url: "" },
  { name: "WOMEN", url: "" },
  { name: "KIDS", url: "" },
  { name: "HOME & LIVING", url: "" },
  { name: "BEAUTY", url: "" },
  { name: "STUDIO", url: "" },
];

export const HEADER_ACCOUNT_MENU = [
  { name: "Profile", url: "", icon: <Person2 /> },
  { name: "Wishlist", url: "", icon: <FavoriteBorder /> },
  { name: "Bag", url: "", icon: <ShoppingBag /> },
];

export const GENDER_FILTER_OPTIONS = [
  {
    label: "Men",
    value: "MEN",
  },
  {
    label: "Women",
    value: "WOMEN",
  },
  {
    label: "Boys",
    value: "BOYS",
  },
  {
    label: "Girls",
    value: "GIRLS",
  },
];

export const CATEGORY_FILTER_OPTIONS = [
  {
    label: "Tshirts",
    value: "TSHIRTS",
  },
  {
    label: "Shorts",
    value: "SHORTS",
  },
  {
    label: "Shirts",
    value: "SHIRTS",
  },
  {
    label: "Kurtas",
    value: "KURTAS",
  },
  {
    label: "Dresses",
    value: "DRESSES",
  },
];

export const BRAND_FILTER_OPTIONS = [
  {
    label: "Roadster",
    value: "ROADSTER",
  },
  {
    label: "Anouk",
    value: "ANOUK",
  },
  {
    label: "Denver",
    value: "DENVER",
  },
  {
    label: "H&M",
    value: "H&M",
  },
];

export const PRICE_FILTER_OPTIONS = [
  {
    label: "Rs. 25 to Rs. 500",
    value: "25-500",
  },
  {
    label: "Rs. 500 to Rs. 2000",
    value: "500-2000",
  },
  {
    label: "Rs. 2000 to Rs. 10000",
    value: "2000-1000",
  },
  {
    label: "Rs. 10000 to Rs. 100000",
    value: "10000-10000",
  },
];

export const COLOR_FILTER_OPTIONS = [
  {
    label: "Black",
    value: "BLACK",
  },
  {
    label: "Blue",
    value: "BLUE",
  },
  {
    label: "White",
    value: "WHITE",
  },
  {
    label: "Pink",
    value: "PINK",
  },
];

export const DISCOUNT_FILTER_OPTIONS = [
  {
    label: "10% and above",
    value: "10",
  },
  {
    label: "20% and above",
    value: "20",
  },
  {
    label: "30% and above",
    value: "30",
  },
  {
    label: "50% and above",
    value: "50",
  },
];

export const ALL_FILTERS = {
  GENDER: "gender",
  CATEGORY: "category",
  BRAND: "brand",
  PRICE: "price",
  DISCOUNT: "discount",
  PRIMARYCOLOUR: "primaryColour",
};

export const FILTERS = [
  {
    name: ALL_FILTERS.GENDER,
    multiple: false,
    options: GENDER_FILTER_OPTIONS,
    showTitle: false,
  },
  {
    name: ALL_FILTERS.CATEGORY,
    multiple: true,
    dynamic: true,
  },
  {
    name: ALL_FILTERS.BRAND,
    multiple: true,
    dynamic: true,
  },
  {
    name: ALL_FILTERS.PRICE,
    multiple: true,
    options: PRICE_FILTER_OPTIONS,
  },
  {
    name: ALL_FILTERS.PRIMARYCOLOUR,
    multiple: true,
    dynamic: true,
  },
  {
    name: ALL_FILTERS.DISCOUNT,
    multiple: true,
    options: DISCOUNT_FILTER_OPTIONS,
  },
];

export const DYNAMIC_FILTERS = [
  ALL_FILTERS.CATEGORY,
  ALL_FILTERS.BRAND,
  ALL_FILTERS.PRIMARYCOLOUR,
];

export const PRODUCTS_PER_PAGE = 20;

export const MOBILE_WINDOW_SIZE = 640;
