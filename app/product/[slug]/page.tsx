import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/productImages";
import ProductInfo from "./components/productInfo";
import { calculateProductsTotalPrice } from "@/helpers/product";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({
  params: { slug },
}: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug,
    },
  });

  if (!product) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8">
      <ProductImages name={product.name} imageUrls={product.imageUrls} />
      <ProductInfo product={calculateProductsTotalPrice(product)} />
    </div>
  );
};

export default ProductDetailsPage;
