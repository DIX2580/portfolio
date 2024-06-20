import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import styled from "@emotion/styled";

export const Nav = styled.nav`
  background: transparent;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;

  @media screen and (max-width: 768px) {
    height: 80px;
  }
`;

export const NavLink = styled(ScrollLink)`
  color: rgb(119, 119, 121);
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #f6f6f6;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled('div')`
  img {
    width: 150px;
    height: 150px;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 100px;
      height: 100px;
      display: block; 
    }
  }

  @media screen and (max-width: 576px) {
    img {
      width: 80px;
      height: 80px;
    }
  }
`;


export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -24px;
  gap: 35px;
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
