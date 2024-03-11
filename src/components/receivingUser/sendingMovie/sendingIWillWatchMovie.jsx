import axios from "axios"
import { useEffect,useState } from "react"

    export const SendingIWillMovie =(movieIWillWatchMovie)=>{
        let movie = movieIWillWatchMovie.movieIWillWatchMovie 
        let idMovie = movieIWillWatchMovie.movieIWillWatchMovie.id 
        const USERS_URL = `https://65df8b2fff5e305f32a27694.mockapi.io/api/v1/Users`
        const [userWillWatchMovie,setUserWillWatchMovie] = useState() 
    
        useEffect(()=>{
            axios.get(USERS_URL)
                .then((res)=>{
                    setUserWillWatchMovie(res.data)
                })
            },[USERS_URL])
            useEffect(()=>{
                const idUser = localStorage.getItem('id') 
                if(userWillWatchMovie){
                    const userFind = userWillWatchMovie.find(user => user.id === idUser) 
                    const iWillWatchMovie = userFind.iWillWatch
                    const lookedMovie = userFind.looked
                    const lookedMovieFind = lookedMovie.find(user => user.id === idMovie)
                    const iWillWatchFind = iWillWatchMovie.find(user => user.id === idMovie)
                    if(iWillWatchFind !== undefined){
                    alert(`этот фильм вы уже добавили в "Буду смотреть" `)
                    }else if(iWillWatchFind === undefined && lookedMovieFind === undefined){
                        userFind.iWillWatch.unshift(movie)
                        axios.put(`${USERS_URL}/${idUser}`,userFind)
                        .then((response)=>{
                            alert(`фильм успешно добавлен в "Буду смотреть"`)
                        })
                    }else if(lookedMovieFind){
                        alert(`этот фильм находится в разделе "Посмотрел" `)
                    }
                }
            },[userWillWatchMovie,USERS_URL,idMovie, movie])
    
    }