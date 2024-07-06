import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState({
    button1: 0,
    button2: 0,
  });
  const handleClick = (button) => {
    setCount({...count, [button]: count[button] + 1 });
  };
  return (
    <div>
      <h1 className='text-center'>Click the buttons to see how many times they have been clicked.</h1>
      <div className='text-center'>
        <button onClick={() => handleClick('button1')}>
          Click count: {count.button1}
        </button>
      </div>
      <p className='text-center'>
        (Mouse click on button happens)
      </p>
      <div className='text-center'>
        <button onClick={() => handleClick('button2')}>
          Click count: {count.button2}
        </button>
      </div>
    </div>
  );
};

export default App;



