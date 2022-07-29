import styled from "styled-components";

export default function Navbar() {
  return <NavbarS> CINEFLEX </NavbarS>;
}

const NavbarS = styled.div`
  background-color: #c3cfd9;
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  color: #e8833a;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
`;
