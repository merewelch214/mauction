import React from "react";
import "./App.css";
import Header from "../src/app/header-container/header";
import Body from "../src/app/body-container/body-container";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

export default App;
