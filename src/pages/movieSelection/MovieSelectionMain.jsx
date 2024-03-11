import * as React from 'react';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import { Menu } from '../menu/Menu';
import './MovieSelectionMain.scss'
import { GetMoviesMain } from '../../components/getMovies/getMoviesMain/getMoviesMain';



export const MovieSelectionMain =()=>{
    const [category, setCategory] = useState();
    const API_URL_POPULAR =`https://api.kinopoisk.dev/v1.4/movie?year=2023&genres.name=${category}`
    return(

        <div className="wrapper">
        <Menu/>
        <div className="wrapperBtnInp">
        <div className="button">
            <FormControl>
        <RadioGroup
        onChange={e => setCategory(e.target.value)}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        >
        <FormControlLabel value="криминал" control={<Radio />} label="Криминал" />
        <FormControlLabel value="драма" control={<Radio />} label="Драма" />
        <FormControlLabel value="аниме" control={<Radio />} label="Аниме" />
        <FormControlLabel value="боевик" control={<Radio />} label="Боевик" />
        <FormControlLabel value="вестерн" control={<Radio />} label="Вестерн" />
        <FormControlLabel value="военный" control={<Radio />} label="Военный" />
        <FormControlLabel value="детектив" control={<Radio />} label="Детектив" />
        <FormControlLabel value="детский" control={<Radio />} label="Детский" />
        <FormControlLabel value="документальный" control={<Radio />} label="Документальный" />
        <FormControlLabel value="игра" control={<Radio />} label="Игра" />
        <FormControlLabel value="история" control={<Radio />} label="История" />
        <FormControlLabel value="комедия" control={<Radio />} label="Комедия" />
        <FormControlLabel value="концерт" control={<Radio />} label="Концерт" />
        <FormControlLabel value="короткометражка" control={<Radio />} label="Короткометражка" />
        <FormControlLabel value="мелодрама" control={<Radio />} label="Мелодрама" />
        <FormControlLabel value="музыка" control={<Radio />} label="Музыка" />
        <FormControlLabel value="мультфильм" control={<Radio />} label="Мультфильм" />
        <FormControlLabel value="мюзикл" control={<Radio />} label="Мюзикл" />
        <FormControlLabel value="новости" control={<Radio />} label="Новости" />
        <FormControlLabel value="приключения" control={<Radio />} label="Приключения" />
        <FormControlLabel value="реальное ТВ" control={<Radio />} label="Реальное ТВ" />
        <FormControlLabel value="семейный" control={<Radio />} label="Семейный" />
        <FormControlLabel value="спорт" control={<Radio />} label="Спорт" />
        <FormControlLabel value="ток-шоу" control={<Radio />} label="Ток-шоу" />
        <FormControlLabel value="триллер" control={<Radio />} label="Триллер" />
        <FormControlLabel value="ужасы" control={<Radio />} label="Ужасы" />
        <FormControlLabel value="фантастика" control={<Radio />} label="Фантастика" />
        <FormControlLabel value="фильм-нуар" control={<Radio />} label="Фильм-нуар" />
        <FormControlLabel value="фэнтези" control={<Radio />} label="Фэнтези" />
        <FormControlLabel value="церемония" control={<Radio />} label="Церемония" />
        </RadioGroup>
    </FormControl>
            </div>

            <GetMoviesMain apiSearchProps={API_URL_POPULAR}/>

            
        </div>

        </div>
        
    )
}