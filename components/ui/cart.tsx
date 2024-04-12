import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/providers/cart";
import CartItem from "./cartItem";
import { calculateProductsTotalPrice } from "@/helpers/product";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";

const Cart = () => {
  const { products, subtotal, total, totalDiscount } = useContext(CartContext);

  return (
    <div className="flex h-full flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant={"outline"}
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="flex h-full flex-col gap-5 max-h-full overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex flex-col gap-8 h-full">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem
                  key={product.id}
                  product={calculateProductsTotalPrice(product as any) as any}
                />
              ))
            ) : (
              <p className="text-center font-semibold">
                Nenhum produto no carrinho
              </p>
            )}
          </div>
        </ScrollArea>
      </div>

      {products.length > 0 && (
        <div className="flex flex-col gap-3">
          <Separator />

          <div className="flex items-center justify-between text-xs">
            <p>Subtotal</p>
            <p>R$ {subtotal.toFixed(2)}</p>
          </div>

          <div className="flex items-center justify-between text-xs">
            <p>Entrega</p>
            <p>GRÁTIS</p>
          </div>

          <div className="flex items-center justify-between text-xs">
            <p>Descontos</p>
            <p>- R$ {totalDiscount.toFixed(2)}</p>
          </div>

          <div className="flex items-center justify-between text-sm font-bold">
            <p>Total</p>
            <p>R$ {total.toFixed(2)}</p>
          </div>

          <Button className="uppercase font-bold mt-7">Finalizar compra</Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
