import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import athletes from '../lib/athletes';
import { useDocTitle } from '../components/CustomHook';
import placeholderPortrait from '../images/athletes/athlet_portrait.jpg';
import placeholderAction from '../images/athletes/athlet_action.jpg';

const AthleteDetails = () => {
    useDocTitle('peplies consult - Sports Marketing Consultants');
    const { athleteName } = useParams();
    const athlete = athletes.find(a => `${a.firstName}-${a.lastName}` === athleteName);

    if (!athlete) {
        return <div>Athlete not found</div>;
    }

    return (
        <>
            <NavBar />
            <div className="container mx-auto p-4 mt-20">
                <h1 className="text-3xl font-bold text-center mb-8">{athlete.firstName} {athlete.lastName}</h1>
                <div className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
                    <img 
                        src={athlete.portraitImageURL || placeholderPortrait} 
                        alt={`${athlete.firstName} ${athlete.lastName}`} 
                        className="w-full md:w-1/3 object-cover" 
                    />
                    <div className="p-4 md:w-2/3 flex flex-col justify-center">
                        <h2 className="text-xl font-bold">{athlete.firstName} {athlete.lastName}</h2>
                        <p className="text-gray-700"><strong>Birthday:</strong> {athlete.birthday}</p>
                        <p className="text-gray-700"><strong>Sport Discipline:</strong> {athlete.sportDiscipline}</p>
                        <p className="text-gray-700"><strong>Club:</strong> {athlete.club}</p>
                        <p className="text-gray-700"><strong>Interests:</strong> {athlete.interests.join(', ')}</p>
                        <p className="text-gray-700"><strong>Profession:</strong> {athlete.profession}</p>
                        <p className="text-gray-700"><strong>Hobby:</strong> {athlete.hobby}</p>
                    </div>
                </div>
                <div className="card bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row mt-8">
                    <div className="p-4 md:w-2/3 flex flex-col justify-center">
                        <p className="text-gray-700"><strong>Achievements:</strong></p>
                        <ul className="list-disc list-inside text-gray-700">
                            {athlete.achievements.map((achievement, index) => (
                                <li key={index}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                    <img 
                        src={athlete.actionImageURL || placeholderAction} 
                        alt={`${athlete.firstName} ${athlete.lastName} action`} 
                        className="w-full md:w-1/3 object-cover" 
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AthleteDetails;