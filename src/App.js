import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);

export default App;
