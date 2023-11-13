import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/productList";
import SessionTitle from "./components/sessionTitle";
import PromoBanner from "./components/promoBanner";

const Home = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  return (
    <div>
      <PromoBanner
        src="/banner-home-01.png"
        alt="Até 55% de desconto só esse mês"
      />
      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <SessionTitle>Ofertas</SessionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="Até 55% de desconto em mouses"
      />
      
      <div className="mt-8">
        <SessionTitle>Teclados</SessionTitle>
        <ProductList products={keyboards} />
      </div>
      
    </div>
  );
};

export default Home;
