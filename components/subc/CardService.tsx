import React from 'react';

const services = [
    {
        id: 1,
        title: "Disponibilidade 24 horas",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, iusto.",
        image: "Layer_4-12.png"
    },
    {
        id: 2,
        title: "Atendimento personalizado",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "Layer_4-12.png"
    },
    {
        id: 3,
        title: "Suporte técnico",
        description: "Garantimos suporte para qualquer dúvida ou problema técnico.",
        image: "Layer_4-12.png"
    },
    {
        id: 4,
        title: "Alta performance",
        description: "Nossos serviços são otimizados para máxima eficiência.",
        image: "Layer_4-12.png"
    },
    {
        id: 5,
        title: "Segurança garantida",
        description: "Protegemos seus dados com tecnologia de ponta.",
        image: "Layer_4-12.png"
    },
    {
        id: 6,
        title: "Facilidade de uso",
        description: "Soluções intuitivas para todos os tipos de usuários.",
        image: "Layer_4-12.png"
    }
];

export default function CardService() {
    return (
        <article className='flex flex-col gap-6 maxW items-center justify-center lg:flex-row flex-wrap'>
            {services.map(service => (
                <div key={service.id} className='border-RedP border py-10 w-full flex flex-col justify-center items-center rounded-2xl hover:bg-white lg:w-[25%] h-[250px]'>
                    <div>
                        <img src={service.image} alt={service.title} />
                    </div>
                    <h1 className='font-bold text-xl text-center mt-1'>{service.title}</h1>
                    <p className='text-center px-12 mt-3'>{service.description}</p>
                </div>
            ))}
        </article>
    );
}
