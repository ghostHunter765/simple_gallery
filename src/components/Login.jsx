import React,{useState} from 'react'
import InputButton from './InputButton'
import InputBox from './InputBox'
import {UseAuth} from '../context/AuthContext'

 const Login = () => {
     const [user, setuser] = useState({})
     const contextValues=UseAuth()

     const handleOnchange=(e)=>{
         const tempuser=user;
         tempuser[e.target.name]=e.target.value;
         setuser(tempuser);
     }
     
      const handleLogin = () => {
          try {
            contextValues.loginUser(user.username,user.password);
            //contextValues.logout()
          } catch (error) {
              console.log(error)
          }

        //  console.log(contextValues);
     }
     
    return (
        <div>
            <form onSubmit={(e)=>{e.preventDefault();handleLogin()}}>
                <InputBox value={user.username} type="text" name="username" handleOnchange={handleOnchange}></InputBox>
                <InputBox value={user.username} type="password" name="password" handleOnchange={handleOnchange}></InputBox>
                <InputButton></InputButton>
            </form>
        </div>
    )
}

export default Login