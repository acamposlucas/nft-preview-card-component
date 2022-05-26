import {
  Container,
  Image,
  Title,
  TitleID,
  Text,
  NFTInformation,
  NFTPrice,
  NFTTimer,
  Creator,
  CreatorImg,
  CreatorInfo,
} from "./styles";
import imageEquilibrium from "../../assets/images/image-equilibrium.jpg";
import creatorImg from "../../assets/images/image-avatar.png";
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
      <Creator>
        <CreatorImg src={creatorImg} alt="" />
        <CreatorInfo>
          Creation of <span>Jules Wyvern</span>
        </CreatorInfo>
      </Creator>
    </Container>
  );
}
