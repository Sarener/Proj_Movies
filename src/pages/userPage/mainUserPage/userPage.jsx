import { Menu } from '../../menu/Menu'
import { ReceivingFavoritesMoviesUser } from '../../../components/users/receivingMoviesUser/receivingFavoritesMoviesUser'
export const UserPage =()=>{
    return(
        <>
        <div className="UserPage">
        <Menu/>
        <h2 >Избранные фильмы</h2>
        <div className='moviesUserPageWrapper'>
        <ReceivingFavoritesMoviesUser/>
        </div>

        </div>
        </>
    )
}