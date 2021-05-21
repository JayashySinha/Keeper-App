import React from "react";

function footer(){
    const cdate =  new Date();
    var cyear = cdate.getFullYear();
    return (
    <div className= "footer">
    <p>Copyright ⓒ {cyear}</p> 
    </div>
);
}

export default footer;