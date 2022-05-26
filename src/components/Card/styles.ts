import styled from "styled-components";
import ethereum from "../../assets/images/icon-ethereum.svg";
import timer from "../../assets/images/icon-clock.svg";

export const Container = styled.div`
  background-color: var(--card-bg);
  padding: 1.5rem;
  border-radius: 12px;
  width: 100%;
  max-width: 330px;
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
    transition: color 0.2s;

    &:hover {
      color: var(--cyan);
    }
  }
`;
