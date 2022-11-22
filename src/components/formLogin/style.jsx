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