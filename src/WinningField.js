import React from "react"


function WinningField(props) {
    return(
    <div onClick={props.reset} className='winningClass'>
        <div  className='pl2-win'></div>
        <div  className='pl1-win'></div>
        <span id="draw">DRAW</span>
        </div>)
}
export default WinningField