import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
  // read data from store
  const count = useSelector((state) => state.counter.value);

  // get dispatch function
  const dispatch = useDispatch();

  // dispatch actions to store
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button className="btn1" onClick={() => dispatch(increment())}>+</button>
      <span className="text">{count}</span>
      <button className="btn2" onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default Counter;

