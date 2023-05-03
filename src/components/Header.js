import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <LogoLink to="/">
        <LogoImage src="./images/logo.png" alt="my logo image" />
      </LogoLink>
      <NavWrapper>
        <Nav />
      </NavWrapper>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 15rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  align-items: center;
  position: relative;
`;

const LogoLink = styled(NavLink)`
  position: absolute;
  left: 4rem;
  flex: 1;
`;

const LogoImage = styled.img`
  height: 15rem;
  width: 15rem;
`;

const NavWrapper = styled.div`
  margin-left: auto;
`;

export default Header;