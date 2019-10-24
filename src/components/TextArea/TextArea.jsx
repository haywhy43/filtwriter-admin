import React from "react";

const TextArea = ({label, htmlFor, handleInput, ...rest}) => {
    return (
        <div className="input_group">
            <label htmlFor={htmlFor} className="label">
                {label}
            </label>
            <textarea
                {...rest}
                className="input"
                onChange={handleInput}
            ></textarea>
        </div>
    );
};

export default TextArea;
