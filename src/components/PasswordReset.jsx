import React,{useState} from 'react'
import InputBox from './InputBox'
import InputButton from './InputButton';
import { UseAuth } from '../context/AuthContext'
import {Link, useHistory} from 'react-router-dom'

function PasswordReset() {
    const [email, setemail] = useState()
    const [isloading, setisloading] = useState(false)
    const CustomContext =UseAuth()
    const history=useHistory()

    const handleOnchange=(e)=>{
        setemail(e.target.value);
    }

    const sendCode = async() => {
        setisloading(true)
      const response=await CustomContext.sendRestPasswordCode(email);
      setisloading(false)
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
            <div style={{display:"flex"}}>
                <InputButton name='Send'></InputButton>
                {isloading?<div className='loader'></div>:<></>} 
            </div>
            </form>
            
        </div>
        <Link to='/login'>Go Back</Link>
        </div>
    )
}

export default PasswordReset
