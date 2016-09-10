import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import VideosReducer from './reducer_videos';
import SelectedVideoReducer from './reducer_selected_video';

const rootReducer = combineReducers({
    routing,
    videos: VideosReducer,
    selectedVideo: SelectedVideoReducer
});

export default rootReducer;
