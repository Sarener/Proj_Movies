import { GetMoviesRating } from '../../components/getMoviesSlidersMain/getMoviesRating'
import { Menu } from '../../pages/menu/Menu'
import './Main.scss'

export const Main =()=>{
    return(
        <div className='wrapper'>
        <Menu className='menuMain'/>
        <div className="main">
        <h2>Фильмы с хорошим рейтингом</h2>
        <GetMoviesRating />
        </div>
        </div>
    )
}