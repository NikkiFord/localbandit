import React from 'react';
import './App.css';
// import Spotify from '../src/components/spotify'
import Splash from '../src/components/SplashPage'
import TestButtons from '../src/components/TestButtons'

// import { any } from 'prop-types';

const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <Splash />

        {/* <TestButtons /> */}


      </div>
    </div> 
  );
}

export default App;
