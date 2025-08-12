import { useDispatch, useSelector } from 'react-redux';
import { nextMessage, selectMessage } from './messageSlice';

export default function ReduxButton() {
  const dispatch = useDispatch();
  const text = useSelector(selectMessage);

  return (
    <button onClick={() => dispatch(nextMessage())}>
      {text}
    </button>
  );
}




