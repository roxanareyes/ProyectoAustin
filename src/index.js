import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-react";
import "./styles.css";

import Header from "./components/common/Header";
import PageBody from "./components/common/PageBody";

function App() {
  return (
    <div className="App">
      <Header />
      <PageBody>
        <br />
        <h1>Cats!</h1>
        <hr />
      </PageBody>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
