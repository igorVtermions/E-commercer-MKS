import { Container } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../lib/axios";
import bag from "../../assets/bag.png";

type Products = {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: string;
  photo: string;
};

export function Card() {
  const [itens, setItens] = useState<Products[]>([]);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setItens(response.data.products);
      console.log(response.data.products)
    });
  }, []);

  return (
    <Container>
      {itens.map((item: Products) => (
        <div key={item.id} className="card">
          <img src={item.photo} alt="Fotos dos produtos" className="photo" />
          <div className="content">
            <p className="name">{item.name}</p>
            <p className="price">R${item.price}</p>
          </div>
          <p className="description">
            Redesigned from scratch and completely revised.
          </p>

          <button className="btn">
            <img src={bag} alt="imagem da bolsa" /> COMPRAR
          </button>
        </div>
      ))}
    </Container>
  );
}