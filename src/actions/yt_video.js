import YTSearch from 'youtube-search';
import * as yta from '../constants/YTActionTypes';
import * as ac from '../constants/AppConstants';

export let selectVideo = (video) => {
    return {
        type: yta.VIDEO_SELECTED,
        video
    }
}

export let searchVideo = (term, maxRes) => {
    const opts = {
        maxResults: maxRes,
        key: ac.API_KEY
    }

    return dispatch=>{
        YTSearch(term, opts, (err, videos) => {
            if(err){
                dispatch({type:yta.VIDEO_LIST,videos:err});
            }

            dispatch({
                type:yta.VIDEO_LIST,
                videos:videos,
                selectedVideo: videos[0]
            });
        });

    }
}

export let changeMaxResults = (resNum) => {
    return {
        type: yta.MAX_RESULTS,
        resNum
    }
}

export let changeSearchTerm = (searchTerm) => {
    return {
        type: yta.SEARCH_TERM,
        term: searchTerm
    }
}
