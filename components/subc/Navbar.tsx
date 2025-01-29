import React from 'react';

export default function Navbar() {
    return (
        <>
            <nav className='hidden lg:block'>
                <ul className='flex gap-6 text-lg uppercase font-semibold text-BlueP'>
                    <a href=""><li>Início</li></a>
                    <a href=""><li>Sobre</li></a>
                    <a href=""><li>Serviços</li></a>
                    <a href=""><li>Contato</li></a>
                </ul>
            </nav>

            {/* Menu mobile */}
            <nav className='hidden lg:hidden'>
                <ul className='flex gap-6 text-lg uppercase font-semibold text-BlueP'>
                    <a href=""><li>Início</li></a>
                    <a href=""><li>Sobre</li></a>
                    <a href=""><li>Serviços</li></a>
                    <a href=""><li>Contato</li></a>
                </ul>
            </nav>


        </>
    );
}