import React from 'react';

const Person = ({ name, age, hobbies }) => {
  const displayName = name.length > 8 ? name.slice(0, 6) : name;
  return (
    <div>
      <p>Learn some information about this person</p>
      <p>Name: {displayName}</p>
      <p>Age: {age}</p>
      <h3>{age >= 18 ? "please go vote!" : "you must be 18"}</h3>
      <h4>Hobbies:</h4>
      <ul>
        {hobbies.map((hobby, idx) => (
          <li key={idx}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default Person;
