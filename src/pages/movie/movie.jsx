import MediaQuery from 'react-responsive'
import './movie.scss'
import { useState} from 'react'

import { SendingLookedMovie } from '../../components/receivingUser/sendingMovie/sendingLookedMovie'
import { SendingIWillMovie } from '../../components/receivingUser/sendingMovie/sendingIWillWatchMovie'
import { SendingFavoritesMovie } from '../../components/receivingUser/sendingMovie/sendingFavoritesMovie'


import { Menu } from '../menu/Menu'
import { MovieDocsUnboxing } from '../../components/getMovie/movieDocsUnboxing'
import { MovieDocsImgExamination } from '../../components/getMovie/movieDocsExamination'

import iconIWillWatchMovie  from "../../img/icon/free-icon-font-add-folder-3914136.png"
import iconLookedMovie from "../../img/icon/free-icon-font-check-3917749.png"
import iconFavoritesMovie from "../../img/icon/free-icon-font-heart-3916579.png"


export const Movie  = ({id,poster,backdrop,logo,name,ageRating,shortDescription,persons,genres,year})=>{
  
    const [iWillWatchMovie,setIWillWatchMovie] = useState()
    const [lookedMovie,setLookedMovie] = useState()
    const [favoritesMovie,setFavoritesMovie] =useState()
    return(
        <>
        <Menu/>
        <div className='moviePage'>
        <MediaQuery minWidth={840}>
        <div className='movieWrapper'>
            <div className='movieImg'>
                <img className='moviePoster'src={MovieDocsImgExamination(poster)} alt="" />
                <div className="movieBackdropIcon">
                <img className='movieBackdrop'src={MovieDocsImgExamination(backdrop)} alt="" />
                <img className='icon' onClick={()=> setFavoritesMovie({id,poster,name,year})}  src={iconFavoritesMovie} alt="" />
                <img className='icon' onClick={()=>setIWillWatchMovie({id,poster,name,year}) } src={iconIWillWatchMovie} alt="" />
                <img className='icon' onClick={()=> setLookedMovie({id,poster,name,year})} src={iconLookedMovie} alt="" />
                </div>
                
            </div>
            <div>
                <div className="movieText">
                <h2 className='movieName'>{name}</h2>
                <div className='movieDocs'>
                    <div className='movielu'>Год:<li className='movieli'>{MovieDocsImgExamination(year)}</li></div>
                    <div className='movielu'>Жанры:<li className='movieli'>{MovieDocsUnboxing(genres)}</li></div>
                    <div className='movielu'>Актеры:<li className='movieli'>{MovieDocsUnboxing(persons)}</li></div>
                    <div className='movielu'>Возрастной рейтинг:<li className='movieli'>{MovieDocsImgExamination(ageRating) }</li></div>
                    <div className='movielu'>Краткое описание:<li className='movieli'>{MovieDocsImgExamination(shortDescription)}</li></div>
                </div>
                </div>
            </div>
        </div>
        </MediaQuery>
        <MediaQuery maxWidth={840}>
        <div className='movieWrapper'>
            <div className='movieImg'>
                <img className='moviePoster'src={MovieDocsImgExamination(poster)} alt="" />
                <div className="movieBackdropIcon">
                <img className='movieBackdrop'src={MovieDocsImgExamination(backdrop)} alt="" />
                <img className='icon' onClick={()=> setFavoritesMovie({id,poster,name,year})} src={iconFavoritesMovie} alt="" />
                <img className='icon' onClick={()=> setIWillWatchMovie({id,poster,name,year})} src={iconIWillWatchMovie} alt="" />
                <img className='icon' onClick={()=>setLookedMovie({id,poster,name,year})} src={iconLookedMovie} alt="" />
                </div>
            </div>
            <div>
                <div className="movieText">
                
                <h2 className='movieName'>{name}</h2>
                <div className='movieDocs'>
                    <div className='movielu'>Год:<li className='movieli'>{year}</li></div>
                    <div className='movielu'>Жанры:<li className='movieli'>{MovieDocsUnboxing(genres)}</li></div>
                    <div className='movielu'>Актеры:<li className='movieli'>{MovieDocsUnboxing(persons)}</li></div>
                    <div className='movielu'>Возрастной рейтинг:<li className='movieli'>{ageRating}+</li></div>
                    <div className='movielu'>Краткое описание:<li className='movieli'>{shortDescription}</li></div>
                </div>
                </div>
            </div>
        </div>
        </MediaQuery>
        {   
            lookedMovie ?  <SendingLookedMovie movieLookedMovie={lookedMovie}/> : console.log()
        }
        {
            iWillWatchMovie ? <SendingIWillMovie movieIWillWatchMovie={iWillWatchMovie}/> : console.log()
        }
        {
            favoritesMovie ? <SendingFavoritesMovie favoritesMovie={favoritesMovie}/> : console.log()
        }
    </div>  
        </>
        
    )
}