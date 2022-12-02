import styled from 'styled-components';

export const ContainerCardSimplesStyle = styled.div`
@import url('../../css-config/colors.css');

> div {
border-radius: 0.3rem !important;
background-color: var(--verde-primario);
box-shadow: 0.1px 0.1px 3px var(--preto-primario);
color: var(--branco);
transition: 0.3s;

.card-body {
svg {
cursor: pointer;

:hover {
filter: brightness(0.8);
}
}
}
}
`;