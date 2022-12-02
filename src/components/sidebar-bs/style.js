import styled from "styled-components";

export const ContainerNavBsStyle = styled.div`
  //@import url("../../css-config/colors.css");

  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .collapse-sidebar-action {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .collapse-sidebar-action:hover {
    cursor: pointer;
  }

  .sidebar-bs-nav {
    display: flex;
    gap: 1.2rem;

    .sidebar-nav-item {
      .area-icons-label {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        svg {
          font-size: 28px;
        }
      }      
    }
  }

  .container-usuario {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: var(--verde-primario);
    color: var(--branco);
    padding: 0.4rem;
    width: 100%;
    border-radius: 5px;

    svg {
      font-size: 28px;
      color: var(--branco);
    }

    .usuario-info {
      display: flex;
      flex-direction: column;
      font-size: 100%;

      #usuario-departamento {
        font-size: 100%;
        font-weight: 200;
      }
    }
  }
`;

export const LogoArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  background-color: var(--branco) !important;

  img {
    width: 100%;
    max-width: 7rem;
  }
`;

export const ContainerSideBar = styled.div`
  //@import url("../../css-config/colors.css");

  display: none;
  background-color: var(--branco) !important;

  .button-show-area {
    padding: 1rem;
    box-shadow: 1px 1px 5px var(--preto-primario);
    display: flex !important;
    justify-content: space-between;
    align-items: center;

    .area-central {
      img {
        width: 5rem;
      }
    }

    .area-direita {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.5rem;

      svg {
        font-size: 36px;
      }
    }

    .button-show {
      background-color: var(--branco) !important;
      width: 42px !important;
      svg {
        color: #444 !important;
        font-size: 36px;
        transition: 0.3s;

        &:hover {
          cursor: pointer;
          color: var(--verde-primario) !important;
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const CloseIconArea = styled.div`
  //@import url("../../css-config/colors.css");

  svg {
    font-size: 28px !important;
    transition: 0.3s;

    &:hover {
      cursor: pointer;
      color: var(--verde-primario) !important;
    }
  }
`;