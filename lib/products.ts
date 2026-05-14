export type Product = {
  slug: string;
  name: string;
  image: string;
  description: string;
  tag: string;
};

export const products: Product[] = [
  {
    slug: "gas-operated-khoya-machine",
    name: "Gas Operated Khoya Machine",
    image: "/images/khoya-gas.jpg",
    description:
      "Stainless steel gas operated khoya machine designed for efficient and uniform heating during commercial milk processing.",
    tag: "Khoa",
  },
  {
    slug: "paneer-making-machine",
    name: "Paneer Making Machine",
    image: "/images/paneer.jpg",
    description:
      "Commercial paneer making machine engineered for hygienic and high-volume paneer production.",
    tag: "Paneer",
  },
  {
    slug: "cream-separator-machine",
    name: "Cream Separator Machine",
    image: "/images/cream-separator.jpg",
    description:
      "Efficient cream separator machine suitable for dairy processing and milk fat separation applications.",
    tag: "Separator",
  },
  {
    slug: "lassi-machine",
    name: "Lassi Machine",
    image: "/images/lassi.jpg",
    description:
      "Industrial lassi mixing machine built for continuous blending and commercial dairy beverage preparation.",
    tag: "Lassi",
  },
  {
    slug: "ghee-making-machine",
    name: "Ghee Making Machine",
    image: "/images/ghee.jpg",
    description:
      "Durable stainless steel ghee processing machine suitable for commercial dairy operations.",
    tag: "Ghee",
  },
  {
    slug: "tilting-khoya-machine",
    name: "Tilting Khoya Machine",
    image: "/images/tilting-khoya.jpg",
    description:
      "Tilting khoya machine designed for easy handling, efficient heating, and large-scale milk processing.",
    tag: "Khoa",
  },
];
