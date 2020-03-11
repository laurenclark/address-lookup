import React from 'react';
import FloatingInput from './Floating-Input';

export default function GooglePlaces(props) {
    return (
        <FloatingInput
            labelText="Please type in your address!"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="none"
            spellCheck="false"
            name="address"
            type="text"
        />
    );
}
