import { createStore, combineReducers, compose, applyMiddleware, Action } from 'redux'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'

import boardReducer from './board'

let reducers = combineReducers({
    board: boardReducer,
})


export type AppStateType = ReturnType<typeof reducers>
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store