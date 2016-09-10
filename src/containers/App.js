import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem
} from 'react-bootstrap';

import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from '../containers/search_bar';
import VideoList from '../containers/video_list';
import VideoDetails from '../containers/video_details';
import { searchVideo } from '../actions/yt_video';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeKey: 1
        }
    }

    componentWillMount() {
        this.props.searchVideo(this.props.term, this.props.maxResults);
    }

    onMenuSelect(activeKey) {
        this.setState({ activeKey });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="header">
                    <Navbar inverse >
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#">YouTube Clone</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight onSelect={ this.onMenuSelect.bind(this) } activeKey={ this.state.activeKey }>
                                <NavItem eventKey={1} href="#">Home</NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div className="body container">
                    { /*this.props.children*/ }
                    <div className="row sInput-container">
                        <div className="col-md-8"><SearchBar /></div>
                        <div className="col-md-4"><div className="header-title">Search Results:</div></div>
                    </div>
                    <div className="row">
                        <div className="col-md-8"><VideoDetails /></div>
                        <div className="col-md-4 list-container">
                            <VideoList />
                        </div>
                    </div>
                </div>
                <div className="footer"></div>
            </div>
        );
    }
}

function mapStateToProps(state){
	return {
        term: state.videos.term,
        maxResults: state.videos.maxResults
	}
}

function mapDispatchToProps(dispatch) {
    return {
        searchVideo: bindActionCreators(searchVideo, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
