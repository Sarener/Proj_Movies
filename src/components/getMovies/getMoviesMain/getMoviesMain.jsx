import { useState, useEffect, } from "react"

import { GetMoviesBody } from "../getMoviesBody"


export const GetMoviesMain = ({apiSearchProps})=>{
    const API_KEY = "98MC349-6334KNP-NHVCD9C-7TPR6WX"
    // const API_KEY = "YACG8BZ-5C24WSY-JPTHXP1-04Y65NQ"

    const API_URL_MOVIES =`${apiSearchProps}`

    const [appState, setAppState] = useState([]);


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
                

return(
    <>
    <div className="wrapperSorting">
    <GetMoviesBody  movies={appState}/>
    </div>
        
    </>
)
}

