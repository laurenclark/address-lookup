/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/core';

export default function FloatingInput(props) {
    const [focusActive, setFocusActive] = useState(false);
    const [value, setValue] = useState('');

    const formControl = css`
        .form-control {
            padding-bottom: 0.1rem;
            position: relative;
            width: 100%;
            max-width: 600px;
            label {
                position: absolute;
                color: #333;
                display: block;
                margin-bottom: 5px;
                top: 12px;
                left: 14px;
            }
            input {
                border: 2px solid #f0f0f0;
                border-radius: 4px;
                display: block;
                width: 100%;
                padding: 10px;
                margin: 1rem 0;
                font-size: 1rem;
                &:focus {
                    border-color: var(--primary-color);
                    outline: 0;
                    &:valid {
                        background: white;
                        z-index: -1;
                    }
                }
                &::placeholder {
                    color: transparent;
                }
            }
            &:focus + label,
            &.active > label {
                transform: scale(0.75) translate3d(-16px, -113%, 0);
                transition: all linear 0.1s;
                background: white;
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
            <div className={`form-control ${value ? 'active' : ''}`}>
                <label htmlFor={props.name}>{props.labeltext}</label>
                <input
                    {...props}
                    placeholder={props.labeltext}
                    value={value}
                    id={props.name}
                    onChange={e => setValue(e.target.value)}
                />
                <small></small>
            </div>
        </fieldset>
    );
}
