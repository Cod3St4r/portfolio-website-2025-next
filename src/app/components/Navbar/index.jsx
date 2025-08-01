"use client";

import React from "react";
import { FaBars } from 'react-icons/fa';
import { VscTerminal } from "react-icons/vsc";
import Link from 'next/link';
import { HiX } from 'react-icons/hi';
import { useState } from "react";
import { usePathname } from 'next/navigation';
import './styles.scss';

const data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'ABOUT',
        to: '/about'
    },
    {
        label: 'SKILLS',
        to: '/skills'
    },
    {
        label: 'PORTFOLIO',
        to: '/portfolio'
    },
    {
        label: 'RESUME',
        to: '/resume'
    },
    {
        label: 'CONTACT',
        to: '/contact'
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
                                    href={item.to}
                                    onClick={closeMenu}
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
