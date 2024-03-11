import axios from "axios"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";

import { UserPage } from "../../../pages/userPage/mainUserPage/userPage";

export const  GetUserPage = ()=>{
    const USERS_URL = `https://65df8b2fff5e305f32a27694.mockapi.io/api/v1/Users`

    const [user,setUser] = useState()
    const [responseDataState,setResponseDataState]=useState()
    const [postUserState,setPostUserState]=useState()
    const uid = useParams().id
        useEffect(()=>{
                axios.get(USERS_URL)
                    .then((res)=>{
                        setResponseDataState(res.data)
                    })
        },[USERS_URL])

        useEffect(()=>{
            if(responseDataState){
                userFindF (responseDataState)
            function userFindF (res){
            const userFind = res.find(user => user.uid === uid)
            if(userFind){
                setUser(userFind)
            }else if(userFind === undefined ){
                setPostUserState(USERS_URL)
            }
            }
            }
        },[responseDataState,USERS_URL,uid,user])
        useEffect(()=>{
            postUser(postUserState)
             function postUser (URL){
                 axios.post(URL , {
                uid: uid,
                iWillWatch: [],
                looked: [],
                favorites: [],
                id: 1
            }).then((response)=>{
                setUser(response.data)
            }).catch((error)=>{
            })
        }
        },[postUserState,uid])
       
    if(user){
        localStorage.setItem("id",user.id)
        return(
            <>
            <UserPage  />
            </>
        )
    }
    
}