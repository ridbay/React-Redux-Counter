import React from "react";
import Counter from "./Counter";
import { Provider } from "react-redux";
import "./App.css";

const App = () => {
  return (
    <Provider>
      <Counter />
    </Provider>
  );
};

export default App;
