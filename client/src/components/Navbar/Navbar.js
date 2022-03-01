import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu=()=>setClick(false)

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon src="./images/logoF.png" alt="" />
             
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/'>Nous connaitre</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/nos-fonds'>Nos fonds</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/responsabilité-sociale'>Responsabilité Sociale</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/nos-réalisations'>Nos réalisations</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/actualités'>Actualités</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/contact'>Contact</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
