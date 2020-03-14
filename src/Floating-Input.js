/** @jsx jsx */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/core';

export default function FloatingInput(props) {
    const [focusActive, setFocusActive] = useState(false);
    const [value, setValue] = useState('');

    const formControl = css`
        .form-control {
            padding-bottom: 0.1rem;
            position: relative;
            width: 34vw;
            label {
                position: absolute;
                color: var(--font);
                display: block;
                margin-bottom: 5px;
                top: 12px;
                left: 14px;
                font-size: 120%;
            }
            input {
                border: 2px solid var(--base);
                border-radius: 4px;
                display: block;
                width: 100%;
                padding: 10px;
                margin-bottom: 1rem;
                font-size: 120%;
                &::placeholder {
                    color: transparent;
                }
                &:focus {
                    border-color: var(--accent);
                    outline: 0;
                    &:valid {
                        background: white;
                        z-index: -1;
                    }
                }
            }
            &:focus + label,
            &.active > label {
                transform: scale(0.8) translate3d(-16px, -28px, 0);
                transition: all linear 0.1s;
                background: white;
            }
            &.active {
                input::placeholder {
                    color: var(--base);
                }
            }
            small {
                position: absolute;
                bottom: -1px;
                font-size: 12px;
                opacity: 1;
                color: var(--error-color);
                visibility: hidden;
            }
            &.error small {
                visibility: visible;
            }
        }
    `;
    return (
        <fieldset css={formControl}>
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
