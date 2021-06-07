import React,{useState} from 'react'
import InputBox from './InputBox'
import InputButton from './InputButton';
import { UseAuth } from '../context/AuthContext'
import {useHistory} from 'react-router-dom'

function PasswordReset() {
    const [email, setemail] = useState()
    const CustomContext =UseAuth()
    const history=useHistory()

    const handleOnchange=(e)=>{
        setemail(e.target.value);
    }

    const sendCode = async() => {
      const response=await CustomContext.sendRestPasswordCode(email);
    if(response===undefined){
        alert("The password reset code sent to email go and check it")
        history.replace('/login')
    }else{
        alert(response)
    }

      
    }
    

    return (
        <div className='header-main'>
            <h2>Reset Password</h2>
        <div className='form-main'>
            <form onSubmit={(e)=>{e.preventDefault();sendCode()}}>
            <InputBox type='text' name="email" value={email} handleOnchange={handleOnchange}></InputBox>
            <InputButton></InputButton>
            </form>
        </div>
        </div>
    )
}

export default PasswordReset
