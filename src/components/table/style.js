import styled from "styled-components";

export const ContainerTable = styled.div`
  //@import url("../../css/css-config/colors.css");

  .table-area {
    width: 100%;
    background-color: var(--branco) !important;
  }

  .table {
    tbody {      
      td {
        border-bottom: none !important;
      }

      .coluna-acao {
        text-align: center;

        #icone-delete {
          color: #fa5a54;
          &:hover {
            color: var(--verde-primario);
            cursor: pointer;
          }
        }

        svg {
          font-size: 24px;
          &:hover {
            color: var(--verde-primario);
            cursor: pointer;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1280px) {
    .table-area {
      overflow-y: scroll !important;
    }
  }
`;