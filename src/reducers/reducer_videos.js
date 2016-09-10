import * as yta from '../constants/YTActionTypes';

const INITIAL_STATE = { all: [], maxResults: 5, term: 'best new animes to watch' };

export default function VideosReducer(state=INITIAL_STATE, action={}) {
    switch(action.type) {
        case yta.VIDEO_LIST:
            return {...state, all: action.videos};

        case yta.SEARCH_TERM:
            return {...state, term: action.term};

        case yta.MAX_RESULTS:
            return {...state, maxResults: action.resNum};
            
        default:
            return state;
    }
}
