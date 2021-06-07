import React from 'react'
import { Redirect } from 'react-router-dom'
import {UseAuth} from '../context/AuthContext'


export default function DashBoard() {
   const CustomContext =UseAuth()
    return (
        <>
        {CustomContext.currentUser==null?<Redirect to='/login'></Redirect>:<HomePage context={CustomContext}></HomePage>}
        </>
    )
}

const HomePage = (props) => {
    return (
        <div>
            <h1>
                Home Page
            </h1>
           
            <p>{props.context.currentUser.email}</p>
            <button onClick={()=>{props.context.logout()}}>SignOut</button>
        </div>
    );
}

