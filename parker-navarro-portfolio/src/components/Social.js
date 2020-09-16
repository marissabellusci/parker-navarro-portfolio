import React from 'react';

class Social extends React.Component{
    state={
        projects: {},
    }

    render(){
        return(
            <div id="social-media">
            <h2 className="social-media-header">Social Media</h2>
            <p className="social-media-para">
            <a class="twitter-timeline" data-lang="en" href="https://twitter.com/ParkerANavarro?ref_src=twsrc%5Etfw">Tweets by @ParkerANavarro</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            <a class="twitter-timeline" data-lang="en" href="https://twitter.com/flosports?ref_src=twsrc%5Etfw">Tweets by flosports</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </p>
            </div>
        )
    }
}

export default Social;