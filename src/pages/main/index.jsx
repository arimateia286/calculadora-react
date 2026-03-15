import { useState } from "react";

import { Container, Content, ButtonsGrid } from "./styles";

import Input from "../../components/Input";
import Button from "../../components/Button";

const Main = () => {
  const buttons = [
    "AC",
    "+/−",
    "%",
    "÷",
    "7",
    "8",
    "9",
    "×",
    "4",
    "5",
    "6",
    "−",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  const [currentValue, setCurrentValue] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);

  const [previewFirstNumber, setPreviewFirstNumber] = useState(null);
  const [previewSecondNumber, setPreviewSecondNumber] = useState(null);
  const [previewOperation, setPreviewOperation] = useState(null);

  const handleButtonClick = (value) => {
    if (firstNumber == null) setPreviewSecondNumber(null);
    if (value === "=") {
      if (firstNumber !== null && operation !== null) {
        const secondNumber = parseFloat(currentValue);
        setPreviewSecondNumber(secondNumber);
        let result;

        switch (operation) {
          case "+":
            result = firstNumber + secondNumber;
            break;
          case "−":
            result = firstNumber - secondNumber;
            break;
          case "×":
            result = firstNumber * secondNumber;
            break;
          case "÷":
            result = firstNumber / secondNumber;
            break;
          case "%":
            result = (firstNumber / 100) * secondNumber;
            break;
          default:
            return;
        }

        if (result.toString().length > 12) {
          result = result.toFixed(10);
        }

        setCurrentValue(result.toString());
        setFirstNumber(null);
        setOperation(null);
      }
    } else if (value === "AC") {
      setCurrentValue("0");
      setFirstNumber(null);
      setOperation(null);

      setPreviewFirstNumber(null);
      setPreviewSecondNumber(null);
      setPreviewOperation(null);
    } else if (value === "+/−") {
      setCurrentValue((prev) =>
        prev.charAt(0) === "−" ? prev.slice(1) : "−" + prev,
      );
    } else if (value === ".") {
      setCurrentValue((prev) => (prev.includes(".") ? prev : prev + "."));
    } else {
      if (["+", "−", "×", "÷", "%"].includes(value)) {
        setFirstNumber(parseFloat(currentValue));
        setOperation(value);
        setCurrentValue("0");

        setPreviewFirstNumber(parseFloat(currentValue));
        setPreviewOperation(value);
      } else {
        setCurrentValue((prev) => (prev === "0" ? value : prev + value));
      }
    }
  };
  return (
    <>
      <Container>
        <Content>
          <Input
            value={currentValue}
            firstNumber={previewFirstNumber}
            operation={previewOperation}
            secondNumber={previewSecondNumber}
          />
          <ButtonsGrid>
            {buttons.map((label, index) => {
              return (
                <Button
                  key={index}
                  label={label}
                  onClick={() => handleButtonClick(label)}
                />
              );
            })}
          </ButtonsGrid>
        </Content>
      </Container>
    </>
  );
};

export default Main;
