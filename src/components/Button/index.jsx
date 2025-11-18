import { ButtonContainer, DoubleButton } from "./styles";

const Button = ({ label, onClick }) => {
  let labelColor, backColor;

  switch (label) {
    case "+":
    case "−":
    case "×":
    case "÷":
      backColor = "#fc9526";
      labelColor = "white";
      break;
    case "AC":
    case "%":
    case "+/−":
      backColor = "#a5a5a5";
      labelColor = "black";
      break;
    default:
      backColor = "#333333";
      labelColor = "white";
  }

  if (label === "0") {
    return (
      <DoubleButton style={{
        color: labelColor,
        backgroundColor: backColor,
      }} onClick={onClick}>{label}
      </DoubleButton>
    );
  }

  return (
    <ButtonContainer style={{
      color: labelColor,
      backgroundColor: backColor,
    }} onClick={onClick}>{label}
    </ButtonContainer>
  );
}

export default Button;
