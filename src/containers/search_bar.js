import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchVideo, changeSearchTerm, changeMaxResults } from '../actions/yt_video';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            term: ''
        }
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value
        });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.changeMaxResults(5);
        this.props.searchVideo(this.state.term, 5);
        this.props.changeSearchTerm(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit.bind(this)}>
                <input className="form-control" id="searchInput" type="text"
                    placeholder="Enter video to search here"
                    value={this.props.term}
                    onClick={()=>{document.getElementById("searchInput").value = ''}}
                    onChange={this.onInputChange.bind(this)}/>
                <span className="input-group-btn">
                    <button className="btn btn-danger" type="submit">Search</button>
                </span>
            </form>
        );
    }
}

function mapStateToProps(state){
    return {
        maxResults: state.videos.maxResults
    }
}


function mapDispatchToProps(dispatch) {
    return {
        searchVideo: bindActionCreators(searchVideo, dispatch),
        changeSearchTerm: bindActionCreators(changeSearchTerm, dispatch),
        changeMaxResults: bindActionCreators(changeMaxResults, dispatch)
    }
}


export default connect(null, mapDispatchToProps)(SearchBar);
