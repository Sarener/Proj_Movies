import React,{ useState } from "react";
import TextField from '@mui/material/TextField';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";

import { AuthDetails } from "./AuthDetails";


import './auth.scss'

export const SignUp =()=>{
    let navigate = useNavigate()
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [copyPassword,setCopyPassword]= useState("")
    const [error,setError]=useState("")
    async function register  (e){
        e.preventDefault()
        if(copyPassword !== password){
            setError("Passwords didn't match")
            return
        }else if(copyPassword.length && password.length <6 ){
            setError("A minimum of 6 characters is required")
            return
        }else if(email.indexOf('@')===-1){
            setError("You entered your email address incorrectly")
            return
        }
        await createUserWithEmailAndPassword(auth,email,password)
        .then((user)=>{
            setError("")
            setEmail("")
            setCopyPassword("")
            setPassword("")
            navigate(`/${user.user.uid}`)
        })
        .catch(()=>setError("You are already registered"))
    }

    return(
        <>
        <div className="signInWrapper">
            <form className="signInForm" >
            <AuthDetails/>
            {error?  <Alert severity="error">{error}</Alert> :""}
            <h2>Регистрация аккаунта</h2>
            <TextField 
            
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            type="email" 
            className="signInFormComponents"
            label="Email" 
            variant="outlined" />
            
            <div className="formPassword">
            <TextField  
            sx={{ m: 2 }}
            type ="password" 
            label="password" 
            variant="standard" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
             />
            <TextField 
            className="signInFormComponents"
            type ="password" 
            id="standard-basic" 
            label="coppy password" 
            variant="standard" 
            value={copyPassword}
            onChange={(e)=>setCopyPassword(e.target.value)}
            />

            </div>
            
            <div className="signInFormButton">
            <button onClick={register}   className="signInFormButtonWrapper">Регистрация</button>
             <Link  to="/signIn">Войти в акаунт</Link>
            </div>
            </form>
        </div>
        </>
        
        
    )
}