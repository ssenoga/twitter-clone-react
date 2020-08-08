import React from "react";
import "./styles.css";

import Left from "./components/Left";
import Central from "./components/Central";
import Right from "./components/Right";

export default function App() {
  return (
    <div className="App">
      <Left />
      <Central />
      <Right />
    </div>
  );
}
