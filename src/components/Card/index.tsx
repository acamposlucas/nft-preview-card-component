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
  SelectButton,
} from "./styles";
import imageEquilibrium from "../../assets/images/image-equilibrium.jpg";
import creatorImg from "../../assets/images/image-avatar.png";

import nftList from "./nft-list.json";

type NFT = typeof nftList[0];

export default function Card(props: NFT) {
  const { title, number, description, price, days, creator } = props;
  return (
    <Container>
      <ImageContainer>
        <Image src={imageEquilibrium} />
        <ImageOverlay />
      </ImageContainer>
      <SelectButton>
        {title} <span>#{number}</span>
      </SelectButton>
      <Text>{description}</Text>
      <NFTInformation>
        <NFTPrice>{price} ETH</NFTPrice>
        <NFTTimer>{days} days left</NFTTimer>
      </NFTInformation>
      <Creator>
        <CreatorImg src={creatorImg} alt="" />
        <CreatorInfo>
          Creation of <span>{creator}</span>
        </CreatorInfo>
      </Creator>
    </Container>
  );
}
