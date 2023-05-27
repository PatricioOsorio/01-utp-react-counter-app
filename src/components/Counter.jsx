import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h2>Counter</h2>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(0)}>Reiniciar</button>
    </>
  );
};

export default Counter;
