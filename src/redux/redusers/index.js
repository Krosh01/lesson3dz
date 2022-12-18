import {combineReducers} from 'redux'
import todos from './todo'

const rootReducer = (initialState) => combineReducers ({
    todos
})

export default rootReducer