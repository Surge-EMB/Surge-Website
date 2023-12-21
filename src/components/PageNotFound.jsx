import React from 'react';

const PageNotFound = () => {
  return (
    <div className="min-h-screen">
      <main className="min-h-screen bg-cover bg-center bg-fixed flex items-center ">
        <div className="flex flex-col items-center mx-auto text-black font-semibold">
            <h1 className="md:text-8xl text-4xl">404</h1>
            <h2 className="md:text-6xl text-2xl">Page not found. <a href="/" className="text-amber-400 hover:text-amber-600 underline">Homepage?</a></h2>
        </div>
      </main>
    </div>
  );
};

export default PageNotFound;
