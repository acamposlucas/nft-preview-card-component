import styled from "styled-components";
import ethereum from "../../assets/images/icon-ethereum.svg";
import timer from "../../assets/images/icon-clock.svg";
import imageEquilibrium from "../../assets/images/image-equilibrium.jpg";
import iconView from "../../assets/images/icon-view.svg";

export const Container = styled.div`
  background-color: var(--card-bg);
  padding: 1.5rem;
  border-radius: 12px;
  width: 100%;
  max-width: 330px;
`;

export const ImageContainer = styled.div`
  height: 280px;
  aspect-ratio: 1;
  border-radius: 8px;
  position: relative;
`;

export const ImageOverlay = styled.div`
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 8px;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  cursor: pointer;

  &:hover {
    display: flex;
    background-color: var(--cyan-overlay);
    background-image: url(${iconView});
    background-repeat: no-repeat;
    background-size: 20%;
    background-position: center;
  }
`;

export const Image = styled.img`
  aspect-ratio: 1;
  height: 280px;
  border-radius: 8px;
`;

export const Title = styled.h1`
  color: var(--white);
  font-size: 22px;
  font-weight: var(--bold);
  margin: 1rem 0;
  transition: color 0.2s;
  width: fit-content;
  cursor: pointer;
  &:hover {
    color: var(--cyan);
  }
`;

export const Text = styled.p`
  color: var(--soft-blue);
  font-weight: var(--light);
`;

export const NFTInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const NFTPrice = styled.span`
  color: var(--cyan);
  font-weight: bold;
  display: flex;
  align-items: center;

  &:before {
    content: "";
    background-image: url(${ethereum});
    background-repeat: no-repeat;
    background-size: contain;
    width: 12px;
    height: 16px;
    display: block;
    margin-right: 0.2rem;
  }
`;

export const NFTTimer = styled.span`
  color: var(--soft-blue);
  display: flex;
  align-items: center;

  &:before {
    content: "";
    background-image: url(${timer});
    background-repeat: no-repeat;
    background-size: contain;
    width: 16px;
    height: 16px;
    display: block;
    margin-right: 0.2rem;
  }
`;

export const Creator = styled.div`
  align-items: center;
  border-top: 1px solid var(--line);
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
`;

export const CreatorImg = styled.img`
  border-radius: 100%;
  border: 1px solid var(--white);
  height: 35px;
  width: 35px;
`;

export const CreatorInfo = styled.p`
  color: var(--soft-blue);

  span {
    color: var(--white);
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: var(--cyan);
    }
  }
`;
