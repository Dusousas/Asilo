import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Whatsapp() {
    // Function to handle WhatsApp click
    const handleWhatsAppClick = () => {
        const phoneNumber = '5500000000000'; 
        const message = 'Olá, gostaria de mais informações!';
        
        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/5514998766306?text=Ol%C3%A1%2C+vim+atrav%C3%A9s+do+site+e+gostaria+de+saber+mais!`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
            <button 
                onClick={handleWhatsAppClick}
                className="fixed bottom-10 right-10 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 flex items-center justify-center"
                aria-label="Contact on WhatsApp"
            >
                <FaWhatsapp className="text-2xl" />
            </button>
        </>
    );
}