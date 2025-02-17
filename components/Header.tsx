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
                        <a className='uppercase font-bold text-xl/5 text-RedP' href="">Missono</a>
                        <a className='uppercase font-bold text-lg/5 text-RedP' href="">Casa de Repouso</a>
                    </div>
                    <Navbar />
                </div>
            </header>
        </>
    );
}