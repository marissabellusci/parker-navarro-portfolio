import React from 'react';

class App extends React.Component{
    state = {
        projects: {},
    }

    render(){
        return(
            <div>
            <h2>Parker Navarro</h2>
            <h3 id="navbar">
                <a href="#">About</a>
                <a href="#">Social Media</a>
                <a href="#">Resume</a>
                <a href="#">On Camera</a>
            </h3>
            </div>
        )
    }

};

export default App;