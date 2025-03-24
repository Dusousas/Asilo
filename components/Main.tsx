import Image from 'next/image';
import React from 'react';
import Cardsmain from './subc/Cardsmain';

export default function Main() {
    return (
        <>
            <section className='gradient py-20 '>
                <div className='maxW flex flex-col lg:flex-row gap-6 lg:items-center'>

                    <article className='w-full lg:w-1/2'>
                        <h1 className='font-bold text-3xl text-center lg:text-left'>
                            Oferecemos serviço de enfermagem 24 horas por dia, 7 dias por semana para sua família
                        </h1>
                        <p className='mt-4 text-center lg:text-left'>
                            Com um cuidado personalizado e uma abordagem humanizada, nossa equipe está sempre à disposição 
                            para proporcionar o máximo de conforto e segurança, assegurando que seus entes queridos recebam 
                            a melhor assistência, seja em momentos de rotina ou em situações especiais que exigem cuidados 
                            médicos mais intensivos.
                        </p>

                        <div className='flex justify-center mt-6 lg:justify-start'>
                            <a className='text-RedP uppercase font-semibold border py-2 px-4 rounded-lg border-RedP' href="#services">
                                Saiba mais
                            </a>
                        </div>
                    </article>

                    <article className='flex mt-10 justify-center items-center flex-col gap-6 lg:w-1/2 lg:flex-row relative'>
                        <Image className='absolute hidden top-[30px] left-[400px] lg:block' 
                            src="/unnamed-file.png" 
                            alt="Imagem decorativa" 
                            width={50} 
                            height={20} 
                            priority />

                        <Image className='rounded-t-full rounded-l-full max-w-[60%] lg:max-w-[40%] lg:mb-28' 
                            src="/s1.webp" 
                            alt="Imagem de enfermagem" 
                            width={400} 
                            height={400} 
                            priority />

                        <Image className='rounded-b-full rounded-r-full max-w-[60%] lg:max-w-[40%] lg:mt-28' 
                            src="/sh1.webp" 
                            alt="Imagem de cuidados médicos" 
                            width={400} 
                            height={400} 
                            priority />
                    </article>
                </div>
                
                <div className='mt-20'>
                    <Cardsmain />
                </div>
            </section>
        </>
    );
}
