import './getMoviesHeader.scss'
import { Link } from 'react-router-dom'
export const GetMoviesHeader=({id,name,poster,rating,year})=>{
    function ratingColor(rating){
        if(rating <=2){
            return "blue"
        }else if(rating <=4){
            return "yellow"
        }else if (rating <=6){
            return "green"
        }else if (rating <=8){
            return "violet"
        }else if (rating <=10){
            return "red"
        }else{
            return "white"
        }
    }
    if(id !==null && name !==null && poster !== null && rating.kp !==null && year !== null){
        if(id && name && poster.url && rating.kp && year ){
            return(
                        <div className="wrapperSorting">
                        <Link to={`/movie/${id}`} className="moviesWrappStyle">
                        <div className="mainWrappMovies">
                        <div className="wrapperRating">
                        <p className={ratingColor(rating.kp)}>{rating.kp}</p>
                        </div>
                        <img  className="imgMovies" src={poster.url} alt="" />
                        <h2  className="h2Movies" >{name}</h2>
                        <p className='year'>{year}</p>
                        </div>
                    </Link>
                    </div>
                    
            )
        }}
    }