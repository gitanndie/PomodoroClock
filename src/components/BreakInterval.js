import React from 'react';

function BreakInterval (props){
    function decreaseCounter () {
        if (props.breakInterval === 1) {
            return;
        }
        props.decreaseBreak();
    }

function increaseCounter () {
    if (props.breakInterval === 60) {
        return;
    }
    props.increaseBreak();
} 
    return( 
    <div>
        <h4>Longitud</h4>
        <article className="interval-container">
            <button onClick={decreaseCounter}>Abajo</button>
            <p className="interval-length">{props.breakInterval}</p>
            <button onClick={increaseCounter}>Arriba</button>
        </article>
    </div>
    )
}
export default BreakInterval