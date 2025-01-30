import React from 'react';

export default function About2() {
  return (
    <>
      <section className=''>
        <div className='flex flex-col items-center lg:flex-row '>

          <article className='bg-BlueP py-32 px-2 w-full lg:rounded-r-full lg:pl-[5%] lg:w-[85%] lg:px-0'>

            <p className='text-white font-semibold text-center text-xl lg:text-left'>Por que nos escolher?</p>
            <p className='font-bold text-white text-center text-3xl mt-4 lg:max-w-[80%] lg:text-left'>Acolhimento, conforto e cuidado como se fosse família.</p>
            <p className='text-white mt-4 text-center lg:text-left lg:max-w-[80%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos nihil deserunt vel labore accusantium eligendi facilis obcaecati dolore porro expedita, possimus ipsam, adipisci, nisi voluptatibus at aperiam mollitia? Nobis, quibusdam.</p>

            <div className='bg-white flex gap-4 items-center px-6 py-4 rounded-xl mt-6 lg:max-w-[50%] '>
              <img className='w-[10%]' src="Group-12.png" alt="" />
              <div>
                <h2 className='text-2xl font-bold'>Enfermeiros de Excelência</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, totam.</p>
              </div>
            </div>

            <div className='bg-white flex gap-4 items-center px-6 py-4 rounded-xl mt-6 lg:max-w-[50%] '>
              <img className='w-[10%]' src="Group-12.png" alt="" />
              <div>
                <h2 className='text-2xl font-bold'>Enfermeiros de Excelência</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, totam.</p>
              </div>
            </div>

            <div className='bg-white flex gap-4 items-center px-6 py-4 rounded-xl mt-6 lg:max-w-[50%] '>
              <img className='w-[10%]' src="Group-12.png" alt="" />
              <div>
                <h2 className='text-2xl font-bold'>Enfermeiros de Excelência</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, totam.</p>
              </div>
            </div>


          </article>

          <article className=''>
            <img className='rounded-t-full rounded-l-full hidden relative left-[-100px] lg:block' src="wd1.jpg" alt="" />

          </article>




        </div>
      </section>
    </>
  );
}