import React from "react";

function Form(props) {
  return (
    <form action="" onSubmit={props.send} onChange={props.valuechange}>
      <div
        style={{
          display: "inline-block",
        }}
      >
        <label htmlFor="word" style={{display:"block", marginBottom:"2px",color:"green"}}>Enter a Word</label>
        <input type="text" id="word" name="word" onChange={props.valuechange} />

        <button style={{marginTop:"5px"}} type="submit" onClick={props.send}>
          check Palindrom
        </button>
      </div>
    </form>
  );
}

export default Form;
