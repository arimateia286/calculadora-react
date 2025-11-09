import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 16px;
    max-width: 400px;
    background-color: #01ff5f;
    filter: drop-shadow(8px 8px 0 rgba(0, 0, 0, 0.25));
`;

export const Row = styled.div`
    display: flex;
    gap: 8px;
    justify-content: space-between;
    width: 100%;
    height: 80px;
`;

export const ButtonsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    width: 100%;
    padding: 10px;
`;