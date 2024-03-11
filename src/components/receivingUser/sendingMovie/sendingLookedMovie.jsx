import { useEffect, useState } from "react"
import axios from "axios"


export const SendingLookedMovie =(movieLookedMovie)=>{
    let movie = movieLookedMovie.movieLookedMovie 
    let idMovie = movieLookedMovie.movieLookedMovie.id 
    const USERS_URL = `https://65df8b2fff5e305f32a27694.mockapi.io/api/v1/Users`
    const [userLookedMovie,setUserLookedMovie] = useState() 

    useEffect(()=>{
        axios.get(USERS_URL)
            .then((res)=>{
                setUserLookedMovie(res.data)
            })
        },[USERS_URL])
        useEffect(()=>{
            const idUser = localStorage.getItem('id') 
            if(userLookedMovie){
                const userFind = userLookedMovie.find(user => user.id === idUser) 
                const lookedMovie = userFind.looked
                const iWillWatchMovie = userFind.iWillWatch
                const lookedMovieFind = lookedMovie.find(user => user.id === idMovie)
                const iWillWatchFind = iWillWatchMovie.find(user => user.id === idMovie)
                if(lookedMovieFind !== undefined){
                alert(`этот фильм вы уже добавили в "Посмотрел" `)
                }else if(lookedMovieFind === undefined && iWillWatchFind === undefined){
                    userFind.looked.unshift(movie)
                    axios.put(`${USERS_URL}/${idUser}`,userFind)
                    .then((response)=>{
                        alert(`фильм успешно добавлен в "Посмотрел"`)
                    })
                }else if(iWillWatchFind){
                    alert(`этот фильм находится в разделе "Буду смотреть" `)
                }
            }
        },[userLookedMovie,USERS_URL,idMovie, movie])
}