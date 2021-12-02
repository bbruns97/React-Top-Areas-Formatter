import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container, Col } from "react-bootstrap/";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import URLCollector from "./URLCollector";

function App() {
  const [key, updateKey] = useState(1);

  const [collectors, updateCollectors] = useState([<URLCollector id={0}></URLCollector>]);

  const addCollector = () => {
    updateCollectors(collectors.concat(<URLCollector id={key}></URLCollector>));
    updateKey(key + 1);
  };

  const calcAll = () => {
    var btns = document.getElementsByClassName("go-btn");
    console.log(btns.length);
    for (var i = 0; i <= btns.length - 1; i++) {
      btns[i].click();
    }
  };

  return (
    <div style={{ paddingTop: "40px" }}>
      <div className="background"></div>

      <h1 className="title">Top Areas</h1>
      <h5 className="subtitle">Creating your top areas links has never been easier! Just paste your URL into the text box and click GO! You can even copy the link directly to your clipboard!</h5>

      <div style={{ width: "95%", maxWidth: "1000px", margin: "0 auto" }}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

        {collectors}

        <div className="under-sect">
          <button className="add-btn" onClick={() => calcAll()} style={{ marginRight: "10px" }}>
            CONVERT ALL
          </button>
          <button className="add-btn" onClick={() => addCollector()}>
            <i className="fa fa-plus" style={{ padding: "0", margin: "0 10px 0 0" }}></i> ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
