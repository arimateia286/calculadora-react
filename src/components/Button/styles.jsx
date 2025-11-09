import styled from "styled-components";

export const ButtonContainer = styled.div`
    border: none;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        width: 100%;
        min-width: 48px;
        height: 64px;
        border: none;
        background: none;
        color: white;
        font-size: 32px;
        font-weight: bold;
    }

    &:hover {
        background-color: #111;
    }
`;