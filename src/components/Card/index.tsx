import { Container } from "./styles";
import imageEquilibrium from "../../assets/images/image-equilibrium.jpg";
import { ReactComponent as LogoNFT } from "../../assets/images/icon-view.svg";
export default function Card() {
  return (
    <Container>
      <img src={imageEquilibrium} alt="Equilibrium" className="nft-img" />
    </Container>
  );
}
