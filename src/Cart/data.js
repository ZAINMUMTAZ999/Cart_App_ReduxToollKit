import Iphone from "../../src/assets/Iphone.jpeg";
import Samsung from "../../src/assets/Samsung.jpeg";
import LG from "../../src/assets/LG.jpeg";
import Xiamoi from "../../src/assets/Xiamoi.jpeg";
import { nanoid } from "nanoid";
export const data = [
  {
    id:nanoid(),
    title: " Iphone",
    price: 499.9,
    Image: Iphone,
    amount : 1
  },
  {
        id:nanoid(),
    title: " Samsung",
    price: 499.7,
    Image: Samsung,
    amount : 1
  },
  {
        id:nanoid(),
    title: " LG",
    price: 499,
    Image: LG,
    amount : 1
  },
  {
        id:nanoid(),
    title: " Xiamoi",
    price: 499,
    Image: Xiamoi,
    amount : 1
  },
];
