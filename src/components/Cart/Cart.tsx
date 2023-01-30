import { Container } from "./style";
import * as Dialog from "@radix-ui/react-dialog";
import x from "../../assets/x.png";
import closeMobile from "../../assets/x(mobile).png";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export function Cart() {
  const { cartTech, removeItemTech, plusItem, minCart, total } =
    useContext(CartContext);

  return (
    <Container>
      <>
        <section className="topItems">
          <div className="headerCart">
            <p className="title">Carrinho de compras</p>
            <Dialog.Close className="close">
              <img src={x} alt="fechar" />
            </Dialog.Close>
          </div>

          <div className="contentCard">
            {cartTech.map((products) => {
              return (
                <div key={products.id} className="card">
                  <img
                    src={products.photo}
                    alt={products.name}
                    className="photo"
                  />

                  <p className="name">{products.name}</p>
                  <p className="qtd">Qtd:</p>
                  <div className="itemsMeterPrice">
                    <div className="meter">
                      <button
                        onClick={() => {
                          plusItem(products);
                        }}
                        className="btnMeter plus"
                      >
                        +
                      </button>
                      <p className="amount">{products.amount}</p>
                      <button
                        onClick={() => {
                          minCart(products);
                        }}
                        className="btnMeter min"
                      >
                        -
                      </button>
                    </div>
                    <p className="price">R${products.price}</p>
                  </div>

                  <button
                    onClick={() => removeItemTech(products.id)}
                    className="close"
                  >
                    <img src={x} alt="fechar" className="close" />
                  </button>
                  <button
                    onClick={() => removeItemTech(products.id)}
                    className="closeMobile"
                  >
                    <img
                      src={closeMobile}
                      alt="fechar"
                      className="closeMobile"
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </section>
        <section className="bottomItems">
          <div className="total">
            <p className="textTotal">Total:</p>
            <p className="textTotal">R${total}</p>
          </div>

          <button className="btnFinisher">Finalizar Compra</button>
        </section>
      </>
    </Container>
  );
}
