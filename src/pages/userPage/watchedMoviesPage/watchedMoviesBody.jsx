import { Link } from "react-router-dom"
import iconDelete from "../../../img/icon/bin.png"
import { useState } from "react"
import { DeleteMovieWatched } from "../../../components/users/deleteMovieUserPage/deleteMovieWatched"

export const WatchedMoviesBody = ({id,name,year,poster})=>{
    const [deleteLookedMoviesState,setDeleteLookedMoviesState]= useState()

    function functiondDelete(id){
        setDeleteLookedMoviesState(id)
    }
    return(
        <div className="wrapperIcon">
         <img className="iconDelete" onClick={(e)=>functiondDelete({id})} src={iconDelete} alt="" />
        <div className="wrapperSorting">
        <Link to={`/movie/${id}`} className="moviesWrappStyle">
        <div className="mainWrappMovies">
        <img  className="imgMovies" src={poster.url} alt="" />
        <h2  className="h2Movies" >{name}</h2>
        <p className='year'>{year}</p>
        </div>
        </Link>
        </div>
        {deleteLookedMoviesState
        ? 
        <DeleteMovieWatched
        deleteProps ={deleteLookedMoviesState} 
        /> 
        : 
        console.log()
        } 

        </div>
    )
}