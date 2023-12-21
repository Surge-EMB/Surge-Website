import React, { useEffect, useRef, useState } from "react";
import Typed from 'react-typed';

import Footer from './Footer.jsx';

import backgroundImage from '../assets/media/motorcycle_render_zout.jpg';

const teamMembers = [
    {
        name: 'Cameron Dang',
        role: 'EECS 2025',
        description: 'Hi, I\'m Cameron, a junior at UC Berkeley studying EECS, BioE, and design. I enjoy playing tennis, skiing, and love motorsports (F1, cars, motorcycles)!',
        imageUrl: require('../assets/media/Team/Cameron.jpeg'),
    },
    {
        name: 'Jackson Zilles',
        role: 'MechE 2025',
        description: 'lorem sidafj lasiefjasdif n;sndca iajsldifjal einas a;enfalsd ae asdlfihaseflasf iheifj dfiejafijs ifeadihais ashfliaehfsiff!',
        imageUrl: require('../assets/media/Team/Charles.png'),
    },
    {
        name: 'Meta Zhou',
        role: 'MechE 2025',
        description: 'lorem sidafj lasiefjasdif n;sndca iajsldifjal einas a;enfalsd ae asdlfihaseflasf iheifj dfiejafijs ifeadihais ashfliaehfsiff!',
        imageUrl: require('../assets/media/Team/Matthew.jpg'),
    },
    {
        name: 'Antonio Herrera',
        role: 'MechE 2025',
        description: 'lorem sidafj lasiefjasdif n;sndca iajsldifjal einas a;enfalsd ae asdlfihaseflasf iheifj dfiejafijs ifeadihais ashfliaehfsiff!',
        imageUrl: require('../assets/media/Team/Kyle.png'),
    },
];

const RevealOnScroll = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      let observerRefValue = null;
      const scrollObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            scrollObserver.unobserve(entry.target);
          }
        },
      );
  
      scrollObserver.observe(ref.current);
      observerRefValue = ref.current;
  
      return () => {
        if (observerRefValue) {
          scrollObserver.unobserve(observerRefValue);
        }
      };
    }, []);
    
    const classes = `transition-opacity duration-1500 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`;
  
    return (
      <div ref={ref} className={classes}>
        {children}
      </div>
    );
  };

const Home = () => {
    return (
        <div className="bg-gray-800 text-white min-h-screen">

            {/* Header */}
            <header 
                className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className="absolute inset-0 backdrop-blur-md"></div>

                <RevealOnScroll>
                    <div className="flex flex-col items-center mx-auto relative z-10">
                        <div className="text-8xl font-semibold">
                            <h1 className="">Surge</h1>
                        </div>
                        <div className="mt-2 text-2xl font-medium">
                            <p className="">Electric Motorcycles at Berkeley</p>
                        </div>
                    </div>
                </RevealOnScroll>
            </header>

            {/* Main Content */}
            <main className="container mx-auto p-10">

                {/* Our Vision */}
                <div className="flex flex-col my-4 p-4 md:p-8">
                    <RevealOnScroll>
                        <h3 className="text-center font-light mb-4">OUR VISION</h3>
                    </RevealOnScroll>
                    <div className="md:px-10">
                        <RevealOnScroll>
                            <h1 className="md:text-center font-bold text-6xl py-2">Energy is the future.</h1>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            <p className="text-left md:text-center text-2xl font-light mt-4">
                                Empowering innovation, one race at a time. Engineering the future of electric motorcycles.
                            </p>
                        </RevealOnScroll>
                    </div>
                    <RevealOnScroll>
                        <div className="flex justify-center my-20">
                            <div className="h-fit w-fit rounded-full bg-gradient-to-r from-blue-700 via-purple-700 to-fuchsia-700 hover:from-blue-400 hover:via-purple-400 hover:to-fuchsia-400 p-1">
                                <div className="bg-gray-800 rounded-full p-2">
                                    <a href="/about" className=" font-light rounded-lg text-4xl px-4 py-2 text-center">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>

                {/* The Team */}
                <div className="flex flex-col my-4 p-4 md:p-8">
                    <RevealOnScroll>
                        <h3 className="text-center font-light mb-4">THE TEAM</h3>
                    </RevealOnScroll>
                    <RevealOnScroll>
                        <div className="mb-5 md:px-10">
                            <h1 className="text-center font-bold text-3xl">Meet Berkeley's fastest club.</h1>
                        </div>
                    </RevealOnScroll>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:p-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="font-light text-center">
                                <RevealOnScroll>
                                    <img
                                    className="object-cover w-60 h-80 mx-auto mb-4"
                                    src={member.imageUrl}
                                    alt={member.name}
                                    />
                                </RevealOnScroll>
                                <RevealOnScroll>
                                    <h2 className="text-3xl">{member.name}</h2>
                                    <p className="text-lg text-amber-400 font-medium">{member.role}</p>
                                    <p className="text-md text-left md:text-center mt-4 font-light">{member.description}</p>
                                </RevealOnScroll>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Join the community */}
                <div className="flex flex-col items-center my-4 p-4 md:p-8">
                    <div className="md:w-3/4 md:flex md:flex-row">
                        <div className="md:order-last my-8 md:w-1/3">
                            <RevealOnScroll>
                                <img className="object-cover" src={require("../assets/media/hsfhomepic.jpeg")} alt="TeamPic"/>
                            </RevealOnScroll>
                        </div>
                        <div className="flex flex-col items-center justify-center md:w-2/3">
                            <RevealOnScroll>
                                <div className="md:flex md:flex-row md:justify-center mb-5 md:px-10 text-center font-bold">
                                    <h1 className="text-3xl">Join a community of</h1>
                                    <Typed 
                                        className="text-3xl pl-2"
                                        strings={['engineers', 'mechanics', 'designers', 'developers', 'entrepreneurs', 'friends']}
                                        typeSpeed={100}
                                        backSpeed={120}
                                        loop
                                    />
                                </div>
                            </RevealOnScroll>
                            <RevealOnScroll>
                                <p className="text-xl font-light mt-4">
                                    We are <b className="font-bold">Surge</b>, a UC Berkeley student organization dedicated to motorcycles 
                                    ayadasd fiasdfj aslfjalsif jlajef;aljfi as;dlfja siejialsidfj sdafi iisadfjli sajifaj dasidjfasjidjf asdfilasjdf
                                    asdjlfiasidfjsadjf as flasjfj iasjfjeijfijlwadnianeiaifsijfla.
                                </p>
                                <div className="flex justify-center my-5">
                                    <div className="h-fit w-fit rounded-full bg-gradient-to-r from-blue-700 via-purple-700 to-fuchsia-700 hover:from-blue-400 hover:via-purple-400 hover:to-fuchsia-400 p-1">
                                        <div className="bg-gray-800 rounded-full p-2">
                                            <a href="/apply" className="font-light rounded-lg text-2xl px-4 py-2 text-center">Join the Team</a>
                                        </div>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        </div>
                    </div>
                </div>
            </main>
            {/* CTA */}
            <Footer />
        </div>
    );
};

export default Home;
