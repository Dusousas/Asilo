import React from 'react';


export default function Slide3() {
    return (
        <>
            <section className="slider3 flex items-center">
                <div className="absolute inset-0 bg-black bg-opacity-60" />
                <div className="maxW w-full relative z-10">
                    <article className="text-white lg:w-1/2">
                        <h2 className="uppercase text-center text-[12px] tracking-widest mb-2 lg:text-left font-bold">Saúde Integral</h2>
                        <p className="text-5xl uppercase font-Oswald font-semibold text-center tracking-wider mb-5 lg:text-left">Oferecemos serviço de enfermagem 24 horas por dia.</p>
                        <p className="text-[15px] mb-8 text-center lg:text-left font-semibold">Monitoramento contínuo da saúde e bem-estar, garantindo qualidade de vida e atendimento rápido sempre que necessário.</p>
                    </article>
                </div>
            </section>
        </>
    );
}
