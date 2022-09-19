import React, { useState } from 'react';

const App2 = () => {
  const [value, setValue] = useState(0);

  const add = () => {
    setValue(value + 1);
  };
  const sub = () => {
    setValue(value - 1);
  };
  return (
    <div>
      <h2>This is the: {value}</h2>
      <button onClick={add}>incerese</button>
      <button onClick={sub}>decrease</button>
    </div>
  );
};

export default App2;
