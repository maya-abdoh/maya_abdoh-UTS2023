import React, { useState } from 'react';

const CounterButton = () => {
  const [count, setCount] = useState(0);

  const handleerror = () => {
    setCount(count + 1);
  };

  if (count === 1) {
    throw new Error('I crashed!');
  }

  return (
    <div>
      <button onClick={handleerror}>0</button>
    </div>
  );
};

export default CounterButton;

