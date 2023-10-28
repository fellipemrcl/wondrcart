import Image from "next/image";

const Home = () => {
  return (
    <div className="p-5">
      <Image
        src="/banner-home-01.png"
        height={0}
        width={0}
        alt="Até 55% de desconto só esse mês"
        className="h-auto w-full"
        sizes="100vw"
      />
    </div>
  );
};

export default Home;
