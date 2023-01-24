import { Navbar } from "./style";
import cart from "../../assets/cart.png"


export function Header(){
  
    

    return(
        <Navbar>
            <div className="logo">
                <p className="logo01">MKS</p>
                <p className="logo02">Sistemas</p>
            </div>
            <button className="place" >
                <img src={cart} alt="Carrinho de compras" className="cart"/>
                <p className="counter">0</p>
            </button>

        
        </Navbar>
    )
}