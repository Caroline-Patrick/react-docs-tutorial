import {useState} from 'react';

// below is a child component 
function Square({value, onSquareClick}) {
  // const [value, setValue] = useState(null);
  //^^ this is how to use a hook in func components so that we can use state. a variable that calls the function useState. value in this variable stores the value, while setValue is a function that can be used to change the value. The null passed to useState is used as the initial value for this state variable
  // This code declares a state variable value in a functional component using the useState hook in React.js. It initializes the value of value to null. The setValue function is used to update the value of value.

  // function handleClick(){
  //   setValue('X')
  // }
  // onClick={handleClick}
  return <button className="square" onClick={onSquareClick}>{value}</button>
}

// below is the parent component that calls the child
export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const winner = calculateWinner(squares);
  let status;
  if(winner) {
    status = "Winner: " +winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O")
  }
  
  // Array(9).fill(null) creates an array with nine elements and sets each of them to null. The useState() call around it declares a squares state variable that’s initially set to that array. Each entry in the array corresponds to the value of a square. 

  function handleClick(index) {
    if(squares[index] || calculateWinner(squares)){
      return
    }
    // ^^ if a square is already filled, then return early without completing handleclick to update square; If square[index] is empty, then keep moving down this function

    const nextSquares = squares.slice();
    
    if (xIsNext) {
      nextSquares[index] = 'X'
    } else {
      nextSquares[index] = 'O'
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
  <>
    <div className="status">{status}</div>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
    </div>
  </>
  )
}


function calculateWinner(squares) {
  // console.log(squares)
  
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // console.log(squares[a])
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // console.log(squares[a])
      return squares[a];
    }
  }
  return null;
}

// ^^ The for loop in this code is checking all the possible winning combinations of a Tic Tac Toe game on a 3x3 grid. The lines constant is an array of arrays that represents each winning combination. For each iteration of the loop, [a, b, c] is destructured from the current subarray in lines. The loop then checks if the value of the elements in squares at the indices a, b, and c are all the same and not null. If they are, the function returns the value, which represents the winner. If the loop completes without returning a value, the function returns null, meaning there is no winner yet.



 