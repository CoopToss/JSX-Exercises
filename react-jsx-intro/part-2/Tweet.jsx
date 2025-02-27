import React from 'react';
import './Tweet.css';

const Tweet = ({ username, name, date, message }) => {
  return (
    <div className="tweet">
      <h3>{name} (@{username})</h3>
      <p>{message}</p>
      <p><small>{date}</small></p>
    </div>
  );
};

export default Tweet;
