import {FETCH_PLANS, SEARCH_PLANS} from "../actions/types";
import _ from 'lodash';

export const plansReducer = (state = {}, action) => {
  const {type, payload} = action;

  if (type === FETCH_PLANS) {
      return {...state, ..._.mapKeys(payload, 'id')};
  } else if (type === SEARCH_PLANS) {
      const {items, term} = payload;
      const filteredPayload = items.filter(i => {
          return i.name.includes(term) || i.description.includes(term);
      });
      return _.mapKeys(filteredPayload, 'id');
  }

  return state;
};
