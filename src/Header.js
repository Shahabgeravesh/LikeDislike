import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { Public } from '@mui/icons-material';


function Header() {
    return (
        <div className="header">
            <PersonIcon className="header__icon" fontSize="large" />

            <img className="header__logo" src="public/likedislike.jpg" alt="Logo" />



            <ManageSearchIcon className="header__icon" fontSize="large" />

        </div>
    )
}

export default Header

