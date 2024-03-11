import axios from "axios"
import {useState,useEffect} from "react"

import { IWillWatchBody } from "../../../pages/userPage/iWillWatchMoviesPage/iWillWatchBody"

export const ReceivingIWillWatchMoviesUser =()=>{
    const [userIWillWatchMoviesState, setUserIWillWatchMoviesState] = useState()
    const idUser = localStorage.getItem('id') 
    const USERS_URL = `https://65df8b2fff5e305f32a27694.mockapi.io/api/v1/Users/${idUser}`
    useEffect(()=>{
            axios.get(USERS_URL)
    .then((res)=>{
        setUserIWillWatchMoviesState(res.data.iWillWatch)
    })
    },[USERS_URL])


    return(
        <>
        {userIWillWatchMoviesState ? userIWillWatchMoviesState.map(({...iWillWatchMoviesProps})=>{
                return <IWillWatchBody key={iWillWatchMoviesProps.id}  {...iWillWatchMoviesProps} />
            }) :console.log()
        }
        
        </>
    )
}