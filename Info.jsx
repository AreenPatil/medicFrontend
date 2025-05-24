import { useState } from 'react';
import '../css/info.css';

function Info() {
    const [activeService, setActiveService] = useState(null);
    const [serviceDetails, setServiceDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const services = [
        {
            id: 'general-checkup',
            title: 'General Check-up',
            description: 'Our website offers a comprehensive check-up to ensure a seamless online experience for medical clinic users.',
            className: 'general-checkup'
        },
        {
            id: 'vaccinations',
            title: 'Vaccinations',
            description: 'Our wide selection of vaccines and experienced medical staff provide quality protection against illness and disease.',
            className: 'vaccinations'
        },
        {
            id: 'obstetrics',
            title: 'OBSTETRICS & GYNAECOLOGY',
            description: '- Dr. E. R. CHANDRAKALA, MD',
            className: 'obstetrics-gynaecology'
        },
        {
            id: 'paediatrician',
            title: 'PAEDIATRICIAN',
            description: '- Dr. TEJAS DEEPAK, MD',
            className: 'paediatrician'
        },
        {
            id: 'dentist',
            title: 'DENTIST',
            description: '- Dr. SATHYENDER KUMAR, MD & Dr. KRISHNA JOTHI, MD',
            className: 'dentist'
        },
        {
            id: 'cardiologist',
            title: 'CARDIOLOGIST',
            description: '- Dr. SAMBASHIVA RAO, MD',
            className: 'cardiologist'
        }
    ];

    const fetchServiceDetails = async (serviceId) => {
        setLoading(true); // Start loading
        try {
            const response = await fetch(`http://localhost:8080/api/services/${serviceId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch service details');
            }
            const data = await response.json();
            setServiceDetails(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false); // End loading regardless of success or failure
        }
    };

    const handleServiceClick = (serviceId) => {
        setActiveService(serviceId);
        fetchServiceDetails(serviceId);
    };

    return (
        <div className="container">
            <h1>Our Services</h1>
            <div className="services-section">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={`service-item ${service.className} ${
                            activeService === service.id ? 'active' : ''
                        }`}
                        onClick={() => handleServiceClick(service.id)}
                    >
                        <div className="service-title">{service.title}</div>
                        <div className="service-description">
                            {loading && activeService === service.id ? (
                                'Loading...'
                            ) : (
                                service.description
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Info;


// import { useState } from 'react';
// import '../css/Info.css';

// function Info() {
//     const [activeService, setActiveService] = useState(null);

//     const services = [
//         {
//             id: 'general-checkup',
//             title: 'General Check-up',
//             description: 'Our website offers a comprehensive check-up to ensure a seamless online experience for medical clinic users.',
//             className: 'general-checkup'
//         },
//         {
//             id: 'vaccinations',
//             title: 'Vaccinations',
//             description: 'Our wide selection of vaccines and experienced medical staff provide quality protection against illness and disease.',
//             className: 'vaccinations'
//         },
//         {
//             id: 'obstetrics',
//             title: 'OBSTETRICS & GYNAECOLOGY',
//             description: '- Dr. E. R. CHANDRAKALA, MD',
//             className: 'obstetrics-gynaecology'
//         },
//         {
//             id: 'paediatrician',
//             title: 'PAEDIATRICIAN',
//             description: '- Dr. TEJAS DEEPAK, MD',
//             className: 'paediatrician'
//         },
//         {
//             id: 'dentist',
//             title: 'DENTIST',
//             description: '- Dr. SATHYENDER KUMAR, MD & Dr. KRISHNA JOTHI, MD',
//             className: 'dentist'
//         },
//         {
//             id: 'cardiologist',
//             title: 'CARDIOLOGIST',
//             description: '- Dr. SAMBASHIVA RAO, MD',
//             className: 'cardiologist'
//         }
//     ];

//     const handleServiceClick = (serviceId) => {
//         setActiveService(serviceId);
//     };

//     return (
//         <div className="container">
//             <h1>Our Services</h1>
//             <div className="services-section">
//                 {services.map((service) => (
//                     <div
//                         key={service.id}
//                         className={`service-item ${service.className} ${
//                             activeService === service.id ? 'active' : ''
//                         }`}
//                         onClick={() => handleServiceClick(service.id)}
//                     >
//                         {/* <div className="service-title">{service.title}</div> */}
//                         <div className="service-description">{service.description}</div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Info;