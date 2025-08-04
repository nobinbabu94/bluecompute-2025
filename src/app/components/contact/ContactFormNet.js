'use client'
import { useState } from 'react'

const encode = (data) => {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
};

const ContactFormNet = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encode({
                    'form-name': 'contact',
                    ...formData
                })
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    message: ''
                });
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="w-[80%] px-6 py-8 md:py-16 flex flex-col items-center bg-green-100 rounded-xl">
                <h3 className="text-2xl text-green-800 font-bold">Thank You!</h3>
                <p className="text-green-600 text-center mt-4">
                    Your message has been sent successfully. We'll get back to you soon!
                </p>
                <button 
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2 text-white bg-green-600 rounded-md mt-4 hover:bg-green-700"
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <>
            {/* Hidden form for Netlify to detect */}
            <form name="contact" netlify netlify-honeypot="bot-field" data-netlify-recaptcha="true" hidden>
                <input type="text" name="name" />
                <input type="email" name="email" />
                <input type="tel" name="phone" />
                <input type="text" name="company" />
                <textarea name="message"></textarea>
                <div data-netlify-recaptcha="true"></div>
            </form>

            {/* Actual form */}
            <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                data-netlify-recaptcha="true"
                onSubmit={handleSubmit}
                className="w-[80%] px-6 py-8 md:py-16 flex flex-col items-center bg-gray-200 rounded-xl"
            >
                <h3 className="text-2xl text-gray-800 font-bold">Fill The Contact Form</h3>
                <h4 className="text-base text-gray-500">Feel free to contact with us, we don't spam your email</h4>
                <div className="w-16 h-1 mb-4"></div>

                {error && (
                    <div className="w-full mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-md">
                        {error}
                    </div>
                )}

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 place-content-center">
                    <input type="hidden" name="form-name" value="contact" />
                    
                    <input 
                        className="px-3 py-2 text-gray-500 border border-gray-200 focus:outline-1 outline-gray-500 rounded-md"
                        placeholder="Name"
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    
                    <input 
                        className="px-3 py-2 text-gray-500 border border-gray-200 focus:outline-1 outline-gray-500 rounded-md"
                        placeholder="Email"
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    
                    <input 
                        className="px-3 py-2 text-gray-500 border border-gray-200 focus:outline-1 outline-gray-500 rounded-md"
                        placeholder="Phone Number"
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    
                    <input 
                        className="px-3 py-2 text-gray-500 border border-gray-200 focus:outline-1 outline-gray-500 rounded-md"
                        placeholder="Company Name"
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                    />
                </div>

                <div className="w-full grid grid-cols-1 sm:grid-cols-1">
                    <textarea 
                        className="px-3 py-2 text-gray-500 border border-gray-200 focus:outline-1 outline-gray-500 rounded-md w-full h-32 resize-y"
                        name="message"
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    
                    {/* reCAPTCHA */}
                    <div data-netlify-recaptcha="true" className="mt-4"></div>
                </div>

                <div className="py-4">
                    <button 
                        type="submit"
                        disabled={isLoading}
                        className="px-6 py-2 text-white bg-black/50 rounded-md hover:bg-black/70 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Sending...' : 'Submit'}
                    </button>
                </div>
            </form>
        </>
    );
};

export default ContactFormNet;