import React from 'react';
import Footer from './Footer.jsx';

// Sample data for program cards
const programData = [
    {
        title: 'Coffee Chat',
        date: 'Jackson Zilles',
        description: '',
        link: 'https://calendly.com/jmzilles',  
    },
    {
        title: 'Coffee Chat',
        date: 'Cameron Dang',
        description: '',
        link: 'https://calendly.com/cameronvdang',  
    },
];

const Apply = () => {
  return (
    <div className="bg-slate-100 text-black min-h-screen">
      {/* Header */}
      <header className="relative pt-40">
        <div className="flex flex-col items-center mx-auto relative z-10">
          <div className="flex flex-col md:text-8xl text-6xl font-semibold">
            <h1 className="">Apply</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-10">

        {/* Form Links */}
        <div className="flex flex-row mb-2 md:p-4">
            <a target="_blank" rel="noopener noreferrer" href="https://airtable.com/appbckQhXl5Sl54J1/pagfZL0ou6RoU2BiG/form" className="text-black bg-amber-400 hover:bg-amber-600 font-medium rounded-lg text-lg mx-4 px-4 py-2 text-center">Application</a>
            <a href="/#mailing" className="text-black bg-amber-400 hover:bg-amber-600 font-medium rounded-lg text-lg px-4 py-2 text-center">Mailing List</a>
        </div>
        {/* Timeline */}
        <h3 className="text-2xl font-semibold px-4 md:px-8">Surge Application Information (Spring 2024)</h3>
        <h4 className="text-xl font-semibold px-4 md:px-8">Deadline: TBD</h4>
        <div className="flex flex-col my-4 px-4 md:px-8">
          <div className="grid grid-cols-1 gap-6">
            {programData.map((program, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-700 via-purple-700 to-fuchsia-700 hover:from-blue-400 hover:via-purple-400 hover:to-fuchsia-400 p-1 shadow-lg rounded-lg overflow-hidden flex flex-col">
                    <div className="bg-slate-100 rounded-lg p-4 flex-grow">
                        <h2 className="text-xl font-bold mb-2">{program.date}</h2>
                        <h2 className="text-xl font-semibold mb-2">
                        {program.title}
                        </h2>
                        <p className="font-light">{program.description}</p>
                        <a className="text-md text-blue-700 underline hover:text-blue-900" href={program.link} target="_blank" rel="noopener noreferrer">Link</a>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Apply;
