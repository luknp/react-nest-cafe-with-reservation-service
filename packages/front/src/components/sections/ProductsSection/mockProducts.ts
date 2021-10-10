import coffee from "public/images/products/coffee.png";

export interface IProducts {
  id: number;
  name: string;
  desc?: string;
  image?: any;
}

export const products: IProducts[] = [
  {
    id: 1,
    name: "Espresso",
    image: coffee,
  },
  {
    id: 2,
    name: "Cappuccino",
    image: coffee,
  },
  {
    id: 3,
    name: "Macchiato",
    image: coffee,
  },
  {
    id: 4,
    name: "Latte",
    image: coffee,
  },
  {
    id: 5,
    name: "Romano",
    image: coffee,
  },
  {
    id: 6,
    name: "Flat White",
    image: coffee,
  },
  {
    id: 7,
    name: "Irish",
    image: coffee,
  },
  {
    id: 8,
    name: "Freddo",
    image: coffee,
  },
  {
    id: 9,
    name: "Coretto",
    image: coffee,
  },
  {
    id: 10,
    name: "Frappe",
    image: coffee,
  },
];
