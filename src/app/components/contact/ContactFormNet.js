'use client'
import { sanitizeCompany, sanitizeEmail, sanitizeMessage, sanitizeName, sanitizePhone } from '@/utils/utilities';
import React, { useState } from 'react';

const encode = (data) => {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
};

const ContactFormNet = ({ color }) => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleChange = (e) => {
        console.log(e.target.value, 'eeeeeee');

        const { name, value } = e.target;

        let sanitizedValue = value;

        if (name === 'name') {
            sanitizedValue = sanitizeName(value);
        } else if (name === 'phone') {
            sanitizedValue = sanitizePhone(value);
        } else if (name === 'email') {
            sanitizedValue = sanitizeEmail(value);
        } else if (name === 'company') {
            sanitizedValue = sanitizeCompany(value);
        }
        else if (name === 'message') {
            sanitizedValue = sanitizeMessage(value);
        }
        console.log(sanitizedValue, 'sanitizedValue');

        setFormState({
            ...formState,
            [name]: sanitizedValue
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
       <form 
  onSubmit={handleSubmit}
  name="contact"
  method="POST"
  netlify-honeypot="bot-field"
  data-netlify="true"
  data-netlify-recaptcha="true"
  className="md:w-[80%] w-full px-6 py-8 md:py-16 flex flex-col items-center border-grgay-500 rounded-xl"
>
  <h3 className={`text-2xl ${color} font-bold`}>Fill The Contact Form</h3>
  <h4 className="text-base text-gray-500 md:text-start text-center">
    Feel free to contact with us, we don't spam your email
  </h4>
  <div className="w-16 h-1 mb-4"></div>

  <input type="hidden" name="form-name" value="contact" />

  <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 place-content-center">
    <input className="px-3 py-2 text-gray-700 border border-gray-300 focus:outline-1 outline-gray-700 rounded-md"
      placeholder="Name"
      type="text" 
      name="name" 
      value={name} 
      onChange={handleChange}
    />
    <input className="px-3 py-2 text-gray-700 border border-gray-300 focus:outline-1 outline-gray-700 rounded-md"
      placeholder="Email"
      type="email" 
      name="email" 
      value={email} 
      onChange={handleChange}
    />
    <input className="px-3 py-2 text-gray-700 border border-gray-300 focus:outline-1 outline-gray-700 rounded-md"
      placeholder="Phone Number"
      type="tel" 
      name="phone" 
      value={phone} 
      onChange={handleChange}
    />
    <input className="px-3 py-2 text-gray-700 border border-gray-300 focus:outline-1 outline-gray-700 rounded-md"
      placeholder="Company Name"
      type="text" 
      name="company" 
      value={company} 
      onChange={handleChange}
    />
  </div>

  <div className="w-full">
    <textarea className="px-3 py-2 text-gray-700 border border-gray-300 focus:outline-1 outline-gray-700 rounded-md w-full h-32 resize-y"
      name="message" 
      value={message} 
      onChange={handleChange}
      placeholder="How can we help you?" 
    />
  </div>

  {/* reCAPTCHA will render here (only in deployed site) */}
  <div className="my-4 w-full flex justify-center">
    <div data-netlify-recaptcha="true"></div>
  </div>

  <div className="py-4">
    <button 
      type="submit"
      disabled={!message && !company && !phone && !email && !name}
      className="px-6 py-2 text-white bg-gray-800 border rounded-md disabled:opacity-30"
    >
      Submit
    </button>
  </div>
</form>


    );
};

export default ContactFormNet;
