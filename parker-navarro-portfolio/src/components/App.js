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
            <h3 id="navbar">
                <a href="#about">About</a>
                <a href="#social-media">Social Media</a>
                <a href="#resume">Resume</a>
                <a href="#on-camera">On Camera</a>
            </h3>

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