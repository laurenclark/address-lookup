import React from 'react';
import FloatingInput from './Floating-Input';

export default function GooglePlaces(props) {
    return (
        <FloatingInput
            placeholder="94 Road Street"
            labeltext="Address"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="none"
            spellCheck="false"
            name="address"
            type="text"
        />
    );
}
