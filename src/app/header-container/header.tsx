import React from "react";
import Button from "@mui/material/Button";

const Header: React.FC = () => {
  return (
    <div className="App">
      <h1>mauction</h1>
      <Button>Buy</Button>
      <Button>Sell</Button>
      <Button>About Us</Button>
      <Button>Login</Button>
    </div>
  );
};

export default Header;
