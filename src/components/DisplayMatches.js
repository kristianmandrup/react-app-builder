import React from 'react';

function DisplayCity(props) {
  const {name, lat, lon} = props
  return <div>
    <div>{name}</div>
    <div>{lat}</div>
    <div>{lon}</div>
  </div>
}

function DisplayMatch(props) {
  const {display_name, age, job_title, height_in_cm, city} = props
  return <div>
    <div>{display_name}</div>
    <div>{age}</div>
    <div>{job_title}</div>
    <div>{height_in_cm}</div>
    <DisplayCity>{city}</DisplayCity>
  </div>
}

export function DisplayMatches(props) {
  const {matches} = props

  return (
    <div className="collection">
      {matches.map((match, key) => <DisplayMatch key={key} {...match}></DisplayMatch>)}
    </div>
  );
}
