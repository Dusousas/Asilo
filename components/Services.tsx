import React from 'react';
import CardService from './subc/CardService';

export default function Services() {
    return (
        <>

            <section id='services' className='py-20 gradient serviceBG relative'>
                <div className='maxW z-10 relative'>
                    <h2 className='font-bold text-xl uppercase tracking-wider text-center'>Nossos Serviços</h2>
                    <h1 className='font-bold text-3xl mt-2 text-center lg:max-w-[50%] lg:mx-auto'>Para os melhores pacientes e famílias, com os melhores enfermeiros.</h1>
                    <p className='text-center mt-4 lg:max-w-[50%] lg:mx-auto'>Profissionais de saúde dedicados, preparados para oferecer o melhor aos nossos residentes.</p>

                    <div className='mt-20'>
                        <CardService />
                    </div>
                </div>
            </section>
        </>
    );
}