import React from 'react';

export default function Info(props) {
  const { name, city, year, herb } = props.clubData;

  return (
    <div className="row">
      <h3>Info</h3>
      <p>Name: {name}</p>
      <p>City: {city}</p>
      <p>Year: {year}</p>
      <img src={herb} alt={`${name} crest`} />
    </div>
  );
}
