import { Link } from "react-router-dom"
import { useState } from "react"

import iconDelete from "../../../img/icon/bin.png"
import { DeleteMovieMovieIWillWatch } from "../../../components/users/deleteMovieUserPage/deleteMovieIWillWatch"
export const IWillWatchBody =({id,name,year,poster})=>{
    const [deleteIWillWatchState,setDeleteIWillWatchState]= useState()

    function functiondDelete(id){
        setDeleteIWillWatchState(id)
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
        {deleteIWillWatchState 
        ? 
        <DeleteMovieMovieIWillWatch 
        deleteProps ={deleteIWillWatchState} 
        /> 
        : 
        console.log()
        } 

        </div>
    )
}