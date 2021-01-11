import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaChevronRight,FaUserFriends } from "react-icons/fa";
import { CgCalendarDates} from "react-icons/cg";
import { AiOutlineExport} from "react-icons/ai";

import { SidebarData } from './SidebarData';
import { useTranslation } from 'react-i18next';
import i18next from '../i18n';
import { ModalBody } from 'react-bootstrap';


const Navbar = () => {
       const { t } = useTranslation();
  
    function handleClick(lang) {
      i18next.changeLanguage(lang)
     
    }
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <div className="navbar1">
            <div className="container">

                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <button onClick={()=>handleClick('en')} className="btn1 btn-black">
                            En
                        </button>
                        <button onClick={()=>handleClick('ar')} className="btn1 btn-blue">
                            Ar
                        </button>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <img src="images/logo.png" alt="" className="logo" />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <Link to="#" className="menu-bars">
                            <FaUserAlt onClick={showSidebar} className="menu-bars-icon" />
                        </Link>
                        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                            <ul className='nav-menu-items list-unstyled' onClick={showSidebar}>
                                <li className="navbar-toggle">
                                    <Link to="" className='menu-bars'>
                                        <FaChevronRight className="nav-ad nav-ad1"/>
                                        <FaUserAlt className="nav-ad nav-ad2"/>
                                        <h2>{t('Applicants.1')}</h2>
                                    </Link>
                                </li>
                                <li>
                                            <Link to="/">
                                                <p className="nav-icon"><FaUserFriends/></p>
                                                <span className="nav-title">{t('Applicants.1')}</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="dates">
                                                <p className="nav-icon"><CgCalendarDates/></p>
                                                <span className="nav-title">{t('Dates.1')}</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="signout">
                                                <p className="nav-icon"><AiOutlineExport/></p>
                                                <span className="nav-title">{t('Sign Out.1')}</span>
                                            </Link>
                                        </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
