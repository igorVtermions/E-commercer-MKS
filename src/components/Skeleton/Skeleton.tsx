import { Container } from "./style";

type Props = {
  width: number | string;
  height: number | string;
  borderRadius?: number;
};

export function Skeleton({ width, height, borderRadius }: Props) {
  return (
  <Container style={{ width, height, borderRadius }} />
  );
}
