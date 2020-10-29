import React from "react";
import "./App.css";
import Box from "./Box";
import Winner from "./Winner";
import Reset from "./Reset";
class App extends React.Component {
  state = {
    board: Array(9).fill(null),
    turn: true,
    winner: false,
    gameOver: false,
    player1: 0,
    player2: 0,
  };

  resetBoard = () => {
    console.log("reset button");
    this.setState((currentStat) => {
      return (currentStat.board = Array(9).fill(null));
    });
  };

  handleArr = (val) => {
    let newBoard = [...this.state.board];
    let active = this.state.turn;
    if (this.state.turn === true && newBoard[val] === null) {
      newBoard[val] = "X";
      active = false;
    } else if (newBoard[val] === null) {
      newBoard[val] = "O";

      active = true;
    } else {
      return {
        board: newBoard,
        turn: active,
      };
    }

    this.setState((prevState) => {
      return {
        board: newBoard,
        turn: active,
      };
    });
  };

  gameEnded = (currentState) => {
    return this.setState((currentState.gameOver = true));
  };

  render() {
    console.log(this.state.board);
    console.log(this.state);

    return (
      <div>
        <h1 className='tictactoe'>Tic Tac Toe</h1>
        <Winner
          value={this.state.board}
          winner={this.state.winner}
          changeWinner={this.state.changeWinner}
          gameOver={this.state.gameOver}
          gameEnded={this.gameEnded}
        ></Winner>
        <div className='buffer'></div>
        <div className="gameboard">
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
        <div className='reset'>
           <Reset resetBoard={this.resetBoard}></Reset>
        </div>
       
      </div>
    );
  }
}

export default App;
