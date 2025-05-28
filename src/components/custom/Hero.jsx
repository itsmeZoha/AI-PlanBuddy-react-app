import React from 'react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import bg from './../../assets/1.jpg';  
import bg1 from './../../assets/bg1.png';  
import bg2 from './../../assets/bg2.png';  
import bg3 from './../../assets/bg3.png';  

function Hero() {
  return (
    <div>

    <div
      className="relative flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
      >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-9 max-w-3xl mx-auto px-4">
        <h1 className="font-extrabold text-4xl md:text-5xl text-white leading-tight">
          <span className="text-[#6ACAEB] block mb-4">
            Discover Your Next Adventure with AI
          </span>
          Personalized Itineraries at Your Fingertips
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
        </p>
        <Link to={'/create-trip'}>
          <Button
            className="text-white px-6 py-3 rounded shadow-lg transition hover:bg-[#0a6e8a]"
            style={{ backgroundColor: '#095771' }}
            
            >
            Get Started, it's Free
          </Button>
        </Link>
      </div>
    </div>
         <img src={bg3} className="w-full max-w-[1600px] h-auto object-center rounded-xl mx-auto" alt="mockup" />
   </div>
  );
}

export default Hero;
