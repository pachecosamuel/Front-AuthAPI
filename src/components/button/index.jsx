import { React } from "react";
import Button from "react-bootstrap/Button";
import { ButtonStyle } from "./style";

function ButtonComponent({ tamanho, bgColor, textColor, acao, children, type, disabled }) {
    return (
        <ButtonStyle tamanho={tamanho} bgColor={bgColor} textColor={textColor}>
            <Button
                variant={bgColor}
                className="botao-default"
                style={{ maxWidth: "100%" }}
                onClick={acao}
                type={type}
                disabled={disabled}
            >
                {children}
            </Button>
        </ButtonStyle>
    );
}

export default ButtonComponent;