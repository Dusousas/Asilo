import React from 'react';
import Navbar from './subc/Navbar';
import LineH from './subc/LineH';

export default function Header() {
    return (
        <>
            <LineH />
            <header className='py-5'>
                <div className='maxW flex justify-between'>
                    <div className='flex flex-col text-center'>
                        <a className='uppercase font-bold text-xl/5 text-RedP' href="">Lar São José</a>
                        <a className='uppercase font-bold text-lg/5 text-RedP' href="">Torrinha</a>
                    </div>
                    <Navbar />
                </div>
            </header>
        </>
    );
}