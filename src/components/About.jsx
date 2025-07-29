import React from 'react';

import Typed from 'react-typed';
import Footer from './Footer.jsx';

const teamMembers = [
    {
        name: 'Anthony Miceli',
        role: 'President',
        description: 'EECS 2027 - Intern at Jaguar Land Rover - Researcher at BSAC',
        imageUrl: require('../assets/media/Team/Anthony.jpg'),
    },
    {
        name: 'Cameron Dang',
        role: 'EECS 2025',
        description: 'Hi, I\'m Cameron, a senior at UC Berkeley studying EECS, BioE, and design. I enjoy playing tennis, skiing, and love motorsports (from F1 to GT to motorcycles)!',
        imageUrl: require('../assets/media/Team/Cameron.jpeg'),
    },
    {
        name: 'Meta Zhou',
        role: 'MechE 2025',
        description: 'Hi! I\'m Meta (rhymes with theta) and I\'m a senior at UC Berkeley studying Mechanical Engineering and Design. Other than that, I like painting, spin classes, and matcha lattes - I\'ve been on a mission to find the best matcha in Berkeley.',
        imageUrl: require('../assets/media/Team/Meta.jpg'),
    },
    {
        name: 'Antonio Herrera',
        role: 'MechE 2025',
        description: 'Hey everyone! I am a senior majoring in Mechanical Engineering. I previously interned at Electric Hydrogen as a Mechanical Design Engineer. Outside of school and work, I work on developing structural components on the next-generation solar vehicle at CalSol as well as producing electronic dance and tech house music on the side. Hit me up with any song recs!',
        imageUrl: require('../assets/media/Team/Antonio.jpg'),
    },
];

const About = () => {    
    return (
        <div className="bg-slate-100 min-h-screen">
            {/* Main Content */}
            <main className="container mx-auto p-10">
                {/* About Us */}
                <div className="flex flex-col mt-20 mb-4 p-4 md:p-8">
                    <h3 className="text-center font-light mb-4">ABOUT US</h3>
                    <div className="md:px-10">
                            <h1 className="md:text-center font-bold md:text-6xl text-4xl py-2">We are UC Berkeley's premiere electric motorcycle racing team.</h1>
                            <p className="text-left md:text-center text-2xl font-light mt-4 lg:px-20">
                                Surge aims to be one of the few college teams competing on an international stage. Our goal is to develop and revolutionize 
                                electric motorcycles by uniting two goals: top speed and longevity.
                            </p>
                    </div>
                </div>

                {/* Goals */}
                <div className="max-h-[50vh] w-auto my-8 overflow-hidden">
                    <img className="object-cover" src={require("../assets/media/lightning.jpeg")} alt="Lightning"/>
                </div>
                <div className="flex flex-col mt-20 mb-4 p-4 md:p-8">
                    <h3 className="text-center font-light mb-4">OUR PLAN</h3>
                    <div className="md:flex md:flex-row py-4">
                        <div className="md:w-1/2 md:px-4">
                            <h2 className="md:text-center font-bold md:text-6xl text-4xl py-2">To-Do</h2>
                            <p className="text-left text-2xl font-light mt-4">
                                Founded just recently in late 2023, our team is reining in our first task: an in-house EV conversion on an existing motorcycle chassis.
                                This allows us to focus solely on an electric powertrain, ensuring that our resources are not divided amongst other aspects of the motorcycle,
                                such as dynamics or suspension. 
                            </p>
                        </div>
                        <div className="md:w-1/2 md:px-4">
                            <h2 className="md:text-center font-bold md:text-6xl text-4xl py-2">Next steps?</h2>
                            <p className="text-left text-2xl font-light mt-4">
                                Our goal is a fully-custom, in-house EV motorcycle with pioneering technology. Modular parts? Supercapacitors? Solid-state batteries?
                                Our team has already begun researching these ideas to bring these dreams into reality, where we plan to compete in some of racing's most formidable competitions.
                            </p>
                        </div>
                    </div>
                </div>
                    
                {/* The Team */}
                <div className="flex flex-col my-4 p-4 md:p-8">
                    <h3 className="text-center font-light mb-4">THE TEAM</h3>
                    <div className="mb-5 md:px-10">
                        <h1 className="text-center font-bold text-3xl">Meet Berkeley's fastest club.</h1>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:p-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="font-light text-center">
                                <img
                                className="object-cover w-60 h-80 mx-auto mb-4"
                                src={member.imageUrl}
                                alt={member.name}
                                />
                                <h2 className="text-3xl">{member.name}</h2>
                                <p className="text-lg text-amber-400 font-medium">{member.role}</p>
                                <p className="text-md text-left md:text-center mt-4 font-light">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Join the community */}
                <div className="flex flex-col items-center p-4 md:p-8">
                    <div className="md:flex md:flex-row">
                        <div className="flex flex-col items-center justify-center">
                            <div className="lg:flex lg:flex-row lg:justify-center mb-5 text-center font-bold">
                                <h1 className="md:text-3xl text-2xl">Join a community of</h1>
                                <Typed 
                                    className="md:text-3xl text-2xl pl-2"
                                    strings={['engineers', 'mechanics', 'designers', 'developers', 'entrepreneurs', 'friends']}
                                    typeSpeed={100}
                                    backSpeed={120}
                                    loop
                                />
                            </div>
                            <p className="text-xl font-light mt-4 md:px-5 lg:mx-40 md:mx-20">
                                We are <b className="font-bold">Surge</b>, a UC Berkeley student organization dedicated to exploring the realm of energy and uniting it with 
                                a passion for motorcycles. Join us on our journey to research, adapt, and advance electric powertrains, aerodynamics, and much more.
                            </p>
                            <div className="flex justify-center my-5">
                                <div className="h-fit w-fit rounded-full bg-gradient-to-r from-blue-700 via-purple-700 to-fuchsia-700 hover:from-blue-400 hover:via-purple-400 hover:to-fuchsia-400 p-1">
                                    <div className="bg-slate-100 rounded-full p-2">
                                        <a href="/apply" className="font-light rounded-lg text-2xl px-4 py-2 text-center">Apply</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        {/* Footer */}
        <Footer />
        </div>
    );
};

export default About;
