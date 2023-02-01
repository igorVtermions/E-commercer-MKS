import { Container } from "./style";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../lib/axios";
import bag from "../../assets/bag.png";
import { CartContext } from "../../Context/CartContext";
import { Skeleton } from "../Skeleton/Skeleton";

type Products = {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: string;
  photo: string;
  amount: number;
};

export function Card() {
  const [itens, setItens] = useState<Products[]>([]);
  const [isLoading, setIsLoading] = useState<null | Boolean>(null);
  const { showItemCart } = useContext(CartContext);

  useEffect(() => {
    setIsLoading(true);
    axios.get(baseUrl).then((response) => {
      setItens(response.data.products);
      setIsLoading(false);
    });
  }, []);

  return (
    <Container>
      {isLoading ? (
        <>
          <Skeleton width={217} height={285} borderRadius={8} />
          <Skeleton width={217} height={285} borderRadius={8} />
          <Skeleton width={217} height={285} borderRadius={8} />
          <Skeleton width={217} height={285} borderRadius={8} />
          <Skeleton width={217} height={285} borderRadius={8} />
          <Skeleton width={217} height={285} borderRadius={8} />
          <Skeleton width={217} height={285} borderRadius={8} />
          <Skeleton width={217} height={285} borderRadius={8} />
        </>
      ) : (
        itens.map((item: Products) => (
          <div key={item.id} className="card">
            <img src={item.photo} alt="Fotos dos produtos" className="photo" />
            <div className="content">
              <p className="name">{item.name}</p>
              <p className="price">R${item.price}</p>
            </div>
            <p className="description">
              Redesigned from scratch and completely revised.
            </p>

            <button className="btn" onClick={() => showItemCart(item)}>
              <img src={bag} alt="imagem da bolsa" /> COMPRAR
            </button>
          </div>
        ))
      )}
    </Container>
  );
}
