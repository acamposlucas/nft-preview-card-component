import {
  Container,
  Image,
  Title,
  Text,
  NFTInformation,
  NFTPrice,
  NFTTimer,
  Creator,
  CreatorImg,
  CreatorInfo,
  ImageContainer,
  ImageOverlay,
} from "./styles";
import imageEquilibrium from "../../assets/images/image-equilibrium.jpg";
import creatorImg from "../../assets/images/image-avatar.png";

export default function Card() {
  return (
    <Container>
      <ImageContainer>
        <Image src={imageEquilibrium} />
        <ImageOverlay />
      </ImageContainer>
      <Title>
        Equilibrium <span>#3429</span>
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
