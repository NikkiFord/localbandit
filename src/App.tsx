import React, { useState } from 'react';
import './App.css';
// import Spotify from '../src/components/spotify'
import Splash from '../src/components/SplashPage'
import TestButtons from '../src/components/TestButtons'

// import { any } from 'prop-types';

const App: React.FC = () => {
  let [splashVisible, setSplashVisible] = useState(false);
  // const loggedIn = false;
  // const renderLandingPage = () => {
  //   // if (loggedIn) {
  //   //   return <Home />;
  //   // }
  //   return <Splash />;
  // }

  return (
    <div className="App">
      <div>
       { splashVisible && <Splash /> }
       <button onClick={() => setSplashVisible(!splashVisible)}>Show/Hide Splash</button>
      </div>
    </div> 
  );
}

export default App;
