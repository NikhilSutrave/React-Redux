import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.custom);

  const addBtn = () => {
    dispatch({
      type: 'increment',
    });
  };

  const subBtn = () => {
    dispatch({
      type: 'decrement',
    });
  };

  const add20 = () => {
    dispatch({
      type: 'incrementByValue',
      payload: 20,
    });
  };
  return (
    <div>
      <h2>This is the: {value} </h2>
      <button onClick={addBtn}>Increment</button>
      <button onClick={add20}>increment by 20</button>
      <button onClick={subBtn}>Decrement</button>
    </div>
  );
};

export default Home;
