import *  as CNSTS from '../consts/common'

export const emptyBoard = (height:number, width:number) => {
    if (height > 0 && width > 0) {
        const squareOccupiedSpace = CNSTS.SQUARE_SIZE + CNSTS.SQUARE_MARGIN * 2
        
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


