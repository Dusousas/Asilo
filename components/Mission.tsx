import React from 'react';

export default function Mission() {
    return (
        <>
            <section className='missionBG relative'>
                <div className='py-32 relative z-10'>
                    <h1 className='font-bold text-xl uppercase tracking-wider text-center text-white'>Nossa missão</h1>
                    <h1 className='font-bold text-3xl mt-2 text-center text-white lg:max-w-[50%] lg:mx-auto'>Garantimos qualidade de vida, promovendo o bem-estar físico, emocional e social de nossos residentes</h1>
                    <p className='text-center mt-4 text-white lg:max-w-[50%] lg:mx-auto'>Cuidar é nossa missão: conforto, segurança e carinho para cada residente.</p>

                    <div className='flex justify-center mt-6'>
                        <a className='text-white bg-RedP uppercase font-semibold px-6 py-2 rounded-xl' target='_blank' href="https://wa.me/5514998766306?text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+e+gostaria+de+saber+mais!">Fale conosco</a>
                    </div>
                </div>
            </section>
        </>
    );
}