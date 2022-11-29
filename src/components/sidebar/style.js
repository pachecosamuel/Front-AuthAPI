import styled from "styled-components";

export const ContainerNavStyle = styled.div`
  //@import url("../../css-config/colors.css");
 
  font-size: 110%;
  margin: 0 !important;
  width: ${(props) => (props.collapse ? "7%" : "20%")};
  margin-top: 1rem !important;
  height: calc(100vh - 2rem);
  padding-top: 1rem;
  box-shadow: 1px 1px 5px var(--preto-primario);
  border-radius: 0rem 1rem 1rem 0rem;
  overflow: hidden;
  background-color: var(--branco);
  position: fixed;
  z-index: 9999;
  transition: 0.3s;

  .column-container {
    height: calc(100vh - 4rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .collapse-sidebar-action {
      svg {
        font-size: 28px;
        &:hover {
          cursor: pointer;
          color: var(--verde-primario) !important;
        }
      }
    }

    .collapse-sidebar-action:hover {
      cursor: pointer;
    }

    .logo-area {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;
      background-color: var(--branco) !important;

      img {
        max-width: ${(props) => (props.collapse ? "70%" : "6rem")};
      }
    }

    .sidebar-nav {
      display: flex;
      flex-direction: column;
      font-size: 1.2rem;
      align-items: ${(props) => (props.collapse ? "center" : "flex-start")};
      width: ${(props) => (props.collapse ? "auto" : "100%")};

      .sidebar-nav-item {
        width: ${(props) => (props.collapse ? "auto" : "100%")};
        padding: 0.5rem;
        transition: 0.3s;
        :hover {
          color: ${(props) =>
            props.collapse
              ? "var(--preto-primario) !important"
              : "var(--branco) !important"};
          background-color: ${(props) =>
            props.collapse ? "none" : "var(--verde-primario)"};
        }
      }

      .area-icons-label {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        &:hover {
          cursor: pointer;
        }
        svg {
          font-size: 28px;
          &:hover {
            color: ${(props) =>
              props.collapse
                ? "var(--verde-primario) !important"
                : "var(--branco) !important"};
          }
        }
      }
    }    

    .container-usuario {
      display: flex;
      align-items: center;
      justify-content: ${(props) =>
        props.collapse ? "center" : "space-around"};
      background-color: ${(props) =>
        props.collapse ? "var(--branco)" : "var(--verde-primario)"};
      color: var(--branco);
      padding: 0.4rem;
      width: 95%;
      border-radius: 5px;

      svg {
        font-size: 28px;
        color: ${(props) =>
          props.collapse ? "var(--preto-primario)" : "var(--branco)"};

        :hover {
          cursor: pointer;
          color: ${(props) =>
            props.collapse ? "var(--verde-primario) !important" : ""};
        }
      }

      .usuario-info {
        display: flex;
        flex-direction: column;
        font-size: 100%;
      }

      .usuario-info #usuario-departamento {
        font-size: 100%;
        font-weight: 200;
      }
    }
  } 
`;