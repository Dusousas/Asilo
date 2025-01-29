import React from 'react';

export default function Cardsmain() {
    return (
        <>
            <article className='flex flex-col gap-6 maxW items-center justify-center lg:flex-row'>
                <div className='border-RedP border py-10 w-full flex flex-col items-center rounded-2xl hover:bg-white lg:w-[25%]'>
                    <div>
                        <img src="Layer_4-12.png" alt="" />
                    </div>
                    <h1 className='font-bold text-xl'>Disponibilidade 24 horas</h1>
                    <p className='text-center px-12 mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, iusto.</p>
                </div>

                <div className='border-RedP border py-10 w-full  flex flex-col items-center rounded-2xl hover:bg-white lg:w-[25%]'>
                    <div>
                        <img src="Layer_4-12.png" alt="" />
                    </div>
                    <h1 className='font-bold text-xl'>Disponibilidade 24 horas</h1>
                    <p className='text-center px-12 mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, iusto.</p>
                </div>

                <div className='border-RedP border py-10 w-full  flex flex-col items-center rounded-2xl hover:bg-white lg:w-[25%]'>
                    <div>
                        <img src="Layer_4-12.png" alt="" />
                    </div>
                    <h1 className='font-bold text-xl'>Disponibilidade 24 horas</h1>
                    <p className='text-center px-12 mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, iusto.</p>
                </div>

            </article>
        </>
    );
}