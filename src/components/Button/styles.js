import styled from "styled-components";

export const BaseButton = styled.button`
    width: 100%;
    min-width: 48px;
    border: none;
    background: none;
    font-size: 2.5rem;

    &:hover {
        filter: brightness(0.8);
    }
`;

export const ButtonContainer = styled(BaseButton)`
    aspect-ratio: 1;
    border-radius: 50%;
`;

export const DoubleButton = styled(BaseButton)`
    grid-column: span 2;
    border-radius: 50px;
`;