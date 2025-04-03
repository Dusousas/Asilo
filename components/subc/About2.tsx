import React from 'react';

export default function About2() {
  return (
    <>
      <section className=''>
        <div className='flex flex-col items-center lg:flex-row '>

          <article className='bg-BlueP py-32 px-2 w-full lg:rounded-r-full lg:pl-[5%] lg:w-[95%] lg:px-0'>

            <p className='text-white font-semibold text-center text-xl lg:text-left'>Por que nos escolher?</p>
            <p className='font-bold text-white text-center text-3xl mt-4 lg:max-w-[80%] lg:text-left'>Acolhimento, conforto e cuidado como se fosse família.</p>
            <p className='text-white mt-4 text-center lg:text-left lg:max-w-[80%]'>Oferecemos um ambiente acolhedor, seguro e humanizado para que cada residente se sinta em casa. Nossa equipe especializada garante assistência integral, promovendo qualidade de vida, bem-estar e momentos especiais todos os dias.</p>

            <div className='bg-white flex gap-4 items-center px-6 py-4 rounded-xl mt-6 lg:max-w-[50%] '>
              <img className='w-[10%]' src="Group-12.png" alt="" />
              <div>
                <h2 className='text-2xl font-bold'>Cuidados 24/7 por Profissionais</h2>
                <p>Equipe altamente qualificada disponível 24 horas para garantir o bem-estar e a segurança de cada</p>
              </div>
            </div>

            <div className='bg-white flex gap-4 items-center px-6 py-4 rounded-xl mt-6 lg:max-w-[50%] '>
              <img className='w-[10%]' src="Group-12.png" alt="" />
              <div>
                <h2 className='text-2xl font-bold'>Acompanhamento Médico Personalizado</h2>
                <p>Atendimento especializado para monitoramento contínuo da saúde, prevenindo e tratando</p>
              </div>
            </div>

            <div className='bg-white flex gap-4 items-center px-6 py-4 rounded-xl mt-6 lg:max-w-[50%] '>
              <img className='w-[10%]' src="Group-12.png" alt="" />
              <div>
                <h2 className='text-2xl font-bold'>Atenção e Carinho no Dia a Dia</h2>
                <p>Respeito, paciência e dedicação para que cada idoso se sinta acolhido e cuidado como em família.</p>
              </div>
            </div>
          </article>

          <article className='lg:w-[40%]'>
            <img className='rounded-t-full rounded-l-full hidden relative left-[-100px] lg:block' src="wd1.webp" alt="" />
          </article>


        </div>
      </section>
    </>
  );
}