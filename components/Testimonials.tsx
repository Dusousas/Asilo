import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';


export default function Testimonials() {
    const testimonials = [
        {
            name: 'Paulo Santos',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore sit ab fugiat exercitationem vero repellendus debitis nihil ullam provident ex?',
            image: 'perfil1.png',
            stars: [1, 2, 3, 4, 5],
        },
        {
            name: 'Maria Silva',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, maiores. Quasi, cumque?',
            image: 'perfil1.png',
            stars: [1, 2, 3, 4, 5],
        },
        {
            name: 'José Almeida',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, vero?',
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
                        <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam nisi, cumque amet vel consequuntur quod!</p>
                        <div className='flex justify-center mt-6 lg:justify-start'>
                            <a className='text-white uppercase font-semibold border py-2 px-4 rounded-lg border-white' href="">Contato</a>
                        </div>
                    </div>

                    <div className='w-full bg-RedP py-20 px-10 rounded-r-2xl lg:w-1/2'>
                        <h1 className='text-white font-semibold text-[35px]'>Depoimentos</h1>

                        {/* Swiper de Depoimentos */}
                        <Swiper
                            autoplay={{
                                delay: 1000, // Atraso de 3 segundos para transição automática
                                disableOnInteraction: false, // Continua o autoplay mesmo após interação
                            }}
                            loop={true} // Loop infinito
                            slidesPerView={1} // Exibe um depoimento por vez
                            spaceBetween={10} // Espaço entre os slides
                            speed={500} // Duração da transição
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
