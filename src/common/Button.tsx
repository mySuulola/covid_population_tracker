import React from 'react';

const Button = ({backgroundColor, textColor, borderColor, actualText}) => <button className="btn mx-2" style={{
    backgroundColor: backgroundColor,
    // borderRadius: 50,
    minWidth: '70px',
    color: textColor,
    borderColor,
}}>{actualText}</button>

export default Button
