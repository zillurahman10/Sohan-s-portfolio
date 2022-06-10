import React from 'react';
import './Header.css'
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='mx-8'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-24 rounded-full">
                            <img src={logo} />
                        </div>
                    </label>
                </div>
                <div className="flex-none gap-2">
                    <a href='' className='mx-5 font-bold'>Home</a>
                    <a href='' className='mx-5 font-bold'>Hobbies</a>
                    <a href='' className='mx-5 font-bold'>Skills</a>
                    <a href='' className='mx-5 font-bold'></a>
                </div>
            </div>
        </div>
    );
};

export default Header;