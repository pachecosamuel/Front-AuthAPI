import styled from "styled-components";

export const ContainerTablePageStyle = styled.div`
  .accordion-button {
    outline: none !important;
    box-shadow: none !important;
    border: 0px !important;
  }

  .accordion-button:not(.collapsed) {
    background-color: var(--verde-primario) !important;
    background-image: none !important;
    color: var(--branco) !important;

    ::after {
      filter: invert(100%) !important;
    }
  }

  .code-container {
    background-color: #111;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
`;