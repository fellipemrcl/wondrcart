import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "../../components/ui/productList";
import SessionTitle from "../../components/ui/sessionTitle";
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

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <div className="flex flex-col gap-8 py-8">
      <PromoBanner
        src="/banner-home-01.png"
        alt="Até 55% de desconto só esse mês"
      />
      <div className="px-5">
        <Categories />
      </div>

      <div>
        <SessionTitle>Ofertas</SessionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="Até 55% de desconto em mouses"
      />

      <div>
        <SessionTitle>Teclados</SessionTitle>
        <ProductList products={keyboards} />
      </div>

      <div>
        <PromoBanner
          src="/banner-home-03.png"
          alt="Até 55% de desconto em mouses"
        />
      </div>

      <div>
        <SessionTitle>Mouses</SessionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  );
};

export default Home;
