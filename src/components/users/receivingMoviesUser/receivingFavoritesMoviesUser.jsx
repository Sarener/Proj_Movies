import axios from "axios"
import {useState,useEffect} from "react"

import { FavoritesMoviesBody } from "../../../pages/userPage/favoritesMoviesPage/favoritesMoviesBody"

export const ReceivingFavoritesMoviesUser =()=>{
    const [userFavoritesMoviesState, setUserFavoritesMoviesState] = useState()
    const idUser = localStorage.getItem('id') 
    const USERS_URL = `https://65df8b2fff5e305f32a27694.mockapi.io/api/v1/Users/${idUser}`
    useEffect(()=>{
            axios.get(USERS_URL)
    .then((res)=>{
        setUserFavoritesMoviesState(res.data.favorites)
    })
    },[USERS_URL])


    return(
        <>
        {userFavoritesMoviesState ? userFavoritesMoviesState.map(({...userFavoritesMoviesStateProps})=>{
                return <FavoritesMoviesBody key={userFavoritesMoviesStateProps.id}  {...userFavoritesMoviesStateProps} />
            }) :console.log()
        }
        
        </>
    )
}