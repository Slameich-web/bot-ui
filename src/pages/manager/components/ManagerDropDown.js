import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
function ManagerDropDown({ showNavbar, setShowNavbar, pageToShow, setPageToShow }) {
    return (
        <div className="drop_down">
            {pageToShow == null ?
                <div
                    className="logo"
                >
                    Лого
                </div> : <div className='back_icon_container'><ArrowBackIosIcon className='back_icon' onClick={() => setPageToShow(null)} /></div>}

            <div
                className="drop_down_button"
                onClick={setShowNavbar}
            >
                {showNavbar ? (
                    <CloseIcon fontSize="large" />
                ) : (
                    <MenuIcon fontSize="large" />
                )}
            </div>
        </div>
    )
}

export default ManagerDropDown