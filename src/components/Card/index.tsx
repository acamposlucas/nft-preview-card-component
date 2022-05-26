import { Container, Image, Title, TitleID, Text } from "./styles";
import imageEquilibrium from "../../assets/images/image-equilibrium.jpg";
import { ReactComponent as LogoNFT } from "../../assets/images/icon-view.svg";
export default function Card() {
  return (
    <Container>
      <Image src={imageEquilibrium} alt="Equilibrium" />
      <Title>
        Equilibrium <TitleID>#3429</TitleID>
      </Title>
      <Text>Our Equilibrium collection promotes balance and calm.</Text>
    </Container>
  );
}
