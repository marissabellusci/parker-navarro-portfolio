import React from 'react';

class Camera extends React.Component{
    state={
        projects: {}
    }

    render(){
        return(
            <div id="on-camera">
            <h2 className="on-camera-header">On-Camera</h2>

            <div className="on-camera-container">

            <div className="social-tile">
            <h4><a href="https://www.youtube.com/watch?v=9AvL5rEILN0&feature=youtu.be&fbclid=IwAR3uqP3MFPNf1eRgZq6dTMjQtccNSIGt5AM9u17YRTbRaRWZ0g_8Q_CROAY" target="_blank">
            Center Stage</a>
            </h4>
            <p className="social-media-para">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9AvL5rEILN0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            </p>
            </div>

            <div className="social-tile">
            <h4><a href="https://www.milesplit.com/videos/299727" target="_blank">
            MileSplit LIVE</a>
            </h4>
            <p className="social-media-para">
            <iframe width="560" height="315" src="https://videos.sp.milesplit.com/299727/videos/720p.mp4?premium=0&checksum=0c0702cda5593f0409433c40d6aebd02" frameborder="0" allowfullscreen="true"></iframe>
            </p>            
            </div>

            <div className="social-tile">
            <h4><a href="https://www.milesplit.com/articles/247477" target="_blank">
            Parody Segment</a>
            </h4>
            <p className="social-media-para">
            <iframe width="560" height="315" src="https://videos.sp.milesplit.com/302931/videos/720p.mp4?premium=0&checksum=3b046c854bcf27df4cec51e6206664c6" frameborder="0" allowfullscreen="true"></iframe>
            </p>            
            </div>

            </div>
            </div>
        )
    }
}

export default Camera;