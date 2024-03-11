
import { Menu } from "../../menu/Menu"
import { ReceivingLookedMoviesUser } from '../../../components/users/receivingMoviesUser/receivingLookedMoviesUser'
import './watchedMovies.scss'

export const  WatchedMoviesPage =()=>{
    return(
        <>
        <div className="UserPage">
        <Menu/>
        <h2>Просмотренные</h2>
        <div className="moviesUserPageWrapper">
        <ReceivingLookedMoviesUser/>
        </div>
        </div>
        </>
    )
}