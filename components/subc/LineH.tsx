import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import { LuClock12 } from 'react-icons/lu';

export default function LineH() {
    return (
        <>
            <section className='bg-BlueP py-1'>
                <div className='maxW text-gray-400 flex flex-col justify-between lg:flex-row'>
                    <div className='flex items-center flex-col lg:gap-8 lg:flex-row'>
                        <p className='flex items-center gap-1 text-[12px] font-semibold'><AiOutlineMail className='text-OrangeP' />missonocasaderepouso@outlook.com</p>
                        <p className='flex items-center gap-1 text-[12px] font-semibold'><LuClock12 className='text-OrangeP' />Das 08h às 18h</p>
                    </div>

                    <div className='flex gap-2 items-center justify-center mt-4 lg:mt-0'>
                        <a target='_blank' href='https://www.instagram.com/casaderepousomissono/' className='flex cursor-pointer items-center gap-1 text-[16px] font-semibold'><FaInstagramSquare /></a>
                        <a target='_blank' href='https://www.facebook.com/profile.php?id=100087588044012' className='flex cursor-pointer items-center gap-1 text-[16px] font-semibold'><FaFacebookSquare /></a>
                        <a target='_blank' href='https://wa.me/5514998766306?text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+e+gostaria+de+saber+mais!' className='flex cursor-pointer items-center gap-1 text-[16px] font-semibold text-[#25D366]'><FaSquareWhatsapp /></a>
                    </div>

                </div>
            </section>
        </>
        
    );
}