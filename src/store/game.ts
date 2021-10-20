import { InferActionsTypes, BaseThunkType } from './store'
import { boardActions } from './board'
import { PointType } from '../types/board'
import { toggleGamePoint } from '../util/game'
import { toggleBoardPoint } from '../util/board'

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
        case 'game/PLACE_POINT':
            return {
                ...state,
                placedPoints: toggleGamePoint(state.placedPoints, action.point),
            }
        default:
            return state
    }
}


export const gameActions = {
    setGameData: (data: Partial<GameInitialStateType>) => ({ type: 'game/SET_GAME_DATA', data } as const),
    placePoint: (point: PointType) => ({ type: 'game/PLACE_POINT', point } as const),
    setBoardData: boardActions.setBoardData
}


// thunks
export const lifeGame = (): ThunkType => async (dispatch, getState) => {

}

export const placeGamePoint = (point: PointType): ThunkType => async (dispatch, getState) => {
    const state = getState()
    const initialBoard = state.board.board
    const board = toggleBoardPoint([...initialBoard], point)

    dispatch(gameActions.placePoint(point))
    dispatch(gameActions.setBoardData({ board }))
}

export default gameReducer

// types
type GameInitialStateType = typeof initialState
type GameActionsTypes = InferActionsTypes<typeof gameActions>
type ThunkType = BaseThunkType<GameActionsTypes>
