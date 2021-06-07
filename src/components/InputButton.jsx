import React from 'react'

const InputButton = (props) => {
    return (
        <div className="inputbutton-container">
        <input className='inputbutton' disabled={props.disabled} type='submit'></input>
        </div>

    )
}

export default InputButton
