"use client"

import { useState } from 'react';

export default function Home() {
  const [buttonClicked, setButtonClicked] = useState(false);

  const animateButton = () => {
    setButtonClicked(true);
    setTimeout(() => {
      setButtonClicked(false);
    }, 200);
    alert('Button clicked! You can add your animation logic here.');
  };

  return (
<div className="">
  <div className="rounded-lg overflow-hidden bg-gradient-to-br from-blue-400 to-white flex flex-col justify-center items-center p-12 shadow-2xl relative max-w-4xl w-full mx-auto">
    <h1 className="text-3xl lg:text-5xl text-center font-bold text-blue-500 mb-4">Math can be fun. For everyone.</h1>
    <h2 className="text-lg lg:text-xl text-center font-bold text-blue-500 mb-4">Brain training for adults, elementary math for kids.</h2>
    <div className="mt-8"></div>
    <div className="flex items-center">
      <img src="/hero3.svg" alt="Image under Math is fun" className="w-120 h-120 lg:w-160 lg:h-160 mr-4" />
    </div>
    <div className="flex items-center mt-8">
      <img src="/h3.svg" alt="Another Image" className="w-64 h-64 mr-4" />
      <div>
        <p className="text-lg text-blue-500 font-bold mb-4">Learn by doing, not viewing.</p>
        <p className="text-lg">Math is usually taught with textbooks, videos, and lectures. But it turns out math is a lot more fun when you can touch it, break it into pieces, and move it around. This is a new way to learn math.</p>
      </div>
    </div>
    <div className="flex items-center mt-8">
      <div>
        <p className="text-lg text-blue-500 font-bold mb-4">Everything you love about Duolingo.</p>
        <p className="text-lg">We took everything great about Duolingo, from bite-sized lessons to gamified moments, and brought it to math. Get on a 10 day streak learning math, you’ll thank yourself later.</p>
      </div>
      <img src="/h4.svg" alt="Another Image" className="w-64 h-64 ml-4" />
    </div>

    <div className="flex items-center mt-8">
      <img src="/h5.svg" alt="Another Image" className="w-64 h-64 mr-4" />
      <div>
        <p className="text-lg text-blue-500 font-bold mb-4">Brain train with something that’s actually useful.</p>
        <p className="text-lg">Brain training apps and sudoku can be a good mental challenge, but they aren’t helping you develop a valuable skill. Improving your mental math skills with Duolingo Math will come in handy surprisingly often.</p>
      </div>
    </div>
  </div>

  {/* Footer */}
  <footer className="bg-gradient-to-br from-blue-400 to-white text-white py-4 text-center shadow-lg rounded-full">
    <div className="max-w-4xl mx-auto">
      <ul className="flex justify-center space-x-6">
        <li><a href="courses">DUOLINGO</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">CAREERS</a></li>
        <li><a href="#">APPS</a></li>
        <li><a href="#">INVESTORS</a></li>
        <li><a href="#">HELP</a></li>
        <li><a href="#">TERMS</a></li>
        <li><a href="#">PRIVACY</a></li>
      </ul>
    </div>
  </footer>
</div>








  );
}
