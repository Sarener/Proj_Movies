import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

import { Movie } from "../../pages/movie/movie";

export function GetMovie (){
    const params = useParams()
    

    const API_KEY = "98MC349-6334KNP-NHVCD9C-7TPR6WX"
    // const API_KEY = "YACG8BZ-5C24WSY-JPTHXP1-04Y65NQ"
    

    const API_URL_MOVIES =`https://api.kinopoisk.dev/v1.4/movie/${params.id}`

    const [appState, setAppState] = useState();
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
                    setAppState(responseData)
                }
            },[API_URL_MOVIES])
            if (appState !== undefined) {
                return (<>
                    <Movie  {...appState}  />
                </>
                )
            } 
            

}