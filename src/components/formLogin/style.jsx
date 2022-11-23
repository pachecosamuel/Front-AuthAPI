import styled from "styled-components";

export const ContainerFormLoginStyle = styled.div`
  /* @import url("../../css-config/colors.css"); */
  
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    padding: 20px;
    border-color: var(--primary-gray);
  }

  a {
    text-decoration: none !important;
  }

  p {
    text-align: center;
  }
`;
export const BotaoStyle = styled.div`
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