"use client";

import React from "react";
import { FaBars } from 'react-icons/fa';
import { VscTerminal } from "react-icons/vsc";
import { Link } from 'react-scroll';
import { HiX } from 'react-icons/hi';
import { useState } from "react";
import { usePathname } from 'next/navigation';
import './styles.scss';

const data = [
    {
        label: 'HERO',
        to: "hero"
    },
    {
        label: 'ABOUT',
        to: 'about'
    },
    {
        label: 'EXPERIENCE',
        to: "experience"
    },
    {
        label: 'PROJECTS',
        to: 'projects'
    },
    {
        label: 'RESUME',
        to: 'resume'
    },
    {
        label: 'CONTACT',
        to: 'contact'
    },
];

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);
    const pathname = usePathname();
    
    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    const closeMenu = () => {
        setToggleIcon(false);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar_container">
                    <Link href="/" className="navbar_container_logo">
                        <VscTerminal size={45} />
                    </Link>
                </div>
                <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""}`}>
                    {
                        data.map((item, key) => (
                            <li key={key} className="navbar_container_menu_item">
                                <Link 
                                    className={`navbar_container_menu_item_links ${pathname === item.to ? 'active' : ''}`} 
                                    to={item.to}
                                    onClick={closeMenu}
                                    smooth={true}
                                    duration={500}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="nav_icon" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
