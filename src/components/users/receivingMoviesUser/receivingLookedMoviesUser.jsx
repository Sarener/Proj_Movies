import { WatchedMoviesBody } from "../../../pages/userPage/watchedMoviesPage/watchedMoviesBody"
import { useState,useEffect } from "react"
import axios from "axios"


export const ReceivingLookedMoviesUser =()=>{
    const [userLookedMoviesState, setUserLookedMoviesState] = useState()
    const idUser = localStorage.getItem('id') 
    const USERS_URL = `https://65df8b2fff5e305f32a27694.mockapi.io/api/v1/Users/${idUser}`
    useEffect(()=>{
            axios.get(USERS_URL)
    .then((res)=>{
        setUserLookedMoviesState(res.data.looked)
    })
    },[USERS_URL])



    return (
        <>
        {userLookedMoviesState ? userLookedMoviesState.map(({...lookedMoviesProps})=>{
                return <WatchedMoviesBody key={lookedMoviesProps.id}  {...lookedMoviesProps} />
            }) :console.log()
        }
        </>
    )
}