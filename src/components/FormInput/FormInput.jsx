import React from "react";
import "./FormInput.css";

const FormInput = ({ label, handleInput,htmlFor, ...rest }) => {
    return (
        <div className="input_group">
            <label htmlFor={htmlFor} className="label">
                {label}
            </label>
            <input {...rest} onChange={handleInput} className="input"/>
        </div>
    );
};

export default FormInput;
