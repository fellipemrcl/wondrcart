import { Product } from "@prisma/client";

interface ProductsWithTotalprice extends Product {
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

  const totalPrice =
    Number(product.basePrice) * (product.discountPercentage / 100);

  return {
    ...product,
    totalPrice,
  };
};
