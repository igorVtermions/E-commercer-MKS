import { Card } from "../components/Card/Card";
import { Container } from "./style";

export function Home() {
  return (
    <Container>
      <div className="home">{<Card />}</div>
    </Container>
  );
}
