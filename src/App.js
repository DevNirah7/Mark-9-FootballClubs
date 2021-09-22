import React, { useState } from "react";
import "./styles.css";

var bestClubs = {
  England: [
    {
      name: "Manchester United FC",
      titles: "20",
      city: "Manchester"
    },
    {
      name: "Liverpool FC",
      titles: "19",
      city: "Liverpool"
    },

    {
      name: "Arsenal FC",
      titles: "13",
      city: "London"
    },
    {
      name: "Everton FC",
      titles: "9",
      city: "Liverpool"
    },
    {
      name: "Manchester City",
      titles: "7",
      city: "Manchester"
    }
  ],

  Spain: [
    {
      name: "Real Madrid CF",
      titles: "34",
      city: "Madrid"
    },
    {
      name: "FC Barcelona",
      titles: "26",
      city: "Barcelona"
    },
    {
      name: "Club Atlético de Madrid,",
      titles: "11",
      city: "Madrid"
    },
    {
      name: "Athletic Bilbao",
      titles: "8",
      city: "Bibao"
    },
    {
      name: "Valencia CF",
      titles: "6",
      city: "Valencia"
    }
  ],
  Italy: [
    {
      name: "Juventus",
      titles: "36",
      city: "Turin"
    },
    {
      name: "Inter Milan",
      titles: "19",
      city: "Milan"
    },
    {
      name: "AC Milan",
      titles: "18",
      city: "Milan"
    },
    {
      name: "Genoa CFC",
      titles: "9",
      city: "Genoa"
    },
    {
      name: "Torino FC",
      titles: "7",
      city: "Turin"
    }
  ]
};

var bestC = Object.keys(bestClubs);

export default function App() {
  var [z, setZ] = useState("England");

  function onClickHandler(event) {
    setZ(event);
  }

  return (
    <div className="App">
      <div className="nav">
        <h1 className="nav" id="title">
          ⚽ Football clubs
        </h1>
        <p className="nav" id="para-title">
          A list of some of the most sucessful football clubs
        </p>
      </div>

      <div>
        <p id="select"> Select the respective country to view the club's</p>
        {bestC.map((x) => (
          <button id="btn" onClick={() => onClickHandler(x)}>
            {x}
          </button>
        ))}
      </div>

      <hr />

      <div>
        <ul id="li">
          {bestClubs[z].map((y) => (
            <li id="list" key={y}>
              <div id="club">Club: {y.name}</div>
              <div id="titles">Titles: {y.titles}</div>
              <div id="city">City: {y.city}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
