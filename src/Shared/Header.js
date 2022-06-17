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
                            <Link to='/'>
                                <img src={logo} alt='' />
                            </Link>
                        </div>
                    </label>
                </div>
                <div className="flex-none gap-2">
                    {/* <a href='' className='mx-5 font-bold'>Home</a>
                    <a href='' className='mx-5 font-bold'>Hobbies</a>
                    <a href='' className='mx-5 font-bold'>Skills</a>
                    <a href='' className='mx-5 font-bold'></a> */}
                    <Link className='mx-2 font-bold' to='/blogs'>Blogs</Link>
                    <a href='https://drive.google.com/file/d/1r9s-ZqSZo38PmIeXDk5y7XE1SCZUIomQ/view?usp=sharing' target='_blank' className='btn btn-primary btn-outline mx-2'>Get Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Header;