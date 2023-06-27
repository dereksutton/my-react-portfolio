import React, { useState } from 'react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const { name, email, message } = formState;

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    }

    return (
        <section className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
            <div className="p-8 bg-white shadow-lg rounded-lg max-w-prose">
                <h2 className="text-2x1 font-bold mb-8 text-center">Contact Me</h2>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor='name' className="block mb-2">Name:</label>
                        <input type='text' id='name' name='name' defaultValue={name} onChange={handleChange} required 
                               className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor='email' className="block mb-2">Email:</label>
                        <input type='email' id='email' name='email' defaultValue={email} onChange={handleChange} required 
                               className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor='message' className="block mb-2">Message:</label>
                        <textarea id='message' name='message' rows='5' defaultValue={message} onChange={handleChange} required 
                                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <button type='submit' className="w-full px-3 py-4 text-white bg-blue-500 hover:bg-blue-600 rounded-md">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;