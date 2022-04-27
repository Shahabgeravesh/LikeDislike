import React from 'react';
import './SwipeButtons.css';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ClearIcon from '@mui/icons-material/Clear';


function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <CheckBoxIcon className="Yes" sx={{ fontSize: 55 }} />
      <ClearIcon className="No" sx={{ fontSize: 55 }} />




    </div>
  )
}

export default SwipeButtons;