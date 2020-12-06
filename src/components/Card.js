import React, { Component } from "react";
import exerciseImg from "../images/exercise.png";
import "./styles/Card.css";

class Card extends Component {
  render() {
    return (
      <div className="card mx-auto Fitness-Card">
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img className="float-right" src={exerciseImg} alt="exerciseImg" />
            </div>
						<div className="col-6 Fitness-Card-Info">
              <h1>Tecnnique Guides</h1>
              <p>Learn amazing street workout and calisthenics</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
