import React, { Component, useRef, useState, useEffect, useImperativeHandle, forwardRef } from "react";

const URLCollector = forwardRef((props, ref) => {

  const [urlType, setType] = useState("city");
  const [copied, setCopyStatus] = useState(0);
  const [result, setResult] = useState(null);
  const btnRef = useRef();

  const copyToClip = ()  => {
    navigator.clipboard.writeText(result);
    setCopyStatus(1)
    setTimeout(() => {
        setCopyStatus(0)
    }, 2000)
  };

  const calcNewURL = ()  => {
      console.log("here")
    setResult(urlType);
  };

  useImperativeHandle(ref, () => ({

    calcNewURL () {
        setResult(urlType);
      }

  }));

  return (
    <div className="animate__animated animate__slideInLeft">
      <div className="urlCollWrapper">
        <div className="tabSelectorWrapper">
          <ul>
            <li
              style={{
                boxShadow: urlType == "city" ? "0 0 3px lightgray" : "none",
                backgroundColor:
                  urlType == "city" ? "rgb(255,123,90)" : "white",
                color: urlType == "city" ? "white" : "lightgray",
              }}
              onClick={() => setType("city")}
            >
              City, Zip, County
            </li>
            <li
              style={{
                boxShadow: urlType == "poly" ? "0 0 3px lightgray" : "none",
                backgroundColor:
                  urlType == "poly" ? "rgb(255,123,90)" : "white",
                color: urlType == "poly" ? "white" : "lightgray",
              }}
              onClick={() => setType("poly")}
            >
              Polygon
            </li>
            <li
              style={{
                boxShadow: urlType == "special" ? "0 0 3px lightgray" : "none",
                backgroundColor:
                  urlType == "special" ? "rgb(255,123,90)" : "white",
                color: urlType == "special" ? "white" : "lightgray",
              }}
              onClick={() => setType("special")}
            >
              Special Filter
            </li>
          </ul>
        </div>
        
        <div>
            <input className="urlInput" type="url" required placeholder="Enter your URL..."></input>
        </div>

        <div className="resultsArea">
            <div className="result">
                <p ref={btnRef} className="message">{result !== null ? result : ""}</p>
            </div>
            <button className="clip-btn" onClick={() => copyToClip()} className="copy-btn" disabled={result !== null ? "" : "true"} style={{backgroundColor: result !== null ? "rgb(255, 123, 90)" : "rgba(255, 123, 90, 0.3)"}}><i className={copied === 0 ? "fa fa-clipboard" : "fa fa-check"}></i></button>
            <button className="go-btn"  onClick={() => calcNewURL()}>GO</button>
        </div>

      </div>
    </div>
  )
            })
            export default URLCollector;
