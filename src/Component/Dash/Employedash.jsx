import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Tasklist from '../Tasklist/Tasklist'
import Acccepttask from '../Tasklist/Acccepttask';
import { setlocalstorage } from '../../utils/Localstorage';
import AllTask from '../Other/AllTask';



const Employedash = ({ Authdata }) => {
    const logoutuser = () => {
        localStorage.removeItem('loggedInUser'); 
        window.location.reload(); 
    };





    return (
        <>
            <div className=' pt-6 px-10'>
                <div className='flex  justify-between items-end'>
                    <h1 className='text-2xl font-semibold'>Hello, <br /> <span className='text-orange-600 text-3xl font-bold'>{Authdata.firstName} ✋</span></h1>

                    <button onClick={logoutuser} className='h-10 w-20 border-2 border-orange-600 bg-orange-600 rounded-lg text-white font-bold'> Log Out</button>

                </div>

            </div>
            <div className='flex flex-wrap md:flex-nowrap justify-between items-center mt-10 px-2 md:px-10 gap-4'>
    <div className='h-[120px] w-full md:w-[220px] bg-blue-600 rounded-xl px-4 flex flex-col justify-center mb-4 md:mb-0'>
        <h1 className='text-white font-bold text-2xl md:text-3xl'>0</h1>
        <p className='text-white font-semibold text-lg md:text-xl'>New Task</p>
    </div>
    <div className='h-[120px] w-full md:w-[220px] bg-orange-600 rounded-xl px-4 flex flex-col justify-center mb-4 md:mb-0'>
        <h1 className='text-white font-bold text-2xl md:text-3xl'>3</h1>
        <p className='text-white font-semibold text-lg md:text-xl'>Completed</p>
    </div>
    <div className='h-[120px] w-full md:w-[220px] bg-red-600 rounded-xl px-4 flex flex-col justify-center mb-4 md:mb-0'>
        <h1 className='text-white font-bold text-2xl md:text-3xl'>1</h1>
        <p className='text-white font-semibold text-lg md:text-xl'>Accepted</p>
    </div>
    <div className='h-[120px] w-full md:w-[220px] bg-yellow-600 rounded-xl px-4 flex flex-col justify-center'>
        <h1 className='text-white font-bold text-2xl md:text-3xl'>0</h1>
        <p className='text-white font-semibold text-lg md:text-xl'>Failed</p>
    </div>
</div>
<div className='px-2 md:px-10 mt-10'>
    <Tasklist Authdata={Authdata}/>
</div>
        </>
    )
}

export default Employedash



