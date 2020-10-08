import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    x: false,
    o: false,
    turn: true,
  };

  setOorX = () => {
    console.log("worked");

    this.setState((previousState) => {
      return {
        turn: !previousState.turn,
      };
    });
  };

  render() {
    console.log(this.state.turn);
    return (
      <div className="gameboard">
        <div className="row1">
          <div id="cell1" onClick={(this.turn, this.setOorX)}>
            <p>x</p>
          </div>
          <div id="cell2" onClick={this.setOorX}>
            <p>x</p>
          </div>
          <div id="cell3" onClick={this.setOorX}>
            <p>x</p>
          </div>
        </div>

        <div className="row2">
          <div id="cell4" onClick={this.setOorX}>
            <p>x</p>
          </div>
          <div id="cell5" onClick={this.setOorX}>
            <p>x</p>
          </div>
          <div id="cell6" onClick={this.setOorX}>
            <p>x</p>
          </div>
        </div>

        <div className="row3">
          <div id="cell7" onClick={this.setOorX}>
            <p>x</p>
          </div>
          <div id="cell8" onClick={this.setOorX}>
            <p>x</p>
          </div>
          <div id="cell9" onClick={this.setOorX}>
            <p>x</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
