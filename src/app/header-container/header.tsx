import React from "react";
import Logo from "./logo";
import NavButtons from "./nav-buttons";
import SearchBar from "./search-bar";

const Header: React.FC = () => {
  return (
    <>
      <div className="header-container">
        <Logo />
        <NavButtons />
      </div>
      <SearchBar />
    </>
  );
};

export default Header;
