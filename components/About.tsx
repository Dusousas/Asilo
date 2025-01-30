import React from 'react';
import About2 from './subc/About2';

export default function About() {
    return (
        <>
            <section className='py-20'>
                <div className='maxW flex flex-col-reverse gap-y-6 items-center lg:flex-row'>

                    <article className='relative flex justify-center lg:w-1/2'>
                        <img className='absolute hidden right-[75px] top-[-50px] lg:block' src="unnamed-file.png" alt="" />
                        <img className='rounded-t-xl rounded-b-xl w-[500px]' src="g8-1.png" alt="" />
                    </article>

                    <article className='lg:px-12 lg:w-1/2'>
                        <h2 className='font-bold text-xl uppercase tracking-wider'>Sobre nós</h2>
                        <h1 className='font-bold  text-3xl mt-2 max-w-[90%]'>Aqui, cada história é valorizada com amor e respeito.</h1>
                        <p className='mt-4 max-w-[90%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolorum voluptatem quas nam voluptatum unde libero sunt, laudantium harum, quibusdam aliquid? Minima eius, doloribus obcaecati accusamus aspernatur unde ex quos?</p>

                        <div className='flex mt-8 gap-6 items-center'>
                            <h2 className='border-2 border-RedP px-6 py-4 font-bold text-2xl rounded-xl'>10+</h2>
                            <div className=''>
                                <h2 className='text-2xl font-bold'>Anos de experiência</h2>
                                <p className='max-w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, rerum.</p>
                            </div>
                        </div>

                        <div className='flex mt-8 gap-6 items-center'>
                            <h2 className='border-2 border-RedP px-6 py-4 font-bold text-2xl rounded-xl'>10+</h2>
                            <div className=''>
                                <h2 className='text-2xl font-bold'>Anos de experiência</h2>
                                <p className='max-w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, rerum.</p>
                            </div>
                        </div>

                        <div className='flex justify-center mt-8 lg:justify-start'>
                            <a className='text-RedP uppercase font-semibold border py-2 px-4 rounded-lg border-RedP' href="">Saiba mais</a>
                        </div>
                    </article>

                </div>
            </section>

            <About2 />
        </>


    );
}