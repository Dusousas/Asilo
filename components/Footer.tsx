import React from 'react';
import Image from 'next/image';

export default function Footer() {
    return (
        <>
            <footer className='text-center py-4 bg-BlueP flex flex-col justify-center items-center'>
                <a href="/">
                    <Image className=''
                    src="/footerlogo.png"
                    alt="Imagem decorativa"
                    width={130}
                    height={100}
                    priority />
                </a>
                <p className='text-gray-400 mts-4'>Casa de repouso missono - Todos os direitos reservados</p>
            </footer>
        </>
    );
}