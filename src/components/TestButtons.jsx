import React from "react";
import "./style.css";

const TestButtons = () => {
  return (
    <div className="test-buttons">
      <a href='/login/facebook'>Login with Facebook</a>
     
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Login with Spotify
      </button>
      
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Get Bands
      </button>

    </div>
  );
};

export default TestButtons;
