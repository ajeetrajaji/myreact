// Button.js
import React from 'react';
import "./Button.css";

const Button = ({isOutline, icon, text, ...rest}) => {
  const btnClass = isOutline ? 'outline_btn' : 'primary_btn';
  return (
    <button
     {...rest}
     className={btnClass}>
      {icon}
      {text}
    </button>
  );
}

export default Button;
