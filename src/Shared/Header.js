import React from 'react';
import './Header.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mx-8'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-24 rounded-full">
                            <img src={logo} />
                        </div>
                    </label>
                </div>
                <div className="flex-none gap-2">
                    {/* <a href='' className='mx-5 font-bold'>Home</a>
                    <a href='' className='mx-5 font-bold'>Hobbies</a>
                    <a href='' className='mx-5 font-bold'>Skills</a>
                    <a href='' className='mx-5 font-bold'></a> */}
                    <Link className='mx-2 font-bold' to='/'>Blogs</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;