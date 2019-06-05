import { FETCH_ITEMS_FAILURE, FETCH_ITEMS_SUCCESS, FETCHING_ITEMS } from '../actions/items'

const initialState = {
  isFetching: false,
  hasItems: false,
  hasError: false
}

export const items = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_ITEMS:
      return {
        ...state,
        isFetching: true,
        hasItems: false,
        hasError: false
      }
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        hasItems: true
      }
    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        hasError: true
      }
    default:
      return state
  }
}
