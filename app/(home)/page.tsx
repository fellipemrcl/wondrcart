import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/productList";

const Home = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div>
      <Image
        src="/banner-home-01.png"
        height={0}
        width={0}
        alt="Até 55% de desconto só esse mês"
        className="h-auto w-full px-5"
        sizes="100vw"
      />
      <div className="mt-8 px-5">
        <Categories />
      </div>
      <div className="mt-8">
        <ProductList products={deals} />
      </div>
    </div>
  );
};

export default Home;
