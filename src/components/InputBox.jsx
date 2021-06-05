import React from 'react'

 const InputBox = (props) => {
    return (
        <div>
            <label  htmlFor={props.name}></label>
            <input value={props.value} onChange={props.handleOnchange} type={props.type} name={props.name}></input>
        </div>
    )
}
export default InputBox;