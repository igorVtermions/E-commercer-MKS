import { Card } from "../Card/Card";
import { Container } from "./style";

export function Home (){
    return(
        <Container >
            <div className="home">
                {<Card />}
            </div>
        </Container>
    )
}