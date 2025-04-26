import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [count, setCount] = useState(0);

  // Without useCallback, this function is recreated on every render
  const handleClickWithoutCallback = () => {
    console.log('Clicked without useCallback');
  };

  // With useCallback, this function is only recreated if 'count' changes
  const handleClickWithCallback = useCallback(() => {
    console.log('Clicked with useCallback. Current count:', count);
  }, [count]); // 'count' is the dependency

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <ChildComponent onClick={handleClickWithoutCallback} label="Without Callback" />
      <ChildComponent onClick={handleClickWithCallback} label="With Callback" />
    </div>
  );
}

// ChildComponent (for demonstration purposes)
const ChildComponent = React.memo(({ onClick, label }) => {
  console.log(`ChildComponent "${label}" rendered`);
  return <button onClick={onClick}>{label}</button>;
});

export default ParentComponent;