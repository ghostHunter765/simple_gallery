import React,{useState} from 'react'
import InputButton from './InputButton'
import InputBox from './InputBox'
import {UseAuth} from '../context/AuthContext'
import {Link, useHistory} from 'react-router-dom'

export default function Signin() {

    const [user, setuser] = useState({})
    const [isLoading, setisLoading] = useState(false)
    //TODO: desable the button
   // const [disabled, setdisabled] = useState(false)
    const contextValues=UseAuth()
    const history =useHistory()

   const handleLogin=async()=>{
      if(user.password1===user.password2){
        try {
            setisLoading(true)
            const response =await contextValues.signinUser(user.username,user.password1);
            setisLoading(false);
            if(response.user ){
                setTimeout(() => {
                    history.replace('/')
                }, 100)
            }
        } catch (error) {
            //TODO: custom error
            console.log(error)
        }
      }else{
          //TODO: custom alert
          alert('Password missMatch')
      }
   }

    const handleOnchange=(e)=>{
        const tempuser=user;
        tempuser[e.target.name]=e.target.value;
        setuser(tempuser);
    }

    return (
        <div className="header-main">
            <h2>Sign In</h2>
        <div className='form-main'>
            <form onSubmit={(e)=>{e.preventDefault();handleLogin()}}>
                <InputBox value={user.username} type="text" name="username" handleOnchange={handleOnchange}></InputBox>
                <InputBox value={user.password1} type="password" name="password1" handleOnchange={handleOnchange}></InputBox>
                <InputBox value={user.password2} type="password" name="password2" handleOnchange={handleOnchange}></InputBox>
                <div style={{display:"flex"}}>
                <InputButton name='Sign In'></InputButton>
                {isLoading?<div className='loader'></div>:<></>} 
            </div>
                <hr></hr>
            </form>
            <div className='customlink-2'>
            <h4>Already have an account  <Link to="/login">Log in</Link></h4></div>
        </div>
        </div>
    )
}

