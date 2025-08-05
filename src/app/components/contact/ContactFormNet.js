'use client'
import React, { useState } from 'react';

const encode = (data) => {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
};

const ContactFormNet = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...formState })
        })
            .then(() => alert('Success!'))
            .catch((error) => alert(error));
    };

    const { name, email, phone, company, message } = formState;

    return (
        <form onSubmit={handleSubmit} name="contact" data-netlify="true"
            className="md:w-[80%] w-full px-6 py-8 md:py-16  flex flex-col items-center bg-gray-200 rounded-xl">
            <h3 className="text-2xl text-gray-800  font-bold">Fill The Contact Form</h3>
            <h4 className="text-base text-gray-500 md:text-start text-center">
                Feel free to contact with us, we don't spam your email</h4>
            <div className="w-16 h-1  mb-4"></div>
            <input type="hidden" name="form-name" value="contact" />
            <div className="w-full  grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 place-content-center">

                <input className="px-3 py-2 text-gray-500 border border-gray-300 focus:outline-1 outline-gray-500 rounded-md"
                    placeholder="Name"
                    type="text" name="name" value={name} onChange={handleChange}
                />
                <input className="px-3 py-2 text-gray-500 border border-gray-300 focus:outline-1 outline-gray-500 rounded-md"
                    placeholder="Email"
                    type="email" name="email" value={email} onChange={handleChange}
                />
                <input className="px-3 py-2 text-gray-500 border border-gray-300 focus:outline-1 outline-gray-500 rounded-md"
                    placeholder="Phone Number"
                    type="phone" name="phone" value={phone} onChange={handleChange}
                />
                <input className="px-3 py-2 text-gray-500 border border-gray-300 focus:outline-1 outline-gray-500 rounded-md"
                    placeholder="Company Name"
                    type="company" name="company" value={company} onChange={handleChange}
                />

                {/* <input className="px-3 py-2 border rounded-md"
                        placeholder="Subject" /> */}

            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-1 ">
                <textarea className="px-3 py-2 text-gray-500 border border-gray-300 focus:outline-1 outline-gray-500 rounded-md w-full h-32 resize-y"
                    type="message" name="message" value={message} onChange={handleChange}
                    placeholder="How can we help you?" />

            </div>
            <div data-netlify-recaptcha="true" className='w-full h-10'></div>
            <div className="py-4">
                <button type="submit"
                    // disabled={isLoading}
                    className="px-6 py-2 text-white bg-black/50 rounded-md ">
                    {/* {isLoading ? 'Loading...' : 'Submit'} */}Submit
                </button>
            </div>
        </form>

    );
};

export default ContactFormNet;
