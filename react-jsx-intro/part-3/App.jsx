import React from 'react';
import Person from './Person';

const App = () => {
  return (
    <div>
      <Person name="Jonathan" age={20} hobbies={["Reading", "Gaming", "Hiking"]} />
      <Person name="Ana" age={17} hobbies={["Cooking", "Dancing", "Swimming"]} />
      <Person name="Christina" age={22} hobbies={["Coding", "Traveling", "Photography"]} />
    </div>
  );
};

export default App;
