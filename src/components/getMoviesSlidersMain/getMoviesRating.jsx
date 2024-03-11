import MediaQuery from 'react-responsive'

import { useState,useEffect } from "react"

import { GetMoviesBody } from '../getMovies/getMoviesBody'
import { MainSlide } from "../../pages/sliders/mainSlide/MainSlide"


export const GetMoviesRating =()=>{
        // const API_KEY = "FY9BDZZ-D95MR0S-MWZJ7VP-4QBXH59"
        // const API_KEY = "FJYHYRC-EKPM1FV-G2HRTNY-PFDKDJR"
        const API_KEY = "98MC349-6334KNP-NHVCD9C-7TPR6WX"
    
        const API_URL_MOVIES =`https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&selectFields=&notNullFields=poster.url&rating.kp=8-10`
    
        const [appState, setAppState] = useState([])

                useEffect(()=>{
                    getMovies(API_URL_MOVIES)
                    async function getMovies(url){
                        const resp = await fetch(url,{
                            headers:{
                                "accept": "application/json",
                                "X-API-KEY": API_KEY
                            },
                        })
                        const responseData = await resp.json()
                        setAppState(responseData.docs)
                    }
                },[API_URL_MOVIES])
    if(appState){
        return(
            <>
            <MediaQuery minWidth={840}>
                <MainSlide moviesSlide={appState}/>
            </MediaQuery>
            <MediaQuery maxWidth={840}>
                <GetMoviesBody movies={appState}/>
            </MediaQuery>
            </>
        )
    }

}