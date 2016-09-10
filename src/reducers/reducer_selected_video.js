import * as yta from '../constants/YTActionTypes';

export default function SelectedVideoReducer(state={}, action) {
    switch(action.type){
        case yta.VIDEO_SELECTED:
            return action.video;

        case yta.VIDEO_LIST:
            return action.selectedVideo;

        default:
            return state;
    }
}
