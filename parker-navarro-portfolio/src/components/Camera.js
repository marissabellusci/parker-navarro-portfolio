import React from 'react';

class Camera extends React.Component{
    state={
        projects: {}
    }

    render(){
        return(
            <div id="on-camera">
            <h2 className="on-camera-header">On-Camera</h2>
            <p className="on-camera-para"></p>
            </div>
        )
    }
}

export default Camera;