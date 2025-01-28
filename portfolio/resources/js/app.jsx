import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

export function App() {
    const [cvInfo, setCvInfo] = useState(null);
    const [skills, setSkills] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [educations, setEducations] = useState([]);

    useEffect(() => {
        console.log('Fetching CV info...');
        axios.get('/cv-info')
            .then(response => {
                console.log('CV info fetched successfully:', response.data);
                setCvInfo(response.data);
            })
            .catch(error => {
                console.error('Error fetching CV info:', error);
            });
    }, []);

    useEffect(() => {
        console.log('Fetching skills...');
        axios.get('/skills')
            .then(response => {
                console.log('Skills fetched successfully:', response.data);
                setSkills(response.data);
            })
            .catch(error => {
                console.error('Error fetching skills:', error);
            });
    }, []);

    useEffect(() => {
        console.log('Fetching languages...');
        axios.get('/languages')
            .then(response => {
                console.log('Languages fetched successfully:', response.data);
                setLanguages(response.data);
            })
            .catch(error => {
                console.error('Error fetching languages:', error);
            });
    }, []);

    useEffect(() => {
        console.log('Fetching experiences...');
        axios.get('/experiences')
            .then(response => {
                console.log('Experiences fetched successfully:', response.data);
                setExperiences(response.data);
            })
            .catch(error => {
                console.error('Error fetching experiences:', error);
            });
    }, []);

    useEffect(() => {
        console.log('Fetching educations...');
        axios.get('/education')
            .then(response => {
                console.log('Educations fetched successfully:', response.data);
                setEducations(response.data);
            })
            .catch(error => {
                console.error('Error fetching educations:', error);
            });
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Portfolio</h1>
                {cvInfo ? (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-700">Información Personal</h2>
                            <p><strong className="font-semibold text-gray-700">Nombre:</strong> <span className="text-gray-600">{cvInfo.name}</span></p>
                            <p><strong className="font-semibold text-gray-700">Profesión:</strong> <span className="text-gray-600">{cvInfo.profession}</span></p>
                            <p><strong className="font-semibold text-gray-700">Email:</strong> <span className="text-gray-600">{cvInfo.email}</span></p>
                            <p><strong className="font-semibold text-gray-700">Teléfono:</strong> <span className="text-gray-600">{cvInfo.phone}</span></p>
                            <p><strong className="font-semibold text-gray-700">Ubicación:</strong> <span className="text-gray-600">{cvInfo.location}</span></p>
                            <p><strong className="font-semibold text-gray-700">LinkedIn:</strong> <a href={`https://${cvInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Perfil de LinkedIn</a></p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-700">Experiencia</h2>
                            {experiences.length > 0 ? (
                                <div className="space-y-4">
                                    {experiences.map((experience, index) => (
                                        <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                                            <h3 className="text-xl font-semibold">{experience.role} en {experience.company}</h3>
                                            <p>{experience.description}</p>
                                            <small>{experience.start_date} - {experience.end_date}</small>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>No hay experiencias registradas.</p>
                            )}
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-700">Educación</h2>
                            {educations.length > 0 ? (
                                <div className="space-y-4">
                                    {educations.map((education, index) => (
                                        <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                                            <h3 className="text-xl font-semibold">{education.degree} en {education.institution}</h3>
                                            <small>{education.start_year} - {education.end_year}</small>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>No hay educación registrada.</p>
                            )}
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-700">Habilidades</h2>
                            {skills.length > 0 ? (
                                <ul className="list-disc pl-5">
                                    {skills.map((skill, index) => (
                                        <li key={index} className="text-gray-700">{skill.skill}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-700">No hay habilidades registradas.</p>
                            )}
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-700">Idiomas</h2>
                            {languages.length > 0 ? (
                                <ul className="list-disc pl-5">
                                    {languages.map((language, index) => (
                                        <li key={index} className="text-gray-600">{language.language} - {language.level}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No hay idiomas registrados.</p>
                            )}
                        </section>
                    </div>
                ) : (
                    <p className="text-center text-gray-500">Cargando...</p>
                )}
            </div>
        </div>
    );
}

// Ensure the correct root element is used for rendering
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
