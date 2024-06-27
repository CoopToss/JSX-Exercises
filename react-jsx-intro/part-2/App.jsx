import React from 'react';
import Tweet from './Tweet';

const App = () => {
  return (
    <div>
      <Tweet username="user1" name="User One" date="2024-06-25" message="This is the first tweet!" />
      <Tweet username="user2" name="User Two" date="2024-06-26" message="Hello world, this is a tweet!" />
      <Tweet username="user3" name="User Three" date="2024-06-27" message="React is awesome!" />
    </div>
  );
};

export default App;
