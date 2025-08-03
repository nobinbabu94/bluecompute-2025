'use client'
import React, { useState } from "react";
// import { Bounce, toast } from "react-toastify";

const ContactFrom = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [category, setCategory] = useState('')
    const [message, setMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [notification, setNotification] = useState(false)

    async function onSubmit(event) {
        event.preventDefault()
        setIsLoading(true)
        setError(null) // Clear previous errors when a new request starts
        const formData = {
            name: name,
            email: email,
            mobile: mobile,
            category: category,
            message: message
        }
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(formData),
            })
            if (response?.status === 200) {
                const data = await response.json()
                setNotification(true)
                setIsLoading(false)
                setSuccessMessage(data)
                // toast.success('Message Sent Successfully, We will back to you as soon as possible', {
                //     position: "top-right",
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: false,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: "light",
                //     transition: Bounce,
                // });
                // throw new Error('Failed to submit the data. Please try again.')
            }
            // Handle response if necessary
            // ...
        } catch (error) {
            // Capture the error message to display to the user
            setError(error.message)
            console.error(error)
        } finally {
            setIsLoading(false)
            setName('')
            setEmail('')
            setMobile('')
            setMessage('')
            setTimeout(() => {
                setNotification(false)
            }, 5000);
        }
    }
    return (
        <>
            <form onSubmit={onSubmit} className="w-[80%] px-6 py-8 md:py-16  flex flex-col items-center bg-gray-200 rounded-xl">
                <h3 className="text-2xl text-gray-800  font-bold">Fill The Contact Form</h3>
                <h4 className="text-base text-gray-500">Feel free to contact with us, we don't spam your email</h4>
                <div className="w-16 h-1  mb-4"></div>

                <div className="w-full  grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 place-content-center">
                    <input className="px-3 py-2 text-gray-500 border border-gray-200 focus:outline-1 outline-gray-500 rounded-md" placeholder="Name"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input className="px-3 py-2 text-gray-500 border border-gray-200 focus:outline-1 outline-gray-500 rounded-md" placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input className="px-3 py-2 text-gray-500 border border-gray-200 focus:outline-1 outline-gray-500 rounded-md" placeholder="Phone Number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                    />
                    <input className="px-3 py-2 text-gray-500 border border-gray-200 focus:outline-1 outline-gray-500 rounded-md" placeholder="Company Name"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                    />

                    {/* <input className="px-3 py-2 border rounded-md"
                        placeholder="Subject" /> */}

                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-1 ">
                    <textarea className="px-3 py-2 text-gray-500 border border-gray-200 focus:outline-1 outline-gray-500 rounded-md w-full h-32 resize-y"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="How can we help you?" />
                </div>
                <div className="py-4">
                    <button type="submit"
                        disabled={isLoading}
                        className="px-6 py-2 text-white bg-black/50 rounded-md ">
                        {isLoading ? 'Loading...' : 'Submit'}
                    </button>
                </div>
            </form>
        </>
    )
};

export default ContactFrom;
