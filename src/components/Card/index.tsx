import {
  Container,
  Image,
  Title,
  TitleID,
  Text,
  NFTInformation,
  NFTPrice,
  NFTTimer,
} from "./styles";
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
      <NFTInformation>
        <NFTPrice>0.041 ETH</NFTPrice>
        <NFTTimer>3 days left</NFTTimer>
      </NFTInformation>
    </Container>
  );
}
