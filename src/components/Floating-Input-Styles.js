import { css, jsx } from '@emotion/core';

const FloatingInputStyles = css`
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

export default FloatingInputStyles;
