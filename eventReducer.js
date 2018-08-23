export const GET_EVENTS = 'my-awesome-app/repos/LOAD';
export const GET_EVENTS_SUCCESS = 'my-awesome-app/repos/LOAD_SUCCESS';
export const GET_EVENTS_FAIL = 'my-awesome-app/repos/LOAD_FAIL';

export default function reducer(state = { events: [] }, action) {
  switch (action.type) {
    case GET_EVENTS:
      return { ...state, loading: true };
    case GET_EVENTS_SUCCESS:
      return { ...state, loading: false, events: action.payload.data };
    case GET_EVENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching matches'
      };
    default:
      return state;
  }
}

export function listEvents() {
  return {
    type: GET_EVENTS,
    payload: {
      request: {
        url: `/wp-json/sportspress/v2/events`
      }
    }
  };
}