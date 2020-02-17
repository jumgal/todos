import React, { useState } from 'react';

const Counter = () => {

  const [counter, setCount] = useState(0);


  const incrementCount = () => {
    setCount(counter++)
  }

  return (
    <div>
      {counter}
      <button onClick={incrementCount} type="button" className="btn btn-primary">Increment</button>
    </div>
  )
}

export default Counter;