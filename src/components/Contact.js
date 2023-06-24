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
        <section>
            <h2>Contact Me</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' name='name' defaultValue={name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' defaultValue={email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea id='message' name='message' rows='5' defaultValue={message} onChange={handleChange} required />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    );
}

export default Contact;