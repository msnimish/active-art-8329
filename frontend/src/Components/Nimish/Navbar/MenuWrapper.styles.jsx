import styled from "styled-components";

export const MenuWrapper = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: 100%;

  li {
    list-style-type: none;
  }
  .MenuButtonContainer {
    padding: 20px 20px;
  }
  .MenuButtonContainer > Button:hover {
    background-color: white;
  }
  .MenuButtonContainer:hover {
    background-color: white;
    color: #faa619;
    height: 100%;
  }

  @media all and (max-width: 992px) {
    display: none;
    li {
      list-style-type: none;
    }
  }
`;
