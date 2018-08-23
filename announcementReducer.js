export const GET_ANNOUNCEMENTS = 'psapp/announcements/LOAD';
export const GET_ANNOUNCEMENTS_SUCCESS = 'psapp/announcements/LOAD_SUCCESS';
export const GET_ANNOUNCEMENTS_FAIL = 'psapp/announcements/LOAD_FAIL';

export default function reducer(state = { announcements: [] }, action) {
  switch (action.type) {
    case GET_ANNOUNCEMENTS:
      return { ...state, loading: true };
    case GET_ANNOUNCEMENTS_SUCCESS:
      return { ...state, loading: false, announcements: action.payload.data };
    case GET_ANNOUNCEMENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching announcements'
      };
    default:
      return state;
  }
}

export function listAnnouncements() {
  return {
    type: GET_ANNOUNCEMENTS,
    payload: {
      request: {
        url: `https://playsask.com/wp-json/wp/v2/posts`
      }
    }
  };
}