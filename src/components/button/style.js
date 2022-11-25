import styled from "styled-components";

export const ButtonStyle = styled.div`
    .botao-default{
        width:${props => props.tamanho} !important;
        background-color: ${props => props.bgColor} !important;
        color:${props => props.textColor} !important;        
        border: none !important;
        transition: 0.3s;

        &:hover{
            filter: brightness(0.8);
        }
    }
`;