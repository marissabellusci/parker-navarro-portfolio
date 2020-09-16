import React from 'react';

class About extends React.Component{
    state={
        projects: {}
    }

    render(){
        return(
            <div id="about">
            <h2 className="about-header">About</h2>
            <p className="about-para">
            Hello!

            </p>
            <p className="about-para">
            My name is Parker Navarro, and I am an experienced Marketing Coordinator out of Austin, TX. I’m originally from the Los Angeles area, and I obtained my degree in Communication Studies from the University of North Carolina Wilmington, where I also ran Division I cross country and track. Clearly, I like to travel around!

            </p>

            <p className="about-para">
            Since October of 2017, I have worked dual positions for FloSports, a network of websites specializing in live-streaming sports events, as well as the news content that comes with it. I was hired based on my strong communications background and over the past year, I have gotten to explore two different positions at FloSports - one focusing on external marketing relations and the other focusing on social media coverage, along with on-air hosting, podcasting, video production, and live event coverage.

            My main passion is for Social Media Marketing. I love to create, analyze, and stay on top of anything social media related in the news and in the realm of my career. My favorite part of managing social media platforms is definitely crowd sourced content, and finding new ways to adapt, recycle, or create with that content to my own platforms.

            I’m looking for a position where I can bring a brand my unique and compelling voice in the copy- as well as have fun getting the hang of brand new content.
            </p>
            </div>
        )
    }
}

export default About;