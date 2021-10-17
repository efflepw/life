import { InferActionsTypes, BaseThunkType } from './store'
import { boardActions } from './board'
import { fillBoard, isBoardFilled } from '../util/board'
import { makeBubbleAnimationStep } from '../util/animation'
import { PointType } from '../types/board'

// initial state
const initialState = {
    startPoint: null as PointType | null,
    step: 0,
}


// reducer
const animationReducer = (state = initialState, action: AnimationActionsTypes): AnimationInitialStateType => {
    switch (action.type) {
        case 'animation/SET_ANIMATION_DATA':
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}


export const animationActions = {
    setAnimationData: (data: Partial<AnimationInitialStateType>) => ({ type: 'animation/SET_ANIMATION_DATA', data } as const),
    setBoardData: boardActions.setBoardData
}


// thunks
export const bubbleAnimation = (startPoint: PointType, step: number): ThunkType => async (dispatch, getState) => {
    const initialBoard  = getState().board.board
    const board = makeBubbleAnimationStep(initialBoard, startPoint, step)
    dispatch(animationActions.setBoardData({ board }))
    dispatch(animationActions.setAnimationData({ step }))

    if (step < 120) {
        setTimeout(() => {
            dispatch(bubbleAnimation(startPoint, step + 1))
        }, 1)
    } else {
        console.log(isBoardFilled(board), board)
    }
}

export const startBubbleAnimation = (startPoint: PointType): ThunkType => async (dispatch, getState) => {
    const initialBoard = getState().board.board

    const board = fillBoard(initialBoard, [ startPoint ])
    
    dispatch(animationActions.setBoardData({ board }))
    dispatch(animationActions.setAnimationData({ startPoint, step: 0 }))

    dispatch(bubbleAnimation(startPoint, 1))
}

export default animationReducer

// types
type AnimationInitialStateType = typeof initialState
type AnimationActionsTypes = InferActionsTypes<typeof animationActions>
type ThunkType = BaseThunkType<AnimationActionsTypes>
