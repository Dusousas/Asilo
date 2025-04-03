export default function CardsMain() {
    const cards = [
        {
            imgSrc: "/Layer_4-14.png",
            alt: "Cuidado 24 horas",
            title: "Cuidado 24 horas",
            description: "Garantimos assistência contínua com profissionais dedicados, proporcionando conforto e segurança para nossos residentes."
        },
        {
            imgSrc: "/Layer_4-12.png",
            alt: "Ambiente Acolhedor",
            title: "Ambiente Acolhedor",
            description: "Criamos um espaço seguro e confortável, onde cada residente se sente em casa, com atendimento personalizado."
        },
        {
            imgSrc: "/Layer_4-13.png",
            alt: "Acompanhamento Médico",
            title: "Acompanhamento Médico",
            description: "Monitoramento contínuo da saúde e bem-estar, garantindo qualidade de vida e atendimento rápido sempre que necessário."
        }
    ];

    return (
        <article className='flex flex-col gap-6 max-w-full items-center justify-center lg:flex-row'>
            {cards.map((card, index) => (
                <div 
                    key={index} 
                    className='border-RedP border py-10 px-2 w-full flex flex-col items-center rounded-2xl hover:bg-white lg:w-[25%] transition-all duration-300 hover:shadow-lg'
                >
                    <div>
                        <img
                            src={card.imgSrc}
                            alt={card.alt}
                            width={30}
                            height={200}
                        />
                    </div>
                    <h1 className='font-bold text-xl text-center mt-4'>{card.title}</h1>
                    <p className='text-center px-6 mt-3'>{card.description}</p>
                </div>
            ))}
        </article>
    );
}
