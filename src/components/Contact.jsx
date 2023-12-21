import React from 'react';
import Footer from './Footer.jsx';

const Contact = () => {
  return (
    <div className="bg-slate-100 min-h-screen">
      {/* Header */}
      <header className="relative pt-40">
        <div className="flex flex-col items-center mx-auto relative z-10">
          <div className="flex flex-col md:text-8xl text-6xl text-black font-semibold">
            <h1 className="">Contact</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center mx-auto px-10">
        {/* First body part */}
        <div className="flex flex-col w-4/5 my-4 p-4 md:p-8">
          <div className="md:grid md:grid-cols-2 md:gap-4 md:p-8">
            <div className="flex flex-col justify-center md:w-2/3">
              <h2 className="text-3xl">For general inquiries</h2>
              <p className="text-lg text-slate-700 font-medium my-4">
                Please fill out the form (it may take a second to load) or email us at surge@berkeley.edu.
              </p>
              <h2 className="text-3xl my-4">For mailing list</h2>
              <a href="/about#mailing" className="text-black bg-amber-400 hover:bg-amber-600 font-medium rounded-lg text-lg px-4 py-2 text-center">Mailing List</a>
              <h2 className="text-3xl my-4">For student applications</h2>
              <a href="/apply" className="text-black bg-amber-400 hover:bg-amber-600 font-medium rounded-lg text-lg px-4 py-2 text-center">Apply</a>
              <h2 className="text-3xl my-4">For sponsorship or donation inquiries</h2>
              <a href="/sponsors" className="text-black bg-amber-400 hover:bg-amber-600 font-medium rounded-lg text-lg px-4 py-2 text-center">Sponsors</a>
            </div>
            <div className="md:order-last my-8">
                <iframe title="General Inquiry Form" src="https://airtable.com/embed/appbckQhXl5Sl54J1/pagEIfAzOK6TWvgqO/form" frameborder="0" onmousewheel="" width="100%" height="533" className="bg-transparent border-1;"></iframe>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
