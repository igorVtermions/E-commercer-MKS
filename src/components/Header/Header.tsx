import { Navbar } from "./style";
import cart from "../../assets/cart.png";
import * as Dialog from "@radix-ui/react-dialog";
import { Cart } from "../Cart/Cart";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export function Header() {

  const {cartTech} = useContext(CartContext)

  return (
    <Navbar>
      <div className="logo">
        <p className="logo01">MKS</p>
        <p className="logo02">Sistemas</p>
      </div>

      <Dialog.Root>
        <Dialog.Trigger type="button" className="place">
          <img src={cart} alt="Carrinho de compras" className="cart" />
          <p className="counter">{cartTech.length}</p>
        </Dialog.Trigger>
        <Dialog.Portal className="modal">
        <Dialog.Overlay className="overlay" />
        </Dialog.Portal>
        <Dialog.Content className="modal content">
            <Cart />
        </Dialog.Content>
      </Dialog.Root>
    </Navbar>
  );
}
