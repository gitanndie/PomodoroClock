import React from 'react';

function SessionLength (props){
    function increaseLength(){
        if(props.sessionLength === 60){
            return; 
        }
        props.increaseLength(); 
    }
function decreaseLength(){
    if(props.sessionLength === 1){
        return; 
    }
    props.decreaseLength(); 
}
return(
    <div>
        <h4 className="title">Duración</h4>
        <article className="interval-container">
            <button onClick={decreaseLength}>Abajo</button>
            <p className="interval-length">{props.sessionLength}</p>
            <button onClick={increaseLength}>Arriba</button>
        </article>
    </div>    
    )
}
export default SessionLength
