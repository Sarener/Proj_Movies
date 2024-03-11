import axios from "axios"
import { useState,useEffect } from "react"


export const DeleteMovieMovieIWillWatch =({deleteProps})=>{
    
    let idMovie = deleteProps.id
    
    
    // let movie = favoritesMovie.favoritesMovie //фильм
    const idUser = localStorage.getItem('id') //id пользователя
    const USERS_URL = `https://65df8b2fff5e305f32a27694.mockapi.io/api/v1/Users/${idUser}`
    const [userFavoritesState,setUserFavoritesState] = useState() //получение пользователей

    useEffect(()=>{
        axios.get(USERS_URL)
            .then((res)=>{
                setUserFavoritesState(res.data)
            })
        },[USERS_URL])
            if(userFavoritesState){
                const index = userFavoritesState.iWillWatch.findIndex(n => n.id === idMovie)
                userFavoritesState.iWillWatch.splice(index,1)
            }
            useEffect(()=>{
                axios.put(USERS_URL,userFavoritesState)
                .then((response)=>{
                        window.location.reload()
                })
            },[userFavoritesState,USERS_URL])






}