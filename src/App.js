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
  
  // Array(9).fill(null) creates an array with nine elements and sets each of them to null. The useState() call around it declares a squares state variable that’s initially set to that array. Each entry in the array corresponds to the value of a square. 

  function handleClick(index) {
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


 