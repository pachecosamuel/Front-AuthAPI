import styled from "styled-components";

export const ContainerForm = styled.div`
  @import url("../../css-config/colors.css");

  .form-cadastro {
    width: 100%;
    margin: auto;   
    background-color: var(--branco) !important;
    border-radius: 0.5rem;
    padding: 1rem;

    .input:focus {
      outline: none !important;
      border: none !important;
      box-shadow: none !important;
    }
  }
`;
