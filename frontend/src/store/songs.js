const LOAD_SONGS = 'song/loadSongs';
const CREATE_SONG = 'song/createSong';

//? Action Creators
export const loadSongs = songs => {
  return {
    type: LOAD_SONGS,
    songs
  };
}

export const createSong = newSong => {
  return {
    type: CREATE_SONG,
    newSong
  };
}

//! Not sure what initialState does
const initialState = {
  songs: []
};

//-------------Thunks------------------
//? Thunks
export const getSongs = () => async dispatch => {
  const res = await fetch('/api/discover');

  if (res.ok) {
      const songs = await res.json()
      return dispatch(loadSongs(songs))
  }
};


//--------------Reducer-----------------
//? Reducer
export const songsReducer = (state = initialState, action) => {
  const newState = {...state};

  switch (action.type) {
    case LOAD_SONGS: {
      const songsDisplay = {};
      action.songs.forEach(song => {
        songsDisplay[song.id] = song;
      })
      return newState;
    }
    case CREATE_SONG: {
      //do nothing
    }
    default: {
      return state;
    }
  }
}

export default songsReducer;