export const GET_STANDINGS = 'my-awesome-app/repos/LOAD';
export const GET_STANDINGS_SUCCESS = 'my-awesome-app/repos/LOAD_SUCCESS';
export const GET_STANDINGS_FAIL = 'my-awesome-app/repos/LOAD_FAIL';

export default function reducer(state = { standings: [] }, action) {
  switch (action.type) {
    case GET_STANDINGS:
      return { ...state, loading: true };
    case GET_STANDINGS_SUCCESS:
      return { ...state, loading: false, standings: action.payload.data };
    case GET_STANDINGS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching standings'
      };
    default:
      return state;
  }
}

export function listEvents() {
  return {
    type: GET_STANDINGS,
    payload: {
      request: {
        url: `/wp-json/sportspress/v2/tables`
      }
    }
  };
}