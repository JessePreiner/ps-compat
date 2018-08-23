export const GET_EVENTS = 'psapp/events/LOAD';
export const GET_EVENTS_SUCCESS = 'psapp/events/LOAD_SUCCESS';
export const GET_EVENTS_FAIL = 'psapp/events/LOAD_FAIL';

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
        error: 'Error while fetching events'
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
        url: `https://soccer.playsask.com/wp-json/sportspress/v2/events`
      }
    }
  };
}