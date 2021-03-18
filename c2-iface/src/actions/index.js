import plans from "../apis/plans";
import {FETCH_PLANS, SEARCH_PLANS} from "./types";

export const fetchPlans = () => async dispatch => {
 const res = await plans.get('/');
 dispatch({
     type: FETCH_PLANS,
     payload: res.data
 });
};

export const searchPlans = term => async dispatch => {
  const res = await plans.get(`?q=${term}`);
    dispatch({
    type: SEARCH_PLANS,
    payload: {
        items: res.data,
        term,
    },
  });
};
