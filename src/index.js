import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import { Main } from './pages/main/Main';
import { MovieSelectionMain } from './pages/movieSelection/MovieSelectionMain';
import { SearchMovies } from './pages/searchMovies/searchMovies';
import { SignUp } from './Firebase/auth_reg/SignUp';
import { SignIn } from './Firebase/auth_reg/SignIn';
import { GetMovie } from './components/getMovie/getMovie';

import { GetUserPage } from './components/receivingUser/signInRegisterUserPage/getPostUserPage';
import { IWillWatchPage } from './pages/userPage/iWillWatchMoviesPage/iWillWatchPage';
import { WatchedMoviesPage } from './pages/userPage/watchedMoviesPage/watchedMoviesPage';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/category' element={<MovieSelectionMain/>}/>
      <Route path='/main'element={<Main/>}/>
      <Route path='/signIn'element={<SignIn/>}/>
      <Route path='/:id'element={<GetUserPage />}/>
      <Route path='/search'element={<SearchMovies/>} />
      <Route path='/movie/:id'element={<GetMovie/>} />
      <Route path='/watchedMoviesPage' element={<WatchedMoviesPage />} />
      <Route path='/iWillWatch' element={<IWillWatchPage/>}/>
    </Routes>
  </BrowserRouter>
);
