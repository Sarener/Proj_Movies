import Button from '@mui/material/Button';
import './Menu.scss'
import React, { useState, useEffect, useRef } from "react";
import { useClickOutside } from '../../components/hooks/useClickOutside'
import { AuthDetails } from '../../Firebase/auth_reg/AuthDetails'
import { MenuButtonAdaptive } from './menuButton/menuButtonAdaptive';
import { Link } from 'react-router-dom';
import imgLogo from '../../img/icon/free-icon-tea-herbal-1605884 (1).png'

export const Menu =()=>{
    const [isOpen, setOpen] = useState();
    const menuRef = useRef(null);
    useClickOutside(menuRef, () => {
      if (isOpen) setTimeout(() => setOpen(false), 50);
    });
  
    useEffect(() => {
      let startTouchX = 0;
      let endTouchX = 0;
      let startTouchY = 0;
      let endTouchY = 0;
  
      document.addEventListener("touchstart", (event) => {
        startTouchX = event.changedTouches[0].pageX;
        startTouchY = event.changedTouches[0].pageY;
      });
  
      document.addEventListener("touchend", (event) => {
        endTouchX = event.changedTouches[0].pageX;
        endTouchY = event.changedTouches[0].pageY;
        if (
          startTouchX < 100 &&
          Math.abs(endTouchY - startTouchY) < 40 &&
          endTouchX > startTouchX
        )
          setOpen(true);
        if (
          startTouchX < 240 &&
          Math.abs(endTouchY - startTouchY) < 40 &&
          endTouchX < startTouchX
        )
          setOpen(false);
      });
    }, []);
    return(
        <header className="header">

        <img  className="header__logo" src={imgLogo} alt="" />
        <nav className={`header__nav ${isOpen ? "active" : ""}`} ref={menuRef}>

          <ul className="header__nav-list">
          <Link to="/main"><Button sx={{ m: 0.5 }} variant="contained">Главная</Button></Link>
          <Link to="/category"><Button sx={{ m: 0.5 }} variant="contained">Жанры</Button></Link>
          <Link to="/search"><Button sx={{ m: 0.5 }} variant="contained">Поиск</Button></Link>
            <AuthDetails/>
          </ul>
        </nav>
        <MenuButtonAdaptive isActive={isOpen} onClick={() => setOpen(!isOpen)} />
      </header>
    )
}