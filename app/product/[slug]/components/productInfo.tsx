"use client";

import { Button } from "@/components/ui/button";
import DiscountBage from "@/components/ui/discountBadge";
import { ProductsWithTotalprice } from "@/helpers/product";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  TruckIcon,
} from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
  product: Pick<
    ProductsWithTotalprice,
    "basePrice" | "description" | "discountPercentage" | "totalPrice" | "name"
  >;
}

const ProductInfo = ({
  product: { basePrice, description, discountPercentage, totalPrice, name },
}: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{name}</h2>
      <div className="flex items-center gap-1">
        <h1 className="text-xl font-bold">R${totalPrice.toFixed(2)}</h1>
        {discountPercentage > 0 && (
          <DiscountBage>
            {discountPercentage}%
          </DiscountBage>
        )}
      </div>

      {discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          R${Number(basePrice).toFixed(2)}
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Button onClick={decreaseQuantity} size={"icon"} variant={"outline"}>
          <ArrowLeftIcon size={16} />
        </Button>
        <span>{quantity}</span>
        <Button onClick={increaseQuantity} size={"icon"} variant={"outline"}>
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-semibold">Descrição</h3>
        <p className="text-justify text-sm opacity-60">{description}</p>
      </div>

      <Button className="mt-8 font-bold uppercase">
        Adicionar ao carrinho
      </Button>

      <div className="flex items-center justify-between bg-accent px-5 py-2 mt-5 rounded-lg">
        <div className="flex items-center gap-3">
          <TruckIcon />
          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-bold">Correios</span>
            </p>
            <p className="text-xs text-[#8162FF]">Envio para <span className="font-bold">todo o Brasil</span></p>
          </div>
        </div>
        <p className="font-bold text-xs">Frete grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;
