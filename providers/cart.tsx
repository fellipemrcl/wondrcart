"use client";

import { ProductsWithTotalprice } from "@/helpers/product";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";

export interface CartProduct extends ProductsWithTotalprice {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  total: number;
  subtotal: number;
  totalDiscount: number;
  addProductToCart: (product: CartProduct) => void;
  decreaseProductQuantity: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  removeProductFromCart: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  total: 0,
  subtotal: 0,
  totalDiscount: 0,
  addProductToCart: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  removeProductFromCart: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const LOCAL_STORAGE_KEY = "@wondrcart/cart-products";

  const [products, setProducts] = useState<CartProduct[]>(() => {
    if (typeof window !== "undefined") {
      const recoveryProducts = localStorage.getItem(
        LOCAL_STORAGE_KEY,
      ) as string;
      return JSON.parse(recoveryProducts) ?? [];
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("@wondrcart/cart-products", JSON.stringify(products));
    if (typeof window !== "undefined") {
      if (products.length === 0) {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      } else {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
      }
    }
  }, [products]);

  const subtotal = useMemo(() => {
    return products.reduce(
      (acc, product) => acc + Number(product.basePrice) * product.quantity,
      0,
    );
  }, [products]);

  const total = useMemo(() => {
    return products.reduce(
      (acc, product) => acc + Number(product.totalPrice) * product.quantity,
      0,
    );
  }, [products]);

  const totalDiscount = subtotal - total;

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

  const decreaseProductQuantity = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            };
          }

          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0),
    );
  };

  const increaseProductQuantity = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }

        return cartProduct;
      }),
    );
  };

  const removeProductFromCart = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((cartProduct) => cartProduct.id !== productId),
    );
  };

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        decreaseProductQuantity,
        increaseProductQuantity,
        removeProductFromCart,
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        total,
        subtotal,
        totalDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
