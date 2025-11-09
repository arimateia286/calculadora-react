import { ButtonContainer } from "./styles";

const Button = ({ label, onClick }) => {
  let labelColor;
  
  switch (label) {
    case "+":
    case "-":
    case "x":
    case "/":
      labelColor = "orange";
      break;
    case "C":
      labelColor = "red";
      break;
    case "=":
      labelColor = "green";
      break;
    case "±":
      labelColor = "blue";
      break;
    default:
      labelColor = "white";
  }

  return (
    <ButtonContainer>
      <button style={{
        color: labelColor
      }} onClick={onClick}>{label}</button>
    </ButtonContainer>
  );
}

export default Button;
