import React from "react";
import btnImg from "../images/add.png";
import "./styles/AddExercises.css";
import { Link } from "react-router-dom";

function AddExercise(props) {
  return (
    <Link to="/exercise/new">
      <img className="Add-Center" src={btnImg} alt="AddExercise" />
    </Link>
  );
}

export default AddExercise;
