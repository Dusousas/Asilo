import React from 'react';

export default function Contact() {
    return (
        <>
            <section className='pb-20'>
                <div className='flex justify-end'>


                    <div className='bg-BlueP w-full py-32 flex justify-center lg:w-[85%] lg:rounded-l-full '>
                        <form className='py-10  px-[2%] lg:w-1/2 lg:px-20 ' action="">
                            <span className='text-white font-semibold text-[24px]'>Fale Conosco</span>
                            <h1 className='text-white font-semibold text-[35px]' >Tire suas dúvidas</h1>
                            <p className='mb-6 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quae totam porro deserunt saepe natus quibusdam earum culpa at distinctio!</p>
                            <div className='flex flex-col gap-4'>
                                <input placeholder='Nome completo' className='outline-none py-4 px-4 w-full' type="text" />
                                <input placeholder='Seu Telefone' className='outline-none py-4 px-4 w-full' type="text" />
                                <textarea placeholder='Mensagem' className='outline-none py-4 px-4 w-full resize-none' name="" rows={4} id=""></textarea>
                            </div>
                            <div className='flex justify-center mt-6 lg:justify-start'>
                                <a className='text-white bg-RedP uppercase font-semibold px-6 py-2' href="">Fale conosco</a>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}