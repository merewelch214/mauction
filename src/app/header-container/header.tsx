import React from "react";
import Button from "@mui/material/Button";
import Logo from "./logo";

const Header: React.FC = () => {
  return (
    <div className="App">
      <Logo />
      <Button>Buy</Button>
      <Button>Sell</Button>
      <Button>About Us</Button>
      <Button>Login</Button>
    </div>
  );
};

export default Header;
