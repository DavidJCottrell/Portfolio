import './App.css';
import Particles from 'react-particles-js';
import { Component } from 'react';

import particlesConfig from './particles-config.json';

class App extends Component {
  render(){
    return (
      <header>
        <Particles
          params={particlesConfig}
          height="98vh"
          width="98vw"
        />


        <div className="card">
          <h2>David Cottrell</h2>
        </div>

        
        <div className="content">
          <p>test</p>
        </div>

      </header>
    );
  };
}

export default App;
