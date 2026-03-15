import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    background-color: black;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
  background-color: black;

  @media (min-width: 768px) {
    height: 95vh;
    width: calc(95vh * 9 / 16);
    border-radius: 10px;
    filter: drop-shadow(0 8px 8px rgba(0, 0, 0, 0.5));
  }
`;

export const ButtonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  width: 95%;
`;
