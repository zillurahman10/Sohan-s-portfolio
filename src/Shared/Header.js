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
                    <p className='mx-5 font-bold'>Home</p>
                    <p className='mx-5 font-bold'>Hobbies</p>
                    <p className='mx-5 font-bold'>Skills</p>
                    <p className='mx-5 font-bold'></p>
                </div>
            </div>
        </div>
    );
};

export default Header;