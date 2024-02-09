import React, { useState } from "react";


function Form(props) {

  return (
    <form>
      <input 
        type="text" 
        onChange={props.handleFirstNamechange}
        value={props.firstName} />
      <input 
        type="text" 
        onChange={props.handleLastNamechange}
        value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
