import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    align-items: end;
    flex-grow: 0.5;

    input {
        background: none;
        border: none;
        width: 100%;
        padding: 4rem 20px;
        text-align: right;
        font-size: 6rem;
        color: white;
    }

    @media(min-width: 768px) {
        flex-grow: 0;
        height: 150px;

        input {
            padding: 2rem 20px;
        }
    }
`;