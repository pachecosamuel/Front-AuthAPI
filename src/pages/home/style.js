import styled from "styled-components";

export const ContainerStyled = styled.div`
    /* background-color: var(--branco); */
    box-shadow: 1px 1px 5px  var(--preto-primario);
    border: 1px solid;
    min-height: calc(100vh - 2rem);
    padding-inline: 0.75rem;
    margin-block: 1rem;
    border-radius: 1rem;
    color: var(--cor-fonte);
    font-family: 'Source Sans Pro';
`

export const HeaderStyled = styled.header`
    background-color: var(--verde-primario);
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.5rem;
    color: var(--branco);
    font-size: 2rem;
    text-align: center;
`