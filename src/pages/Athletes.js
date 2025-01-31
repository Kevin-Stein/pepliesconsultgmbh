import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import athletes from '../lib/athletes';
import placeholderPortrait from '../images/athletes/athlet_portrait.jpg';

const Athletes = (props) => {
    useDocTitle('peplies consult - Sports Marketing Consultants');
    const navigate = useNavigate();

    const handleCardClick = (athlete) => {
        navigate(`/athletes/${athlete.firstName}-${athlete.lastName}`);
    };

    return (
        <>
            <NavBar />
            <div className="container mx-auto p-4 mt-20">
                <h1 className="text-3xl font-bold text-center mb-8">Unsere Athleten</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {athletes.map((athlete, index) => (
                        <div 
                            key={index} 
                            className="card bg-white shadow-md rounded-lg overflow-hidden cursor-pointer" 
                            onClick={() => handleCardClick(athlete)}
                        >
                            <img 
                                src={athlete.portraitImageURL || placeholderPortrait} 
                                alt={`${athlete.firstName} ${athlete.lastName}`} 
                                className="w-full object-cover" 
                            />
                            <div className="p-4 mt-3">
                                <h2 className="text-xl font-bold">{athlete.firstName} {athlete.lastName}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Athletes;