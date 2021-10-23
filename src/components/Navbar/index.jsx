import styled from "styled-components";
import {
  VeryPaleOrange,
  NavContainer,
  BluePolice,
  LinkButton,
  DimGray,
} from "components/personal-general-styling";

const Nav = styled(NavContainer)`
  background-color: ${DimGray};
`;

const NavLink = styled(LinkButton)`
  color: #fff;
  :hover {
    color: ${BluePolice};
    background-color: ${VeryPaleOrange};
  }
`;

const LinkList = [
  {
    url: "/home",
    value: "Home",
  },
  {
    url: "/about",
    value: "About",
  },
  {
    url: "/services",
    value: "Services",
  },
  {
    url: "/portfolio",
    value: "Portfolio",
  },
  {
    url: "/contact",
    value: "Contact",
  },
];

const Navbar = () => {
  return (
    <Nav>
      {LinkList?.map((item, index) => {
        return (
          <NavLink key={index} to={item?.url}>
            {item?.value}
          </NavLink>
        );
      })}
    </Nav>
  );
};

export default Navbar;
