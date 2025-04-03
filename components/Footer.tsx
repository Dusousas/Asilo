import React from 'react';

export default function Footer() {
    return (
        <>
            <footer className='text-center py-4 bg-BlueP flex flex-col justify-center items-center'>
                <a href="/">
                    <img className=''
                    src="/footerlogo.png"
                    alt="Imagem decorativa"
                    width={130}
                    height={100} />
                </a>
                <p className='text-gray-400 mt-4'>Casa de repouso missono - Todos os direitos reservados</p>
            </footer>
        </>
    );
}