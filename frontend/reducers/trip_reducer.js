import merge from 'lodash/merge';

import {
  RECEIVE_TRIPS,
  RECEIVE_TRIP,
  RECEIVE_TRIP_ERRORS,
  CLEAR_TRIP_ERRORS
} from '../actions/trip_actions';

const defaultState = {
  entities: {},
  currentTrip: null,
  errors: {}
};


const tripReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_TRIPS:
      // return merge(newState, { entities: action.trips });
      return merge({}, defaultState, { entities: action.trips })

    case RECEIVE_TRIP:
      return merge( newState, state, {
        entities: { [action.trip.id]: action.trip },
        currentTrip: action.trip.id
      });

    case RECEIVE_TRIP_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors: action.errors
      });

    case CLEAR_TRIP_ERRORS:
      const newState =  merge({}, state);
      newState.errors = {};
      return newState;

    default:
      return state;
  }

};

export default tripReducer;
