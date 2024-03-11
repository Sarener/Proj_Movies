import React from "react";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import './auth.scss'
import { AuthDetails } from "./AuthDetails";




export const SignIn =()=>{

        let navigate = useNavigate()
  
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")

    const [error,setError]=useState("")

    function logIn(e){
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
        .then((user)=>{
            setError("")
            setEmail("")
            setPassword("")
            navigate(`/${user.user.uid}`)
        }).catch(()=>setError("SORRY,COULDN'T FIND YOUR ACCOUNT"))
    }

    return(
        <div className="signInWrapper">
            <form className="signInForm" >
                <AuthDetails/>
            {error?  <Alert severity="error">{error}</Alert> :""}
            <h2>Вход в аккаунт</h2>
            <TextField 
            
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            type="email" 
            className="signInFormComponents"
            id="outlined-basic" 
            label="Email" 
            variant="outlined" 
            
            />
            
            <div className="formPassword">
            <TextField  
            sx={{ m: 2 }}
            type ="password" 
            id="standard-basic" 
            label="password" 
            variant="standard" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
             />
            </div>
            
            <div className="signInFormButton">


            <button onClick={logIn} className="signInFormButtonWrapper">Вход</button>
             <Link to="/">В регистрацию</Link>
            </div>
            </form>
        </div>
    )
}