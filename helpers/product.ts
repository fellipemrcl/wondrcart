import { Product } from "@prisma/client";

export interface ProductsWithTotalprice extends Product {
  totalPrice: number;
}

export const calculateProductsTotalPrice = (
  product: Product,
): ProductsWithTotalprice => {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      totalPrice: Number(product.basePrice),
    };
  }

  const totalDiscount =
    Number(product.basePrice) * (product.discountPercentage / 100);

  return {
    ...product,
    totalPrice: Number(product.basePrice) - totalDiscount,
  };
};
