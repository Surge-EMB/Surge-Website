import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Typed from 'react-typed';

import Footer from './Footer.jsx';

const Sponsors = () => {
    const location = useLocation();

    useEffect(() => {
        // Check if the location has an anchor (e.g., /about#mailing)
        if (location.hash) {
        const targetElement = document.getElementById(location.hash.substring(1));
        if (targetElement) {
            // Scroll to the target element with smooth behavior
            targetElement.scrollIntoView({ behavior: 'smooth', block: "end"});
        }
        }
    }, [location]);
    
    return (
        <div className="bg-slate-100 min-h-screen">
            {/* Main Content */}
            <main className="container mx-auto p-10">
                {/* About Us */}
                <div className="flex flex-col mt-20 mb-4 p-4 md:p-8">
                    <h3 className="text-center font-light mb-4">SPONSORS</h3>
                    <div className="md:px-10">
                            <h1 className="md:text-center font-bold md:text-6xl text-4xl py-2">Support the energy paradigm shift.</h1>
                            <p className="text-left md:text-center text-2xl font-light mt-4 lg:px-20">
                                We are on the forefront of a radical upheaval of the energy infrastructure and technology. Our team at Surge could not do it without the
                                help of Sponsors.
                            </p>
                            <div className="flex justify-center my-5">
                                <div className="h-fit w-fit rounded-full bg-gradient-to-r from-blue-700 via-purple-700 to-fuchsia-700 hover:from-blue-400 hover:via-purple-400 hover:to-fuchsia-400 p-1">
                                    <div className="bg-slate-100 rounded-full p-2">
                                        <a href="/sponsors#sponsor" className="font-light rounded-lg text-2xl px-4 py-2 text-center">Become a Sponsor</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>

                {/* Goals */}
                <div className="max-h-[50vh] w-auto my-8 overflow-hidden">
                    <img className="object-cover" src={require("../assets/media/hsfhomepic.jpeg")} alt="Concept Motorcycle"/>
                </div>
                <div className="flex flex-col mt-20 mb-4 p-4 md:p-8">
                    <div className="md:flex md:flex-row md:items-center md:justify-center py-4">
                        <div className="md:w-1/2 md:px-4">
                            <h2 className="md:text-center font-bold md:text-6xl text-4xl py-2">Thank you.</h2>
                            <p className="text-left text-2xl font-light mt-4">
                            Surge flourishes because of the invaluable sponsors who have played a pivotal role in our success. 
                            Their generosity has not only fueled our passion but also enabled us to create a vibrant and thriving community within our team.
                            We extend our most heartfelt gratitudes to the organizations above.
                            </p>
                        </div>
                        <div id="sponsor" className="md:w-1/2 my-8">
                            <iframe title="General Inquiry Form" src="https://airtable.com/embed/appbckQhXl5Sl54J1/pagUbBeFxlj4eHOqV/form" frameborder="0" onmousewheel="" width="100%" height="533" className="bg-transparent border-1;"></iframe>
                        </div>
                    </div>
                    
                </div>
            </main>

        {/* Footer */}
        <Footer />
        </div>
    );
};

export default Sponsors;
