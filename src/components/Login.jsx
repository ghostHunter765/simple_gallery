import React,{useState} from 'react'
import InputButton from './InputButton'
import InputBox from './InputBox'
import {UseAuth} from '../context/AuthContext'
import {Link, useHistory} from 'react-router-dom'

 const Login = () => {
     const [user, setuser] = useState({})
     //TODO: desable the button
    // const [disabled, setdisabled] = useState(false)
     const contextValues=UseAuth()
     const history =useHistory()

     const handleOnchange=(e)=>{
         const tempuser=user;
         tempuser[e.target.name]=e.target.value;
         setuser(tempuser);
     }
     
      const handleLogin =async () => {
          //setdisabled(true)
          try {
            const response=await contextValues.loginUser(user.username,user.password) ;
            if(response.user ){
                setTimeout(() => {
                    history.replace('/')
                }, 100)
            }
          } catch (error) {
              console.log(error)
          }
         // setdisabled(false)
     }
     
     
    return (
        <div className='header-main'>
            <h2>Login</h2>
        <div className="form-main">
            <form onSubmit={(e)=>{e.preventDefault();handleLogin()}}>
                <InputBox value={user.username} type="text" name="username" handleOnchange={handleOnchange}></InputBox>
                <InputBox value={user.password} type="password" name="password" handleOnchange={handleOnchange}></InputBox>
                <InputButton ></InputButton>
            </form>
            <div className="customlink-1">
                    <Link  to='/resetpw'>Fogot Password?</Link>
            </div>
           <hr />
           <div className='customlink-2'>
            <h3>Create an Account  <Link to="/signin">Sign in</Link></h3>
           </div>
        </div>
        </div>
    )
}

export default Login