import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
     <div>
       <a href="/login/facebook">Login with Facebook</a>
       <button>Login with Spotify</button>
       <button>Get bands</button>
     </div>
    </div>
  );
}

export default App;
