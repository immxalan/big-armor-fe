import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const InputForm = (props: any) => {
  const [currentInput, setCurrentInput] = useState("");

  function handleChange(event: any) {
    setCurrentInput(event.target.value);
    console.log(event.target.value);
  }

  function handleSubmit(event: any) {
    alert("A name was submitted: " + currentInput);
    props.setInput(currentInput);
    event.preventDefault();
  }

  return (
    <form className="formSubmit" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        id="standard-basic"
        label="Name"
        value={currentInput}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default InputForm;
