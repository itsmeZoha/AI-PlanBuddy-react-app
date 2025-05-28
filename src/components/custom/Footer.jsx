import React from 'react';

function Footer({ trip }) {
  return (
    <footer className=" bg-white text-gray-700 border-t border-gray-200 py-6 rounded-t-xl shadow-inner">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Created by Zoha Asghar</h2>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/itsmeZoha" target="_blank" rel="noopener noreferrer" className=" transition"
          style={{color:"#095771"}} >
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/zoha-asghar-7878a9301/" target="_blank" rel="noopener noreferrer" className=" transition "
           style={{color:"#095771"}} >
            LinkedIn
          </a>
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            Twitter
          </a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
