import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import categoryReducer from '../reducers/categoryReducer'
import singleCategoryReducer from '../reducers/singleCategoryReducer'
import noteReducer from '../reducers/noteReducer'
import singleNoteReducer from '../reducers/singleNoteReducer'


const configureStore=()=>{
    const store=createStore(combineReducers({
        categories:categoryReducer,
        singleCategory:singleCategoryReducer,
        notes:noteReducer,
        singleNote:singleNoteReducer

    }),applyMiddleware(thunk))
    return store
}

export default configureStore