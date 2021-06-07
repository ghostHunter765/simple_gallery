import React from 'react'

const InputButton = (props) => {
    return (
        <div className="inputbutton-container">
        <input className='inputbutton' disabled={props.disabled} type='submit' value={props.name}></input>
        </div>

    )
}

export default InputButton
