import { combinedReducers } from 'redux'
import todos from './todos'

const rootReducer = combinedReducers({
    todos
})

export default rootReducer