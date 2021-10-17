import *  as CNSTS from '../consts/common'
import { BoardType, PointType } from '../types/board'

export const emptyBoard = (height:number, width:number) => {
    const squareOccupiedSpace = CNSTS.SQUARE_SIZE + CNSTS.SQUARE_MARGIN * 2

    if (height > squareOccupiedSpace && width > squareOccupiedSpace) {
        
        // maximum number of squares that fit on the screen
        const maxColumnsNumber = (height - CNSTS.HEADER_HEIGHT_PX) / squareOccupiedSpace
        const maxRowsNumber = width / squareOccupiedSpace
        
        // calculation of the maximum occupied space by squares in percents
        const heightPaddingRatio = (100 - CNSTS.VERTICAL_BOARD_PADDING_PERCENT) / 100
        const widthPaddingRatio = (100 - CNSTS.HORIZONTAL_BOARD_PADDING_PERCENT) / 100
        
        // calculation of the number of displayed squares according to space indents
        const columnsNumber = Math.floor(maxColumnsNumber * heightPaddingRatio)
        const rowsNumber = Math.floor( maxRowsNumber * widthPaddingRatio)
    
        const columnsArray = Array(columnsNumber).fill(0)
        const rowsArray = Array(rowsNumber).fill(0)
        
        const board = columnsArray.map(() => rowsArray.map(() => 0))
    
        return board
    } else {
        return [[]]
    }
}

export const fillBoard: fillBoardType = (board, points) => {
    
    points.forEach((p) => {
        if (p.x >= 0 && p.x < board.length && p.y >= 0 && p.y < board[0].length)        
        board[p.x][p.y] = 1
    })
    
    return board
}

export const isBoardFilled:isBoardFilledType = (board) => {
    const firstRowSum = board[0].reduce((ac, cv) => ac + cv , 0)
    const lastRowSum = board[board.length - 1].reduce((ac, cv) => ac + cv , 0)

    return firstRowSum === lastRowSum && firstRowSum === board.length
}

type fillBoardType = (board: BoardType, points: PointType[]) => BoardType
type isBoardFilledType = (board: BoardType) => boolean
