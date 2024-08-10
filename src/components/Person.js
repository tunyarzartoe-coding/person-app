import React from 'react';
import { observer } from 'mobx-react-lite';
import { personStore } from '../store/personStore';

const Person = observer(() => {
  const {
    name,
    age,
    position,
    work,
    education,
    hobbies,
    currentLocation,
    nextLocations,
    currently,
  } = personStore;

  return (
    <div className="person-container">
      <div className="header">
        <h1>{name}</h1>
        <p>{position} - {age} years old</p>
        <p>Currently in {currentLocation}</p>
      </div>

      <div className="section">
        <h2>Work Experience</h2>
        <ul>
          {work.map((job, index) => (
            <li key={index}>{job}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Education</h2>
        <ul>
          {education.map((edu, index) => (
            <li key={index}>{edu}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Hobbies</h2>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Next Locations</h2>
        <ul>
          {nextLocations.map((location, index) => (
            <li key={index}>{location}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Currently</h2>
        <ul>
          {Object.entries(currently).map(([key, value], index) => (
            <li key={index}>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value.join(', ')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default Person;
