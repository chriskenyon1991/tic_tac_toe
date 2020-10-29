import React from "react";
let winner = false;

const Winner = (props) => {
  // row winner

  if (props.gameOver === false) {
    if (
      props.value[0] === props.value[1] &&
      props.value[0] === props.value[2]
    ) {
      if (props.value[0] === "X") {
        winner = true;
        return (
          <>
            <h1>X is the Winner!!!</h1>
            <h2>Game Over!!</h2>
          </>
        );
      } else if (props.value[0] === "O") {
        winner = true;
        return (
          <div className="winner">
            <h1>O is the Winner!!!</h1>
            <h2>Game Over!!</h2>
            <gameEnded />
          </div>
        );
      }
    }

    if (
      props.value[3] === props.value[4] &&
      props.value[3] === props.value[5]
    ) {
      if (props.value[3] === "X") {
        winner = true;
        return (
          <div className="winner">
            <h1>X is the Winner!!!</h1>
            <h2>Game Over!!</h2>
            <gameEnded />
          </div>
        );
      } else if (props.value[3] === "O") {
        winner = true;
        return (
          <div className="winner">
            <h1>O is the Winner!!!</h1>
            <h2>Game Over!!</h2>
            <gameEnded />
          </div>
        );
      }
    }

    if (
      props.value[6] === props.value[7] &&
      props.value[6] === props.value[8]
    ) {
      if (props.value[6] === "X") {
        winner = true;
        return (
          <div className="winner">
            <h1>X is the Winner!!!</h1>
            <h2>Game Over!!</h2>
            <gameEnded />
          </div>
        );
      } else if (props.value[6] === "O") {
        winner = true;
        return (
          <div className="winner">
            <h1>O is the Winner!!!</h1>
            <h2>Game Over!!</h2>
            <gameEnded />
          </div>
        );
      }
    }
    //collum winner

    if (
      props.value[0] === props.value[3] &&
      props.value[0] === props.value[6]
    ) {
      if (props.value[0] === "X") {
        winner = true;
        return (
          <div className="winner">
            <h1>X is the Winner!!!</h1>
            <h2>Game Over!!</h2>
            <gameEnded />
          </div>
        );
      } else if (props.value[0] === "O") {
        winner = true;
        return (
          <div className="winner">
            <h1>O is the Winner!!!</h1>
            <h2>Game Over!!</h2>
            <gameEnded />
          </div>
        );
      }
    }

    if (
      props.value[1] === props.value[4] &&
      props.value[1] === props.value[7]
    ) {
      if (props.value[1] === "X") {
        winner = true;
        return (
          <div className="winner">
            <h1>X is the Winner!!!</h1>
            <h2>Game Over!!</h2>
            <gameEnded />
          </div>
        );
      } else if (props.value[1] === "O") {
        winner = true;
        return (
          <div className="winner">
            <h1>O is the Winner!!!</h1>
            <h2>Game Over!!</h2>
            <gameEnded />
          </div>
        );
      }
    }

    if (
      props.value[2] === props.value[5] &&
      props.value[2] === props.value[8]
    ) {
      if (props.value[2] === "X") {
        winner = true;
        return (
          <div className="winner">
            <h1>X is the Winner!!!</h1>
            <h2>Game Over!!</h2>
            <gameEnded />
          </div>
        );
      } else if (props.value[2] === "O") {
        winner = true;
        return (
          <div className="winner">
            <h1>O is the Winner!!!</h1>
            <h2>Game Over!!</h2>
            <gameEnded />
          </div>
        );
      }
      //diaganal winner
    }

    if (
      props.value[0] === props.value[4] &&
      props.value[0] === props.value[8]
    ) {
      if (props.value[0] === "X") {
        winner = true;
        return (
          <div className="winner">
            <h1>X is the Winner!!!</h1>
            <h2>Game Over!!</h2>
            <gameEnded />
          </div>
        );
      } else if (props.value[0] === "O") {
        winner = true;
        return (
          <div className="winner">
            <h1>O is the Winner!!!</h1>
            <h2>Game Over!!</h2>
            <gameEnded />
          </div>
        );
      }
    }

    if (
      props.value[2] === props.value[4] &&
      props.value[2] === props.value[6]
    ) {
      if (props.value[2] === "X") {
        winner = true;
        return (
          <div className="winner">
            <h1>X is the Winner!!!</h1>
            <h2>Game Over!!</h2>
            <gameEnded />
          </div>
        );
      } else if (props.value[2] === "O") {
        winner = true;
        return (
          <div className="winner">
            <h1>O is the Winner!!!</h1>
            <h2>Game Over!!</h2>
            <gameEnded />
          </div>
        );
      }
    }
    let countX = 0;
    let countO = 0;

    props.value.forEach((box) => {
      if (box === "X") {
        countX++;
      }
      if (box === "O") {
        countO++;
      }
    });
    if (
      (countX === 5 && countO === 4 && winner === false) ||
      (countO === 5 && countX === 4 && winner === false)
    ) {
      return <h1>Draw!!!!</h1>;
    }
  } else {
  }
  return <p></p>;
};

export default Winner;
