import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;
  flex: 0.9;
  border-bottom: 2px solid gray;
  margin: 20px;

  p {
    font-size: 1.5rem;
    color: gray;
  }

  input {
    background: none;
    border: none;
    width: 100%;
    text-align: right;
    font-size: 5rem;
    color: white;
  }
`;
