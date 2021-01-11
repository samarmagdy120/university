import React from 'react'
import {FaUserFriends} from "react-icons/fa";
import {CgCalendarDates} from "react-icons/cg";
import {AiOutlineExport} from "react-icons/ai";

export const SidebarData = [
    {
        title:'Applicants',
        path:'/',
        icon:<FaUserFriends/>,
        cName:'nav-text'
    },
    {
        title:'Dates',
        path:'/',
        icon:<CgCalendarDates/>,
        cName:'nav-text'
    },
    {
        title:'Sign Out',
        path:'/',
        icon:<AiOutlineExport/>,
        cName:'nav-text'
    }

]

export default SidebarData;
