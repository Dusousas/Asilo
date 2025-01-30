import React from 'react';

export default function Galery() {
    return (
        <>
            <section className='py-20'>
                <div className='maxW'>
                    <h2 className='font-bold text-xl uppercase tracking-wider text-center'>Galeria</h2>
                    <h1 className='font-bold text-3xl mt-2 text-center lg:max-w-[50%] lg:mx-auto'>Nossos momentos mais especiais com aqueles que cuidamos</h1>
                    <p className='text-center mt-4 lg:max-w-[50%] lg:mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum perferendis possimus sapiente voluptate, asperiores tempora eius voluptates earum iste culpa.s</p>

                    <article className='flex flex-wrap justify-center gap-6 lg:w-[90%] lg:mx-auto mt-10'>
                        <img className='rounded-lg' src="g8-1.png" alt="" />
                        <img className='rounded-lg' src="g8-1.png" alt="" />
                        <img className='rounded-lg' src="g8-1.png" alt="" />
                        <img className='rounded-lg' src="g8-1.png" alt="" />
                        <img className='rounded-lg' src="g8-1.png" alt="" />
                        <img className='rounded-lg' src="g8-1.png" alt="" />





                    </article>
                </div>
            </section>
        </>
    );
}