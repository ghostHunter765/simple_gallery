import React from 'react'

 const InputBox = (props) => {
     let text=props.name==="username"?"Email":"Password";
     text=props.name==="password2"?"Re-Enter Your Password":text;
     text=props.name==='email'?"Account Email":text
    return (
        <div className='inputbox'>
            <label  htmlFor={props.name}>{text}: </label>
            <br />
            <input value={props.value} onChange={props.handleOnchange} type={props.type} name={props.name}></input>
            
        </div>
    )
}
export default InputBox;