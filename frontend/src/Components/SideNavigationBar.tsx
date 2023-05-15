import React from 'react'
import { BsArrowLeftShort } from "react-icons/bs"
import { RxDashboard } from "react-icons/rx"
import { MdFastfood } from "react-icons/md"
import {GiCycling} from "react-icons/gi"
import {CgCommunity,CgProfile} from "react-icons/cg"
import {RiLogoutBoxRLine} from "react-icons/ri"
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { logoutUser } from '../Redux/LoginReducer/action'
const Menus = [
    { title: "Dashboard", link: "/Dashboard", icon: <RxDashboard /> },
    { title: "Food", link: "/food", icon: <MdFastfood /> },
    { title: "Exercise", link: "/exercise", icon: <GiCycling /> },
    { title: "Community", link: "/community", icon: <CgCommunity /> },
    { title: "User Profile", link: "/userdetails", icon: <CgProfile />, spacing: true },
]

const SideNavigationBar = ({obj}:any) => {
    const dispatch = useDispatch()
    const handleClick = ()=>{
        logoutUser(dispatch)
    }
    return (

        <div className={`bg-[#081747]  h-[700px] p-5 ${obj.isOpen ? "w-72" : "w-20"} duration-500  pt-8 relative`}>
            <BsArrowLeftShort className={`bg-white text-[#081747] text-3xl rounded-full absolute -right-3 top-9 border ${!obj.isOpen && "rotate-180"} border-v-blue cussor-pointer`} onClick={() => obj.setisOpen((prev:any) => !prev)} />

            <ul className='pt-2'>
                {Menus.map((menu, index) => {
                    return <>

                        <Link to={menu.link}>
                            <li key={index}
                                className={`text-gray-300 text-lg flex items-center duration-500
                                
                                 gap-x-4 cursor-pointer p-2 hover:bg-white rounded-md   hover:text-black ${menu.spacing ? "mt-10" : "mt-2"}`}>
                                <span className={`p-2 ${!obj.isOpen ? "w-4" : "w-2.5"}`}>
                                    {
                                        menu.icon
                                    }
                                </span>
                                <span className={`${!obj.isOpen && "hidden"}`}>
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    </>
                })}
                <li   onClick={()=>handleClick()}
                                className={`text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white rounded-md duration-500   hover:text-black `}>
                                <span className={`p-2 ${!obj.isOpen ? "w-4" : "w-2.5"}`}>
                                <RiLogoutBoxRLine/>
                                </span>
                                <span className={`${!obj.isOpen && "hidden"}`}>
                                    LOGOUT
                                </span>
                            </li>
            </ul>
        </div>
        
    )
}

export default SideNavigationBar

//${isOpen ? "w-72" : "w-20" } 