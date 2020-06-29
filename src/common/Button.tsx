import React from 'react';


export const Button = ({backgroundColor, textColor, borderColor, actualText, className}) => <button className={className} style={{
    backgroundColor: backgroundColor,
    minWidth: '70px',
    color: textColor,
    borderColor,
}}>{actualText}</button>

export const ButtonModal = ({ backgroundColor, textColor, borderColor, actualText, className, dataTarget }) => <button data-toggle="modal" data-target={dataTarget} type="button" className={className} style={{
    backgroundColor: backgroundColor,
    minWidth: '70px',
    color: textColor,
    borderColor,
}}>{actualText}</button>
