import Image from 'next/image';

export default function Cardsmain() {
    return (
        <>
            <article className='flex flex-col gap-6 maxW items-center justify-center lg:flex-row'>
                <div className='border-RedP border py-10 w-full flex flex-col items-center rounded-2xl hover:bg-white lg:w-[25%]'>
                    <div>
                        <Image 
                            src="/Layer_4-14.png" 
                            alt="Cuidado 24 horas" 
                            width={30} 
                            height={200} 
                            priority
                        />
                    </div>
                    <h1 className='font-bold text-xl'>Cuidado 24 horas</h1>
                    <p className='text-center px-12 mt-3'>Garantimos assistência contínua com profissionais dedicados, proporcionando conforto e segurança para nossos residentes.</p>
                </div>

                <div className='border-RedP border py-10 w-full flex flex-col items-center rounded-2xl hover:bg-white lg:w-[25%]'>
                    <div>
                        <Image 
                            src="/Layer_4-12.png" 
                            alt="Ambiente Acolhedor" 
                            width={30} 
                            height={200} 
                            priority
                        />
                    </div>
                    <h1 className='font-bold text-xl'>Ambiente Acolhedor</h1>
                    <p className='text-center px-12 mt-3'>Criamos um espaço seguro e confortável, onde cada residente se sente em casa, com atendimento personalizado.</p>
                </div>

                <div className='border-RedP border py-10 w-full flex flex-col items-center rounded-2xl hover:bg-white lg:w-[25%]'>
                    <div>
                        <Image 
                            src="/Layer_4-13.png" 
                            alt="Acompanhamento Médico" 
                            width={30} 
                            height={200} 
                            priority
                        />
                    </div>
                    <h1 className='font-bold text-xl'>Acompanhamento Médico</h1>
                    <p className='text-center px-12 mt-3'>Monitoramento contínuo da saúde e bem-estar, garantindo qualidade de vida e atendimento rápido sempre que necessário.</p>
                </div>
            </article>
        </>
    );
}
