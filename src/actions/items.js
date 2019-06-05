import { setOptions } from './game'
import axios from 'axios'

export const FETCHING_ITEMS = 'FETCHING_ITEMS'
const fetchingItems = () => ({ type: FETCHING_ITEMS })

export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS'
const fetchItemsSuccess = () => ({ type: FETCH_ITEMS_SUCCESS })

export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE'
const fetchItemsFailure = () => ({ type: FETCH_ITEMS_FAILURE })

export const fetchItems = () => dispatch => {
  dispatch(fetchingItems())
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=4')
    .then(res => {
      dispatch(setOptions(mapResponseToOptions(res)))
      dispatch(fetchItemsSuccess())
    })
    .catch(error => {
      console.log(error)
      dispatch(fetchItemsFailure())
    })
}

const mapResponseToOptions = res => res.data.results.map((pokemon, index) => ({
  index,
  name: pokemon.name,
  imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
  isHighlighted: false
}))
