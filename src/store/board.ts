import { emptyBoard } from '../util/board'
import { InferActionsTypes, BaseThunkType } from './store'


// initial state
const initialState = {
    board: [[]] as number[][],
    cWidth: 0,
    cHeight: 0,
}


// reducer
const boardReducer = (state = initialState, action: BoardActionsTypes): BoardInitialStateType => {
    switch (action.type) {
        case 'board/SET_BOARD_DATA':
            return {
                ...state,
                ...action.data
            }
        case 'board/REFRESH_BOARD':
            return {
                ...initialState
            }
        default:
            return state
    }
}


export const boardActions = {
    setBoardData: (data: Partial<BoardInitialStateType>) => ({ type: 'board/SET_BOARD_DATA', data } as const),
    refreshBoard: () => ({ type: 'board/REFRESH_BOARD' } as const)
}


// thunks
export const createEmptyBoard = (height: number, width: number): ThunkType => async (dispatch, getState) => {
    const boardState = getState().board
    
    if (boardState.cHeight !== height || boardState.cWidth !== width) {
        const board = emptyBoard(height, width)

        dispatch(boardActions.setBoardData({ cHeight: height, cWidth: width, board }))
    }        
    
}


export default boardReducer

// types
type BoardInitialStateType = typeof initialState
type BoardActionsTypes = InferActionsTypes<typeof boardActions>
type ThunkType = BaseThunkType<BoardActionsTypes>
