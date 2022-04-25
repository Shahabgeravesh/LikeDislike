import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import IconButton from '@mui/material/IconButton';


function Header() {
    return (
        <div className="header">
            <IconButton>




                <PersonIcon className="header__icon" fontSize="large" />
            </IconButton>

            <img className="header__logo" src="public/likedislike.jpg" alt="Logo" />

            <IconButton>

                <ManageSearchIcon className="header__icon" fontSize="large" />

            </IconButton>
        </div>
    )
}

export default Header

