import React from "react";

const Input = ({attribute}) => {
    return (
        <div>
            <input 
                id={attribute.id} 
                name={attribute.name}
                placeholder={attribute.placeholder}
                type={attribute.type}
                className={attribute.className}
                required={attribute.required}          
            />
        </div>
    )
};

export default Input;