

const encode = (data) => {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
};

const ContactFormNet = () => {
   

    return (
        <form name="contact" data-netlify="true"
            data-netlify-recaptcha="true" method="POST"
            className="w-[80%] px-6 py-8 md:py-16  flex flex-col items-center bg-gray-200 rounded-xl">
            <h3 className="text-2xl text-gray-800  font-bold">Fill The Contact Form</h3>
            <h4 className="text-base text-gray-500">Feel free to contact with us, we don't spam your email</h4>
            <div className="w-16 h-1  mb-4"></div>

            <div className="w-full  grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 place-content-center">
                <input type="hidden" name="form-name" value="contact" />
                <input className="px-3 py-2 text-gray-500 border border-gray-200 focus:outline-1 outline-gray-500 rounded-md"
                    placeholder="Name"
                    type="text" name="name" 
                />
                <input className="px-3 py-2 text-gray-500 border border-gray-200 focus:outline-1 outline-gray-500 rounded-md"
                    placeholder="Email"
                    type="email" name="email"
                />
                <input className="px-3 py-2 text-gray-500 border border-gray-200 focus:outline-1 outline-gray-500 rounded-md"
                    placeholder="Phone Number"
                    type="phone" name="phone"
                />
                <input className="px-3 py-2 text-gray-500 border border-gray-200 focus:outline-1 outline-gray-500 rounded-md"
                    placeholder="Company Name"
                    type="company" name="company"
                />

                {/* <input className="px-3 py-2 border rounded-md"
                        placeholder="Subject" /> */}

            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-1 ">
                <textarea className="px-3 py-2 text-gray-500 border border-gray-200 focus:outline-1 outline-gray-500 rounded-md w-full h-32 resize-y"
                    type="message" name="message"
                    placeholder="How can we help you?" />
                <div data-netlify-recaptcha="true"></div>
            </div>

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
