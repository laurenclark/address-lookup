import React from "react";
import "./App.scss";

function App(props) {
    return (
        <div className="App">
            <div className="form-field">
                <label>
                    <div className="label">Please type in your address!</div>
                    <div data-children-count="1">
                        <input
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="none"
                            spellCheck="false"
                            onBlur={props.handleBlur}
                            name="Name"
                            type="text"
                        />
                    </div>
                </label>
            </div>
        </div>
    );
}

export default App;
