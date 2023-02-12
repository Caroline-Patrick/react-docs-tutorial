import {useState} from 'react';

export default function Board() {
  return (
  <>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
  </>
  )
}

function Square() {
  const [value, setValue] = useState(null);
  //^^ this is how to use a hook in func components so that we can use state. a variable that calls the function useState. value in this variable stores the value, while setValue is a function that can be used to change the value. The null passed to useState is used as the initial value for this state variable
  // This code declares a state variable value in a functional component using the useState hook in React.js. It initializes the value of value to null. The setValue function is used to update the value of value.

  function handleClick(){
    console.log('clicked!')
  }
  return <button className="square" onClick={handleClick}>{value}</button>
}

 