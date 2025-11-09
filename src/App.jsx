import { useState } from 'react';

import { Container, Content, ButtonsGrid, Row } from './styles';
import GlobalStyle from './global';

import Input from './components/Input';
import Button from './components/Button';

const App = () => {
  const buttons = "789+456-123/±0.x";

  const [currentValue, setCurrentValue] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleButtonClick = (value) => {
    if (value === "=") {
      if (firstNumber !== null && operation !== null) {
        const secondNumber = parseFloat(currentValue);
        let result;

        switch (operation) {
          case "+":
            result = firstNumber + secondNumber;
            break;
          case "-":
            result = firstNumber - secondNumber;
            break;
          case "x":
            result = firstNumber * secondNumber;
            break;
          case "/":
            result = firstNumber / secondNumber;
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
    } else if (value === "C") {
      setCurrentValue("0");
      setFirstNumber(null);
      setOperation(null);
    } else if (value === "±") {
      setCurrentValue((prev) =>
        prev.charAt(0) === "-" ? prev.slice(1) : "-" + prev
      );
    } else {
      if (["+", "-", "x", "/"].includes(value)) {
        setFirstNumber(parseFloat(currentValue));
        setOperation(value);
        setCurrentValue("0");
      } else {
        setCurrentValue((prev) => (prev === "0" ? value : prev + value));
      }
    };
  };
  return (
    <>
      <GlobalStyle />
      <Container>
        <Content>
          <Row>
            <Button
              label="C"
              onClick={() => handleButtonClick("C")}
            />
            <Input value={currentValue} />
            <Button
              label="="
              onClick={() => handleButtonClick("=")}
            />
          </Row>
          <ButtonsGrid>
            {buttons.split("").map((label, index) => {
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
  )
}

export default App