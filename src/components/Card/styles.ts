import styled from "styled-components";

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
`;

export const TitleID = styled.span`
  color: var(--white);
`;

export const Text = styled.p`
  color: var(--soft-blue);
  font-weight: var(--light);
`;
