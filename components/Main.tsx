import React from 'react';
import Cardsmain from './subc/Cardsmain';

export default function Main() {
    return (
        <>
            <section className='gradient py-20 '>
                <div className='maxW flex flex-col lg:flex-row gap-6 lg:items-center'>

                    <article className='w-full lg:w-1/2'>
                        <h1 className='font-bold text-3xl text-center lg:text-left '>Oferecemos serviço de enfermagem 24 horas por dia, 7 dias por semana para sua família</h1>
                        <p className='mt-4 text-center lg:text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa aspernatur corporis repellendus sapiente praesentium, repellat reiciendis asperiores, sunt, necessitatibus nulla recusandae</p>

                        <div className='flex justify-center mt-6 lg:justify-start'>
                            <a className='text-RedP uppercase font-semibold border py-2 px-4 rounded-lg border-RedP' href="">Saiba mais</a>
                        </div>
                    </article>

                    <article className='flex mt-10 justify-center items-center flex-col gap-6 lg:w-1/2 lg:flex-row relative'>
                        <img className='absolute hidden top-[30px] left-[400px] lg:block' src="unnamed-file.png" alt="" />
                        <img className='rounded-t-full rounded-l-full max-w-[60%] lg:max-w-[40%] lg:mb-28' src="s1.jpg" alt="" />
                        <img className='rounded-b-full rounded-r-full  max-w-[60%] lg:max-w-[40%] lg:mt-28' src="sh1.jpg" alt="" />
                    </article>
                </div>
                <div className='mt-20'>
                    <Cardsmain />
                </div>

            </section>
        </>
    );
}