import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/productImages";
import ProductInfo from "./components/productInfo";
import { calculateProductsTotalPrice } from "@/helpers/product";
import ProductList from "@/components/ui/productList";
import SessionTitle from "@/components/ui/sessionTitle";

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
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8 pb-8">
      <ProductImages name={product.name} imageUrls={product.imageUrls} />
      <ProductInfo product={calculateProductsTotalPrice(product)} />

      <div>
        <SessionTitle>Produtos relacionados</SessionTitle>
        <ProductList products={product.category.products} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
