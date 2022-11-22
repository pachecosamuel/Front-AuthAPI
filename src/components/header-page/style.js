import styled from "styled-components";
import { CgHome } from "react-icons/cg";

export const ContainerHeader = styled.div`
    @import url("../../css/css-config/colors.css");

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    background-color: var(--verde-primario);
    color: var(--branco);   
    height: 100px;
    
    span {
        font-size: 2rem;        
    }

    svg {
        font-size: 48px;
    }
`;

export const Icon = styled(CgHome)`
    font-size: 1.4rem;
`