import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./components/Card";
import Welcome from "./components/Welcome";
import exerciseImg from "./images/exercise.png";

const container = document.getElementById("root");

ReactDOM.render(
  <div>
    <Welcome username="Gabriel" />
    <Card
      title="Tecnnique Guides"
      description="Learn amazing street workout and calisthenics"
      img={exerciseImg}
      leftColor="#A74CF2"
      rightColor="#617BFB"
    />
  </div>,
  container
);
