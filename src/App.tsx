import React from 'react';
import './App.css';
// import Spotify from '../src/components/spotify'
import Splash from '../src/components/SplashPage'
// import { any } from 'prop-types';

const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <Splash />
        {/* <Spotify /> */}
        {/* <a href="/login/facebook">Login with Facebook</a>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login with Spotify
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Bands
        </button> */}


      </div>
    </div>
  );
}

export default App;
