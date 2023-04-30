import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';

const Main = () => {
    return (
        <div className='px-32'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;