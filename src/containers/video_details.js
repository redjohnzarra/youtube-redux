import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class VideoDetails extends Component {
    render() {

        if(_.isEmpty(this.props.video)) return <div className="loading-container"><img src="https://linkmaker.itunes.apple.com/images/loading.gif" alt=""/></div>;

        const url = `http://www.youtube.com/embed/${this.props.video.id}`;
        return (
            <div className='video-container'>
                <div className='video-player'>
                    <iframe src={url} allowFullScreen="allowFullScreen" width="100%" height="500px" frameBorder="0"></iframe>
                </div>
                <div className="video-details">
                    <h4>{this.props.video.title}</h4>
                    <p>{this.props.video.description}</p>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ selectedVideo }){
	return {
        video: selectedVideo
	}
}

export default connect(mapStateToProps)(VideoDetails);
