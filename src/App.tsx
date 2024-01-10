import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/_base.scss";
import CursorPointer from "./component/cursor-pointer";
import Layout from "./pages/layout";

function App() {
  return (
    <div style={{ background: "black" }}>
      <Layout></Layout>
    </div>
  );
}

export default App;
