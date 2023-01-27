import { Container } from "./style";
import * as Dialog from "@radix-ui/react-dialog";
import x from "../../assets/x.png";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";



export function Cart() {
  const { cartTech, removeItemTech, plusItem, minCart } =
    useContext(CartContext);

  return (
    <Container>
      <>
        <div className="headerCart">
          <p className="title">Carrinho de compras</p>
          <Dialog.Close className="close">
            <img src={x} alt="fechar" />
          </Dialog.Close>
        </div>

        {cartTech.map((products) => {
          return (
            <div key={products.id} className="card">
              <img
                src={products.photo}
                alt="Fotos dos produtos"
                className="photo"
              />

              <p className="name">{products.name}</p>
              <div>
                <button onClick={() => {plusItem(products)}}>+</button>
                <p>{products.amount}</p>
                <button onClick={() => {minCart(products)}}>-</button>
              </div>
              <p className="price">R${products.price}</p>

              <button onClick={() => removeItemTech(products.id)}>
                <img src={x} alt="fechar" />
              </button>
            </div>
          );
        })}
      </>
    </Container>
  );
}
