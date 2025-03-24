import React from 'react';
const services = [
    {
        id: 1,
        title: "Cuidados 24 horas",
        description: "Nossa equipe está sempre presente para oferecer assistência completa, garantindo a segurança e o bem-estar dos residentes.",
        image: "Group-13.png"
    },
    {
        id: 2,
        title: "Acompanhamento médico",
        description: "Profissionais de saúde disponíveis para monitoramento constante, consultas e cuidados preventivos.",
        image: "Group-13.png"
    },
    {
        id: 3,
        title: "Fisioterapia e reabilitação",
        description: "Sessões personalizadas para promover a mobilidade, prevenir dores e melhorar a qualidade de vida.",
        image: "Group-13.png"
    },
    {
        id: 4,
        title: "Atividades recreativas",
        description: "Oferecemos jogos, música, artesanato e passeios para estimular a mente e o convívio social.",
        image: "Group-13.png"
    },
    {
        id: 5,
        title: "Nutrição balanceada",
        description: "Refeições elaboradas por nutricionistas, respeitando as necessidades e preferências individuais.",
        image: "Group-13.png"
    },
    {
        id: 6,
        title: "Apoio emocional e psicológico",
        description: "Profissionais especializados para oferecer suporte emocional e psicológico aos residentes e familiares.",
        image: "Group-13.png"
    }
];


export default function CardService() {
    return (
        <article className='flex flex-col gap-6 maxW items-center justify-center lg:flex-row flex-wrap'>
            {services.map(service => (
                <div key={service.id} className='border-RedP border py-10 w-full flex flex-col justify-center items-center rounded-2xl hover:bg-white lg:w-[25%] h-[250px]'>
                    <div>
                        <img className='w-[80%]' src={service.image} alt={service.title} />
                    </div>
                    <h1 className='font-bold text-xl text-center mt-2'>{service.title}</h1>
                    <p className='text-center px-12 mt-3'>{service.description}</p>
                </div>
            ))}
        </article>
    );
}
