import React from 'react';
import About2 from './subc/About2';

export default function About() {
    return (
        <>
            <section id='about' className='py-20'>
                <div className='maxW flex flex-col-reverse gap-y-6 items-center lg:flex-row'>

                    <article className='relative flex justify-center lg:w-1/2'>
                    <img
                            className='absolute hidden right-[75px] top-[-50px] lg:block' 
                            src="/unnamed-file.png" 
                            alt="Imagem ilustrativa" 
                            width={30} 
                            height={500} 
                        />
                        <img
                            className='rounded-t-xl rounded-b-xl w-[500px] h-[600px] object-cover' 
                            src="/g8-1.webp" 
                            alt="Imagem sobre nós" 
                            width={500} 
                            height={600}
                        />
                    </article>

                    <article className='lg:px-12 lg:w-1/2'>
                        <h2 className='font-bold text-xl uppercase tracking-wider'>Sobre nós</h2>
                        <h1 className='font-bold  text-3xl mt-2 max-w-[90%]'>Aqui, cada história é valorizada com amor e respeito.</h1>
                        <p className='mt-4 max-w-[90%]'>Na Casa de Repouso Missono, cada história é valorizada com amor e respeito. Desde o dia 15 de novembro de 2022, temos o privilégio de oferecer um ambiente acolhedor e seguro para nossos residentes, garantindo que todos se sintam em casa. Nosso objetivo é proporcionar qualidade de vida, promovendo o bem-estar físico, emocional e social de cada um, com a dedicação de nossa equipe de profissionais altamente capacitados.</p>

                        <div className='flex mt-8 gap-6 items-center'>
                            <h2 className='border-2 border-RedP px-6 py-4 font-bold text-2xl rounded-xl'>100+</h2>
                            <div className=''>
                                <h2 className='text-2xl font-bold'>Famílias Atendidas</h2>
                                <p className='max-w-[80%]'>Ao longo dos anos, ajudamos mais de 100 famílias a garantirem conforto, segurança e bem-estar para seus entes queridos.</p>
                            </div>
                        </div>

                        <div className='flex mt-8 gap-6 items-center'>
                            <h2 className='border-2 border-RedP px-6 py-4 font-bold text-2xl rounded-xl'>02+</h2>
                            <div className=''>
                                <h2 className='text-2xl font-bold'>Cuidando e Acolhendo</h2>
                                <p className='max-w-[80%]'>Proporcionamos um ambiente seguro e aconchegante para que cada residente se sinta em casa.</p>
                            </div>
                        </div>

                        <div className='flex justify-center mt-8 lg:justify-start'>
                            <a className='text-RedP uppercase font-semibold border py-2 px-4 rounded-lg border-RedP' target='_blank' rel="noopener noreferrer" href="https://wa.me/5514998766306?text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+e+gostaria+de+saber+mais!">Entre em contato</a>
                        </div>
                    </article>

                </div>
            </section>

            <About2 />
        </>


    );
}