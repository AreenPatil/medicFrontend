import { useState } from 'react';
import '../css/appointments.css';

function Appointments() {
    const [formData, setFormData] = useState({
        doctor: 'dr. D Radhika',
        date: '',
        time: '',
        name: '',
        email: ''
    });

    const [showConfirmation, setShowConfirmation] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const doctors = [
        'dr. D Radhika',
        'Dr. Jenny Mercy Augustine',
        'Dr. K Madhu',
        'Dr. K Naga jyothi',
        'Mr Mohd. azhar Kothwal',
        'Dr. Jones'
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:8080/api/appointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to book appointment');
            }

            const data = await response.json();
            setShowConfirmation(true);
        } catch (err) {
            setError(err.message);
            setShowConfirmation(false);
        } finally {
            setLoading(false);
        }
    };


    return (
 <div className="appointments-page">
            <header>
                <h1>Medical Appointment Booking</h1>
            </header>

            <main>
                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}
                <section id="appointmentForm" className={showConfirmation ? 'hidden' : ''}>
                    <h2>Book an Appointment</h2>
                    <form id="bookingForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="doctor">Select Doctor:</label>
                            <select 
                                id="doctor"
                                value={formData.doctor}
                                onChange={handleChange}
                                required
                            >
                                {doctors.map((doctor, index) => (
                                    <option key={index} value={doctor}>
                                        {doctor}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="date">Select Date:</label>
                            <input 
                                type="date"
                                id="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="time">Select Time:</label>
                            <input 
                                type="time"
                                id="time"
                                value={formData.time}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Your Name:</label>
                            <input 
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Your Email:</label>
                            <input 
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

 <button 
                        type="submit" 
                        disabled={loading}
                    >
                        {loading ? 'Booking...' : 'Book Appointment'}
                    </button>
                    </form>
                </section>

                <section id="confirmation" className={showConfirmation ? '' : 'hidden'}>
                    <h2>Appointment Confirmed!</h2>
                    <p>
                        Thank you, {formData.name}! Your appointment with {formData.doctor} on{' '}
                        {formData.date} at {formData.time} has been booked.
                    </p>
                </section>
            </main>
        </div>
    );
}

export default Appointments;