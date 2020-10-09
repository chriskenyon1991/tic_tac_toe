import React from "react";
import "./App.css";
import Box from "./Box";
import Winner from "./Winner";
import Reset from "./Reset";
class App extends React.Component {
  state = {
    board: Array(9).fill(null),
    isActive: true,
    gameOver: "gameover",
    winner: false,
  };

  resetBoard = () => {
    console.log("reset button");
    this.setState((currentStat) => {
      return (currentStat.board = Array(9).fill(null));
    });
  };

  handleArr = (val) => {
    let newBoard = [...this.state.board];
    let active = this.state.isActive;
    if (this.state.isActive === true && newBoard[val] === null) {
      newBoard[val] = "X";
      active = false;
    } else if (newBoard[val] === null) {
      newBoard[val] = "O";

      active = true;
    } else {
      return {
        board: newBoard,
        isActive: active,
      };
    }

    this.setState((prevState) => {
      return {
        board: newBoard,
        isActive: active,
      };
    });
  };
  render() {
    console.log(this.state.board);
    return (
      <div className="gameboard">
        <Winner
          value={this.state.board}
          winner={this.state.winner}
          gameover={this.state.gameOver}
        ></Winner>
        <div className="game">
          <Box
            value={this.state.board[0]}
            handleArr={() => this.handleArr(0)}
          ></Box>
          <Box
            value={this.state.board[1]}
            handleArr={() => this.handleArr(1)}
          ></Box>
          <Box
            value={this.state.board[2]}
            handleArr={() => this.handleArr(2)}
          ></Box>

          <Box
            value={this.state.board[3]}
            handleArr={() => this.handleArr(3)}
          ></Box>
          <Box
            value={this.state.board[4]}
            handleArr={() => this.handleArr(4)}
          ></Box>
          <Box
            value={this.state.board[5]}
            handleArr={() => this.handleArr(5)}
          ></Box>

          <Box
            value={this.state.board[6]}
            handleArr={() => this.handleArr(6)}
          ></Box>
          <Box
            value={this.state.board[7]}
            handleArr={() => this.handleArr(7)}
          ></Box>
          <Box
            value={this.state.board[8]}
            handleArr={() => this.handleArr(8)}
          ></Box>
        </div>
        <Reset resetBoard={this.resetBoard}></Reset>
      </div>
    );
  }
}

export default App;
