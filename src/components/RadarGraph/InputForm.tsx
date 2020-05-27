import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import './RadarGraph.scss';
const InputForm = (props: any) => {
  const [currentInput, setCurrentInput] = useState("");

  function handleChange(event: any) {
    setCurrentInput(event.target.value);
    console.log(event.target.value);
  }

  function handleSubmit(event: any) {
    props.input = currentInput
    event.preventDefault();
  }

  return (
    <form className="formSubmit" onSubmit={handleSubmit}>
      <div className='inputField'>
        <TextField
          fullWidth
          id="standard-basic"
          label="Text goes here"
          value={currentInput}
          onChange={handleChange}
        />
      </div>
      <div className='submitButton'>
        <Button variant="contained" color="secondary" type="submit">
          Submit
      </Button>
      </div>
    </form>
  );
};

export default InputForm;
