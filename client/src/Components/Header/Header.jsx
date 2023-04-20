import { useState } from "react";
import logo from "../../images/logo.png";
import { AppBar, Toolbar, Box, Drawer,List, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import CustomButtons from "./CustomButton";
import MenuIcon from "@mui/icons-material/Menu";

//components
import Search from "./Search";
import { Link } from "react-router-dom";

const Myappbar = styled(AppBar)`
  background: #000;
  height: 55px;
`;
const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
  color: #ffffff;
  text-decoration: none;
`;

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  color: "#fff",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const CustomButtonWrapper = styled("span")(({ theme }) => ({
  margin: "0 5% 0 auto",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Header = () => {
  const [open, setOpen] = useState(false);

  const list = () => (
    <Box style={{ width: 200 }} onClick={() => setOpen(false)}>
      <List>
        <listItem button>
          <CustomButtons />
        </listItem>
      </List>
    </Box>
  );

  return (
    <Myappbar>
      <Toolbar style={{ minHeight: 55 }}>
        <MenuButton onClick={() => setOpen(true)}>
          <MenuIcon />
        </MenuButton>
        <Drawer open={open} onClose={() => setOpen(false)}>
          {list()}
        </Drawer>
        <Component>
          <Link to="/" style={{ textDecoration: "null" }}>
            <img src={logo} alt="logo" style={{ width: 150 }}></img>
          </Link>
        </Component>
        <Search />
        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </Myappbar>
  );
};

export default Header;
