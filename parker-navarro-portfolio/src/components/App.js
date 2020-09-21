import React from 'react';
import About from './About';
import Social from './Social';
import Resume from './Resume';
import Camera from './Camera';
import ControlPanel from './ControlPanel';

class App extends React.Component{
    state = {
        projects: {},
    }

    render(){


        return(
            <div>
            

            <h1>Parker Navarro</h1>

            <nav id="navbar">
            <ul>
              <li class="logo"><a href="#">PARKER<br></br>NAVARRO</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#social-media">Social Media</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#on-camera">On Camera</a></li>
            </ul>

          </nav>

            <div className="content">
            <section id="editable">

                <About />

                <Social />

                <Resume />

                <Camera />

            </section>

            <section id="editor">

                <ControlPanel/>

            </section>

            </div>
            
            </div>

            

        )
    }

};

export default App;