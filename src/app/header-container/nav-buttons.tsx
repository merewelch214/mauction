import { Button } from "@mui/material";
import React from "react";

const NavButtons: React.FC = () => {
  return (
    <div className="nav-buttons">
      <Button>Buy</Button>
      <Button>Sell</Button>
      <Button>About Us</Button>
      <Button>Login</Button>
    </div>
  );
};

export default NavButtons;
