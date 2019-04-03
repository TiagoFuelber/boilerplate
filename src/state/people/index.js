import { PEOPLE } from '../actionTypes';

const initialState = {
  list: [],
  next: null,
  previous: null
};

export const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case PEOPLE.UPDATE:
      return {
        ...state,
        list: action.data.results,
        next: action.data.next,
        previous: action.data.previous
      };

    default:
      return state;
  }
};

export default { peopleReducer };
