import React from 'react';


export default function Slide1() {
    return (
        <>
            <section className="slider1 flex items-center">
                <div className="absolute inset-0 bg-black bg-opacity-60" />
                <div className="maxW w-full relative z-10">
                    <article className="text-white lg:w-1/2">
                        <h2 className="uppercase text-center text-[12px] tracking-widest mb-2 lg:text-left font-bold">Equipe Especializada</h2>
                        <p className="text-5xl uppercase font-Oswald font-semibold text-center tracking-wider mb-5 lg:text-left">Oferecemos serviço de enfermagem 24 horas por dia.</p>
                        <p className="text-[15px] mb-8 text-center lg:text-left font-semibold">Com um cuidado personalizado e uma abordagem humanizada, nossa equipe está sempre à disposição
                            para proporcionar o máximo de conforto e segurança, assegurando que seus entes queridos recebam
                            a melhor assistência, seja em momentos de rotina ou em situações especiais que exigem cuidados
                            médicos mais intensivos.</p>
                    </article>

                </div>
            </section>
        </>
    );
}
