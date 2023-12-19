"use client";

import { ProductsWithTotalprice } from "@/helpers/product";
import { ReactNode, createContext, useState } from "react";

export interface CartProduct extends ProductsWithTotalprice {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  addProductToCart: (product: CartProduct) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  addProductToCart: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const addProductToCart = (product: CartProduct) => {
    const productCartIsALreadyOnCart = products.some(
      (p) => p.id === product.id,
    );

    if (productCartIsALreadyOnCart) {
      setProducts((prevProducts) =>
        prevProducts.map((p) => {
          if (p.id === product.id) {
            return {
              ...p,
              quantity: p.quantity + product.quantity,
            };
          }

          return p;
        }),
      );

      return;
    }

    setProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
