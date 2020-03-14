/** @jsx jsx */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/core';
import FloatingInputStyles from './Floating-Input-Styles';

export default function FloatingInput(props) {
    const [focusActive, setFocusActive] = useState(false);
    const [value, setValue] = useState('');

    return (
        <fieldset css={FloatingInputStyles}>
            <div
                className={`form-control ${
                    value || focusActive ? 'active' : ''
                }`}>
                <label htmlFor={props.name}>{props.labeltext}</label>
                <input
                    {...props}
                    value={value}
                    id={props.name}
                    onChange={e => setValue(e.target.value)}
                    onBlur={() => setFocusActive(!focusActive)}
                    onFocus={() => setFocusActive(!focusActive)}
                />
                <small></small>
            </div>
        </fieldset>
    );
}

FloatingInput.propTypes = {
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    labelText: PropTypes.string
};
