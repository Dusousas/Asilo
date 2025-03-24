import React from 'react';
import Navbar from './subc/Navbar';
import LineH from './subc/LineH';

export default function Header() {
    return (
        <>
            <LineH />
            <header className='py-5'>
                <div className='maxW flex justify-between items-center'>
                    <div className='flex flex-col text-center'>
                        <a href="/"><img className='w-[160px]' src="logo.png" alt="" /></a>
                    </div>
                    <Navbar />
                </div>
            </header>
        </>
    );
}