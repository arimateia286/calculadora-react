import { InputContainer } from "./styles";

const Input = ({ value, firstNumber, operation, secondNumber }) => {
  return (
    <>
      <InputContainer>
        <p>
          {firstNumber} {operation} {secondNumber}
        </p>
        <input value={value} disabled />
      </InputContainer>
    </>
  );
};

export default Input;
