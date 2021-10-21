import { InferActionsTypes, BaseThunkType } from './store'
import { boardActions } from './board'
import { PointType } from '../types/board'
import { lifeGameStep, toggleGamePoint } from '../util/game'
import { isBoardFilledWithSameValues, toggleBoardPoint } from '../util/board'

// initial state
const initialState = {
    placedPoints: [] as PointType[],
    shouldContinue: false,
    timeout: 100
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
    setBoardData: boardActions.setBoardData,
    toogleSidebar: boardActions.toogleSidebar,
}


// thunks
export const lifeGame = (): ThunkType => async (dispatch, getState) => {
    const state = getState()
    const initialBoard = state.board.board
    const gameState = state.game

    const board = lifeGameStep(initialBoard, gameState.placedPoints)
    const isBoardFilledRes = isBoardFilledWithSameValues(board)

    if (isBoardFilledRes) {
        dispatch(gameActions.setGameData({ shouldContinue: false }))
        dispatch(gameActions.setBoardData({ board }))
    } else if (gameState.shouldContinue) {
        dispatch(gameActions.setBoardData({ board }))
        setTimeout(() => dispatch(lifeGame()), gameState.timeout)
    }
}

export const startLifeGame = (): ThunkType => async (dispatch, getState) => {
    const state = getState()

    if (state.game.placedPoints.length) {
        dispatch(gameActions.setGameData({ shouldContinue: true }))
        dispatch(lifeGame())
        dispatch(gameActions.toogleSidebar())
    }
}

export const stopLifeGame = (): ThunkType => async (dispatch) => {
    dispatch(gameActions.setGameData({ shouldContinue: false }))
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
