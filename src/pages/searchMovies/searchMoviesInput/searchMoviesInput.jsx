import { useState} from 'react'
import './searchMoviesInput.scss'
import { Menu } from '../../menu/Menu'
import { GetMoviesMain } from '../../../components/getMovies/getMoviesMain/getMoviesMain'
import {useDebounce}  from '../../../components/hooks/useDebounce'

export const SearchMoviesInput =()=>{
    const [inputText, setInputText] = useState('')
    const debouncedSearchTerm  = useDebounce(inputText,1000)
    return(
        <>
        <div className="wrapper">
        <Menu/>
        <div className="main">
        <input className='inputWrapper' type="text" onChange={e => setInputText(e.target.value)}/>
        <GetMoviesMain apiSearchProps ={`https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${debouncedSearchTerm}`}  />
        </div>
        </div>
        </>
    )
}