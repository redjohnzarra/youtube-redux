import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { searchVideo, selectVideo, changeMaxResults } from '../actions/yt_video';


class VideoList extends Component {
    constructor(props){
        super(props);
    }

    onVideoSelect(video){
        this.props.selectVideo(video);
    }

    onShowMore(){
        let maxResults = this.props.maxResults + 5;
        this.props.changeMaxResults(maxResults);
        this.props.searchVideo(this.props.term, maxResults);
    }

    render() {
        if(_.isEmpty(this.props.videos)) return <div></div>;

        const videoList = this.props.videos.map((video, index)=>{
            const truncatedDesc = _.truncate(video.description, {
                'length': 40
            });
            return(
                <li className="list-group-item" key={index} onClick={() => this.onVideoSelect(video)}>
                    <div className='media'>
                        <div className="media-left">
                            <img src={video.thumbnails.default.url} alt=""/>
                        </div>
                        <div className="media-body">
                            <h4 className='media-heading'>{video.title}</h4>
                            <p>{ truncatedDesc }</p>
                        </div>
                    </div>
                </li>
            );
        });

        const display = this.props.videos.length > 0 ? 'block' : 'none';

        return(
            <ul className="list-group">
                {videoList}
                <a className="show-more" style={{display}} onClick={this.onShowMore.bind(this)}>show more</a>
            </ul>
        );
    }
}

function mapStateToProps(state){
	return {
        videos: state.videos.all,
        maxResults: state.videos.maxResults,
        term: state.videos.term
	}
}

function mapDispatchToProps(dispatch) {
    return {
        selectVideo: bindActionCreators(selectVideo, dispatch),
        searchVideo: bindActionCreators(searchVideo, dispatch),
        changeMaxResults: bindActionCreators(changeMaxResults, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
