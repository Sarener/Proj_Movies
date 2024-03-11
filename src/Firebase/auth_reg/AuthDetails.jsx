import { onAuthStateChanged,signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

export const AuthDetails= ()=>{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const [authUser,setAuthUser] = useState(null)
    useEffect(()=>{
        const  listen = onAuthStateChanged(auth,(user)=>{
            if(user){
                setAuthUser(user)
            }else{
                setAuthUser(null)
            }
        })
        return()=>{
            listen()
        }
    },[])
    function  userSignOut(){
        signOut(auth)
        localStorage.removeItem("id")
    }
    return(
        <>
        <div>
        {authUser ?(
            <div  className="userLog">
                    <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
        {`${authUser.email}`}
        </Button>
        <Menu
        id="fade-menu"
        MenuListProps={{
            'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        > 
        <MenuItem onClick={handleClose}><Link to={`/${authUser.uid}`}>Личный кабинет</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/watchedMoviesPage">Просмотренные фильмы</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/iWillWatch">Буду смотреть</Link></MenuItem>
        <MenuItem onClick={userSignOut}><Link to="/">Выйти</Link></MenuItem>
        </Menu>
                
            </div> 
        ): console.log()}
        </div>
        </>
    ) 
}