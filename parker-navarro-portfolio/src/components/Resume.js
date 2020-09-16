import React from 'react';

class Resume extends React.Component{
    state={
        projects: {}
    }

    render(){
        return(
            <div id="resume">
            <h2 className="resume-header">Resume</h2>
            <p className="resume-para">
            <a href="https://static1.squarespace.com/static/5c06fc2545776e91accfc507/t/5c070b87575d1f3fc21b7dbc/1543965575335/Parker+Navarro+Autodesk+Resume.pdf" target="blank">
            <iframe width="1200" height="500" src="https://static1.squarespace.com/static/5c06fc2545776e91accfc507/t/5c070b87575d1f3fc21b7dbc/1543965575335/Parker+Navarro+Autodesk+Resume.pdf" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            </a>
            </p>
            </div>
        )
    }
}

export default Resume;