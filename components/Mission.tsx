import React from 'react';

export default function Mission() {
    return (
        <>
            <section className='missionBG relative'>
                <div className='py-32 relative z-10'>
                    <h1 className='font-bold text-xl uppercase tracking-wider text-center text-white'>Nossa missão</h1>
                    <h1 className='font-bold text-3xl mt-2 text-center text-white lg:max-w-[50%] lg:mx-auto'>Garantimos qualidade de vida, promovendo o bem-estar físico, emocional e social de nossos residentes</h1>
                    <p className='text-center mt-4 text-white lg:max-w-[50%] lg:mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum perferendis possimus sapiente voluptate, asperiores tempora eius voluptates earum iste culpa.s</p>

                    <div className='flex justify-center mt-6'>
                        <a className='text-white bg-RedP uppercase font-semibold px-6 py-2 rounded-xl' href="">Fale conosco</a>
                    </div>
                </div>
            </section>
        </>
    );
}