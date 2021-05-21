import React from "react";
import notes from "../notes.js";

function note(props){
    return(
    <div className="note">
    <h1>{props.title}
    </h1>
    <p>
      {props.content}
    </p>
    </div>);
}




export default note;