import axios from "axios"
import { useEffect,useState } from "react"
export const SendingFavoritesMovie =(favoritesMovie)=>{
    let movie = favoritesMovie.favoritesMovie 
    let idMovie = favoritesMovie.favoritesMovie.id 
    const USERS_URL = `https://65df8b2fff5e305f32a27694.mockapi.io/api/v1/Users`
    const [userFavoritesState,setUserFavoritesState] = useState() 

    useEffect(()=>{
        axios.get(USERS_URL)
            .then((res)=>{
                setUserFavoritesState(res.data)
            })
        },[USERS_URL])
        useEffect(()=>{
            const idUser = localStorage.getItem('id') 
            if(userFavoritesState){
                const userFind = userFavoritesState.find(user => user.id === idUser) 
                const favoritesMovie = userFind.favorites
                const idMovieString = idMovie
                const iWillWatchFind = favoritesMovie.find(user => user.id === idMovieString)
                if(iWillWatchFind !== undefined){
                alert("этот фильм вы уже добавили в избранные")
                }else{
                    userFind.favorites.unshift(movie)
                    axios.put(`${USERS_URL}/${idUser}`,userFind)
                    .then((response)=>{
                        alert(`фильм успешно добавлен в избранные`)
                    })
                }
            }
        },[userFavoritesState,USERS_URL,idMovie, movie])

    




    return(
        <>
        </>
    )
}