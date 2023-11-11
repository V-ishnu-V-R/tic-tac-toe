import React, { useState } from "react";
import "./ticTacToe.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  const toggle = () => {};
  return (
    <div className="container">
      <h1 className="title">
        Tic Tac Toe <span> React</span>
      </h1>
      <div className="board">
        <div className="row1">
          <div className="boxes">1</div>
          <div className="boxes">2</div>
          <div className="boxes">3</div>
        </div>
        <div className="row2">
          <div className="boxes">1</div>
          <div className="boxes">2</div>
          <div className="boxes">3</div>
        </div>
        <div className="row3">
          <div className="boxes">1</div>
          <div className="boxes">2</div>
          <div className="boxes">3</div>
        </div>
      </div>
      <button className="reset">Reset</button>
    </div>
  );
};

export default TicTacToe;
