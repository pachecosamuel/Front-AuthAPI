import styled from "styled-components";

export const PageContainer = styled.div`
    @import url("../../css-config/colors.css");

    width: 100%;
    min-height: calc(100vh - 2rem);
    background-color: var(--branco);    
    border-radius: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    box-shadow: 1px 1px 5px var(--preto-primario);
    overflow: hidden;
`