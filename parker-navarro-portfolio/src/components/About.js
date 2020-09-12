import React from 'react';

class About extends React.Component{
    state={
        projects: {}
    }

    render(){
        return(
            <div id="about">
            <h2 className="about-header">About</h2>
            <p className="about-para"></p>
            </div>
        )
    }
}

export default About;