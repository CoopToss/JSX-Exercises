import React from 'react';
import FirstComponent from './FirstComponent';
import NamedComponent from './NamedComponent';

const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Cooper" />
    </div>
  );
};

export default App;
