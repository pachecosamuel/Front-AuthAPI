import { React } from "react";
import Button from "react-bootstrap/Button";
import { ButtonStyle } from "./style";

function ButtonComponent({ tamanho, bgColor, textColor, acao, children }) {
    return (
        <ButtonStyle tamanho={tamanho} bgColor={bgColor} textColor={textColor}>
            <Button
                variant={bgColor}
                className="botao-default"
                style={{ maxWidth: "100%" }}
                onClick={acao}
            >
                {children}
            </Button>
        </ButtonStyle>
    );
}

export default ButtonComponent;