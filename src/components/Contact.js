import React from 'react';

const Contact = () => {
    return (
        <section>
            <h2>Contact Me</h2>
            <form>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name' required />

                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email' required />

                <label htmlFor='message'>Message:</label>
                <textarea id='message' name='message' required />

                <button type='submit'>Submit</button>
            </form>
        </section>
    );
}

export default Contact;