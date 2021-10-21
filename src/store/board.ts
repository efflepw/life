import { sidebarOptionTypesEnum } from '../types/sidebar'
import { emptyBoard } from '../util/board'
import { InferActionsTypes, BaseThunkType } from './store'

// initial state
const initialState = {
    sidebarIsOpen: true,
    openedOption: sidebarOptionTypesEnum.Game,
    board: [[]] as number[][],
    cWidth: 0,
    cHeight: 0,
    maxSteps: 0
}

// reducer
const boardReducer = (state = initialState, action: BoardActionsTypes): BoardInitialStateType => {
    switch (action.type) {
        case 'board/SET_BOARD_DATA':
            return {
                ...state,
                ...action.data
            }
        case 'board/TOOGLE_SIDEBAR':
            return {
                ...state,
                sidebarIsOpen: !state.sidebarIsOpen
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
    toogleSidebar: () => ({ type: 'board/TOOGLE_SIDEBAR' } as const),
    refreshBoard: () => ({ type: 'board/REFRESH_BOARD' } as const),
}


// thunks
export const createEmptyBoard = (height: number, width: number): ThunkType => async (dispatch, getState) => {
    const boardState = getState().board
    
    if (boardState.cHeight !== height || boardState.cWidth !== width) {
        const board = emptyBoard(height, width)

        const maxSteps = board.length + board[0].length

        dispatch(boardActions.setBoardData({ cHeight: height, cWidth: width, board, maxSteps }))
    }        
}


export default boardReducer

// types
type BoardInitialStateType = typeof initialState
type BoardActionsTypes = InferActionsTypes<typeof boardActions>
type ThunkType = BaseThunkType<BoardActionsTypes>
