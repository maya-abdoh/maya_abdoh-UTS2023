import React from 'react';
import './Button.css';

const Button = ({ name, orangeColor, wide, clickHandler }) => {
  const buttonStyle = {
    backgroundColor: orangeColor ? 'rgb(245, 146, 62)' : 'rgb(224, 224, 224)',
    width: wide ? '50%' : '25%',
  };

  return (
    <button className="button" style={buttonStyle} onClick={() => clickHandler(name)}>
      {name}
    </button>
  );
};

export default Button;
