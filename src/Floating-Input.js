import React, { useState, useEffect } from 'react';

export default function FloatingInput(props) {
    const [focusActive, setFocusActive] = useState(false);
    return (
        <form className={`form-field ${focusActive ? 'active' : ''}`}>
            <label>
                <div className="label">{props.labelText}</div>
                <input
                    {...props}
                    onFocus={() => setFocusActive(!focusActive)}
                    onBlur={() => setFocusActive(!focusActive)}
                />
                <button>Enter</button>
            </label>
        </form>
    );
}
