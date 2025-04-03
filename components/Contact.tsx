import React, { useState } from 'react';

export default function Contact() {
    // State to manage form fields
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    // State to manage submission status
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handle input changes with phone number formatting
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;

        // For phone, only allow numeric input
        if (name === 'phone') {
            // Remove all non-numeric characters
            const numbersOnly = value.replace(/\D/g, '');
            setFormData(prevState => ({
                ...prevState,
                [name]: numbersOnly
            }));
        } else {
            // For other fields, use input as-is
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    // Handle form submission
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            // Submit to GetForm
            const response = await fetch("https://getform.io/f/allywmma", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData)
            });

            if (response.ok) {
                // Clear form fields
                setFormData({
                    name: '',
                    phone: '',
                    message: ''
                });

                // Show submission success message
                setIsSubmitted(true);

                // Hide success message after 3 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 3000);
            } else {
                // Handle error (optional)
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            <section id='contact' className='pb-20'>
                <div className='flex justify-end'>
                    <div className='bg-BlueP w-full py-32 flex justify-center lg:w-[80%] lg:rounded-l-full'>
                        <form
                            onSubmit={handleSubmit}
                            className='py-10 px-[2%] lg:w-[60%] lg:px-20'
                        >
                            <span className='text-white font-semibold text-[24px]'>Fale Conosco</span>
                            <h1 className='text-white font-semibold text-[35px]'>Tire suas dúvidas</h1>
                            <p className='mb-6 text-white'>Estamos aqui para cuidar de quem você ama. Preencha o formulário abaixo e entre em contato conosco para mais informações.</p>

                            <div className='flex flex-col gap-4'>
                                <input
                                    name='name'
                                    placeholder='Nome completo'
                                    className='outline-none py-4 px-4 w-full'
                                    type='text'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    name='phone'
                                    placeholder='Seu Telefone'
                                    className='outline-none py-4 px-4 w-full'
                                    type='text'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                                <textarea
                                    name='message'
                                    placeholder='Mensagem'
                                    className='outline-none py-4 px-4 w-full resize-none'
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <div className='flex justify-center mt-6 lg:justify-start'>
                                <button
                                    type='submit'
                                    className='text-white bg-RedP uppercase font-semibold px-6 py-2'
                                >
                                    Fale conosco
                                </button>
                            </div>
                            {isSubmitted && (
                                <div className='bg-green-500 text-white p-4 mb-4 rounded'>
                                    Mensagem enviada com sucesso!
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}