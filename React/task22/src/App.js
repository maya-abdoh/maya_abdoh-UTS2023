import React from 'react';

const Person = ({ name = "Zeyad", eyeColor = "deepblue", age = 35 }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Eye Color: {eyeColor}</p>
      <p>Age: {age}</p>
      <hr />
    </div>
  );
};
const App = (props) => {
  const persons = props.persons || [
    <Person name="Person 1" eyeColor="blue" age="23" />,
    <Person name="Person 2" eyeColor="blue" />,
    <Person name="Person 3" age="23" />,
    <Person eyeColor="green" age="23" />,
  ];

  return (
    <div className="App">
      {persons.map((person, index) => (
        <React.Fragment key={index}>{person}</React.Fragment>
      ))}
    </div>
  );
};

export default App;


