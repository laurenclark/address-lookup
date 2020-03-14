import React from 'react';
import FloatingInput from './Floating-Input';

export default function GooglePlaces() {
    return (
        <form>
            <FloatingInput
                placeholder="Jane Bloggs"
                labeltext="Full Name"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck="false"
                name="name"
                type="text"
            />
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
        </form>
    );
}
