import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';


export default function Testimonials() {
    const testimonials = [
        {
            name: 'Lucimar',
            text: "Existem momentos em que, apesar de todos os esforços e tentativas para cuidar de nossos idosos, percebemos que não conseguimos mais dar conta sozinhos. Nessas horas, buscar ajuda profissional se torna essencial. A Casa de Repouso Missono tem sido de grande auxílio para nosso pai, pois o carinho e a dedicação com que ele é tratado são genuínos. Além disso, as atividades de fisioterapia e entretenimento proporcionam a ele momentos de alegria e bem-estar. Podemos dizer que estamos tranquilos em confiar nos cuidados da Natália Missono e de sua equipe. Nossa gratidão é imensa!",
            image: 'perfil1.png',
            stars: [1, 2, 3, 4, 5],
        },
        {
            name: 'Ana Clara Souza',
            text: 'Ver minha mãe bem cuidada e feliz faz toda a diferença. A equipe é atenciosa e dedicada, sempre proporcionando conforto e carinho. Somos muito gratos!',
            image: 'perfil1.png',
            stars: [1, 2, 3, 4, 5],
        },
        {
            name: 'Guilherme Banzato',
            text: 'Ambiente acolhedor, profissionais atenciosos e dedicados. Uma experiência confiável e tranquila.',
            image: 'perfil1.png',
            stars: [1, 2, 3, 4, 5],
        },
    ];

    return (
        <section className='pb-20'>
            <div className='maxW'>
                <article className='flex flex-col gap-4 lg:flex-row lg:gap-0'>
                    <div className='w-full bg-BlueP py-20 px-10 rounded-l-2xl lg:w-1/2'>
                        <h1 className='text-white font-bold text-[24px]'>O que dizem de nós</h1>
                        <h1 className='text-white font-semibold text-[35px]'>Seu bem-estar é nossa missão, com cuidado e afeto.</h1>
                        <p className='text-white'>Histórias reais, conquistas incríveis! Nossos clientes compartilham suas experiências e como nosso trabalho fez a diferença para eles.</p>
                        <div className='flex justify-center mt-6 lg:justify-start'>
                            <a target='_blank'  className='text-white uppercase font-semibold border py-2 px-4 rounded-lg border-white' href="https://wa.me/5514998766306?text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+e+gostaria+de+saber+mais!">Contato</a>
                        </div>
                    </div>

                    <div className='w-full bg-RedP py-20 px-10 rounded-r-2xl lg:w-1/2'>
                        <h1 className='text-white font-semibold text-[35px]'>Depoimentos</h1>

        
                        <Swiper
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            slidesPerView={1} 
                            spaceBetween={10} 
                            speed={500}
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div className="testimonial-card">
                                        <div className="flex">
                                            {testimonial.stars.map((star, i) => (
                                                <div key={i} className="mx-[1px] mt-2">
                                                    <FaStar className="text-[#FEC42D]" />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-8">
                                            <p className="text-white">{testimonial.text}</p>
                                            <div className="flex mt-8 items-center gap-3">
                                                <img className="w-[10%]" src={testimonial.image} alt={testimonial.name} />
                                                <h1 className="text-white">{testimonial.name}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </article>
            </div>
        </section>
    );
}
