import React from 'react';
import './Footer.css';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import HistoryIcon from '@mui/icons-material/History';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


function Footer() {
    return (
        <div className="footer">

            <ManageSearchIcon className="ManageSearch" sx={{ fontSize: 55 }} />
            <HistoryIcon className="Back" sx={{ fontSize: 55 }} />
            <ManageAccountsIcon className="ManageAcc" sx={{ fontSize: 55 }} />


        </div>
    )
}

export default Footer;