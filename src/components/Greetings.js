import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetings } from '../redux/greetings/greetingsSlice';

const Greetings = () => {
  const dispatch = useDispatch();
  const greetingsData = useSelector((state) => state.greeting);

  console.log(greetingsData);

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <div>
      <h2>Refresh to get a new Greeting</h2>
      <p>{greetingsData.greetings.content}</p>
    </div>
  );
};

export default Greetings;