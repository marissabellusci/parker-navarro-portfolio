import React from 'react';

class Resume extends React.Component{
    state={
        projects: {}
    }

    render(){
        return(
            <div id="resume">
            <h2 className="resume-header">Resume</h2>
            <p className="resume-para"></p>
            </div>
        )
    }
}

export default Resume;