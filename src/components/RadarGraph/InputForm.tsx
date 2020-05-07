import React, { useState } from 'react';

const InputForm = (props: any) => {

    const [currentInput, setCurrentInput] = useState("")

    function handleChange(event: any) {
        setCurrentInput(event.target.value)
        console.log(event.target.value)
    }

    function handleSubmit(event: any) {
        alert('A name was submitted: ' + currentInput);
        props.setInput(currentInput)
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={currentInput} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default InputForm
