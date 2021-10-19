import { InferActionsTypes, BaseThunkType } from './store'
import { boardActions } from './board'
import { PointType } from '../types/board'

// initial state
const initialState = {
    placedPoints: [] as PointType[],
    step: 0,
}


// reducer
const gameReducer = (state = initialState, action: GameActionsTypes): GameInitialStateType => {
    switch (action.type) {
        case 'game/SET_GAME_DATA':
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}


export const gameActions = {
    setGameData: (data: Partial<GameInitialStateType>) => ({ type: 'game/SET_GAME_DATA', data } as const),
    setBoardData: boardActions.setBoardData
}


// thunks
export const lifeGame = (): ThunkType => async (dispatch, getState) => {
    // const state = getState()
    // const board = state.board.board
    // const points = state.game.placedPoints

    
}

export default gameReducer

// types
type GameInitialStateType = typeof initialState
type GameActionsTypes = InferActionsTypes<typeof gameActions>
type ThunkType = BaseThunkType<GameActionsTypes>
