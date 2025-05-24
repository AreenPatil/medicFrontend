import { useState } from 'react';
import '../css/contacts.css';

function Contacts() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNo: '',
        question: '',
        response: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="contacts-page">
            <header>
                <h1>Contact Us</h1>
                <p>Working Hours: Monday-Friday, 9:00 AM - 5:00 PM</p>
            </header>

            <section id="question-section">
                <h2>Ask a Question</h2>
                <form id="question-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input 
                            type="text" 
                            id="firstName" 
                            name="firstName" 
                            value={formData.firstName}
                            onChange={handleChange}
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input 
                            type="text" 
                            id="lastName" 
                            name="lastName" 
                            value={formData.lastName}
                            onChange={handleChange}
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="contactNo">Contact Number:</label>
                        <input 
                            type="tel" 
                            id="contactNo" 
                            name="contactNo" 
                            value={formData.contactNo}
                            onChange={handleChange}
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="question">Your Question:</label>
                        <textarea 
                            id="question" 
                            name="question" 
                            value={formData.question}
                            onChange={handleChange}
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="response">Response:</label>
                        <textarea 
                            id="response" 
                            name="response" 
                            value={formData.response}
                            readOnly 
                        />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </section>

            <section id="social-section">
                <h2>Connect with Us</h2>
                <ul>
                    <li><a href="https://www.facebook.com/bitshyderabad" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://twitter.com/bitshyd" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://www.instagram.com/bitshyderabad/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </section>
        </div>
    );
}

export default Contacts;