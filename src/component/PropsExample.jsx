import React from "react";

function PropsExample(props){ 
    return(
        <>
            <h2>Props Example :</h2>
            <p>Heading : {props.heading}</p>
            <p>Content : {props.content}</p>
        </>
    )
}

export default PropsExample;