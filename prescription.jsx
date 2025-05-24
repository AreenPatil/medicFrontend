import { useState } from 'react';
import '../css/prescription.css';

function Prescription() {
    const [medications, setMedications] = useState([
        { medicine: '', time: '' },
        { medicine: '', time: '' }
    ]);

    const handleChange = (index, field, value) => {
        const updatedMedications = medications.map((medication, i) => {
            if (i === index) {
                return { ...medication, [field]: value };
            }
            return medication;
        });
        setMedications(updatedMedications);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your reminder setting logic here
        console.log('Reminders set:', medications);
    };

    return (
        <div className="prescription-container">
            <header>
                <h1>Prescription Reminder</h1>
            </header>

            <section id="medicine-reminder-section">
                <h2>Helping you be consistent</h2>
                <form id="medicine-reminder-form" onSubmit={handleSubmit}>
                    <table>
                        <thead>
                            <tr>
                                <th>Medicine</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medications.map((medication, index) => (
                                <tr key={index}>
                                    <td>
                                        <input
                                            type="text"
                                            value={medication.medicine}
                                            onChange={(e) => handleChange(index, 'medicine', e.target.value)}
                                            required
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="time"
                                            value={medication.time}
                                            onChange={(e) => handleChange(index, 'time', e.target.value)}
                                            required
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="submit">Set Reminders</button>
                </form>
            </section>
        </div>
    );
}

export default Prescription;