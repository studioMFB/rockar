import { products } from "../product/data";


export const ProductQuery = {
  getAllProducts: () => products,

  getProduct: (_: any, args: any) => {
    return products.find((product) => product.colour === args.colour);
  },
};
