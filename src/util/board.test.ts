import *  as CNSTS from '../consts/common'
import { emptyBoard, toggleBoardWithPoints, isBoardFilledWith, isBoardFilledWithSameValues } from './board'

describe('board creation: ', () => {
    test('3x3', () => {
        const heightPaddingRatio = (100 - CNSTS.VERTICAL_BOARD_PADDING_PERCENT) / 100
        const widthPaddingRatio = (100 - CNSTS.HORIZONTAL_BOARD_PADDING_PERCENT) / 100

        const boardToBe = [[0,0,0],[0,0,0],[0,0,0]]

        const boardHeight = Math.ceil(3 * (CNSTS.SQUARE_SIZE + CNSTS.SQUARE_MARGIN * 2) / heightPaddingRatio) + 50
        const boardWidth = Math.ceil(3 * (CNSTS.SQUARE_SIZE + CNSTS.SQUARE_MARGIN * 2) / widthPaddingRatio)

        expect(emptyBoard(boardHeight, boardWidth)).toEqual(boardToBe)
    }),
    test('1x1', () => {
        const heightPaddingRatio = (100 - CNSTS.VERTICAL_BOARD_PADDING_PERCENT) / 100
        const widthPaddingRatio = (100 - CNSTS.HORIZONTAL_BOARD_PADDING_PERCENT) / 100

        const boardToBe = [[0]]

        const boardHeight = Math.ceil(1 * (CNSTS.SQUARE_SIZE + CNSTS.SQUARE_MARGIN * 2) / heightPaddingRatio) + 50
        const boardWidth = Math.ceil(1 * (CNSTS.SQUARE_SIZE + CNSTS.SQUARE_MARGIN * 2) / widthPaddingRatio)

        expect(emptyBoard(boardHeight, boardWidth)).toEqual(boardToBe)
    })
})


describe('board filling', () => {
    const board1 = [[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
    const board2 = [[0,0,0],[0,1,0],[0,0,0],[0,0,0]]
    const board3 = [[1,1,1],[1,1,1],[1,1,1],[1,1,1]]    
    
    test('1 element', () => {
        const board = [[0,0,0],[0,0,0],[0,0,0]]
        const boardToBe = [[0,0,0],[0,1,0],[0,0,0]]

        expect(toggleBoardWithPoints(board, [{ x: 1, y: 1 }])).toEqual(boardToBe)
    })

    test('4 elements', () => {
        const board = [[0,0,0],[0,1,0],[0,0,0]]
        const boardToBe = [[0,1,0],[1,1,1],[0,1,0]]

        expect(toggleBoardWithPoints(board, [{ x: 0, y: 1 }, { x: 1, y: 0 }, { x: 1, y: 2 }, { x: 2, y: 1 }])).toEqual(boardToBe)
    })

    test('element out of table #1', () => {
        const board = [[0,0,0],[0,1,0],[0,0,0]]
        const boardToBe = [[0,0,0],[0,1,0],[0,0,0]]

        expect(toggleBoardWithPoints(board, [{ x: 3, y: 3 }])).toEqual(boardToBe)
    })

    test('element out of table #2', () => {
        const board = [[]]

        expect(toggleBoardWithPoints([...board], [{ x: 0, y: 0 }])).toEqual(board)
        expect(toggleBoardWithPoints([...board], [{ x: 1, y: 1 }])).toEqual(board)
    })

    test('is board filled with', () => {
        expect(isBoardFilledWith(board1, 0)).toBeTruthy()
        expect(isBoardFilledWith(board1, 1)).toBeFalsy()
        expect(isBoardFilledWith(board2, 0)).toBeFalsy()
        expect(isBoardFilledWith(board2, 1)).toBeFalsy()
        expect(isBoardFilledWith(board3, 0)).toBeFalsy()
        expect(isBoardFilledWith(board3, 1)).toBeTruthy()
    })

    test('is board filled with same value', () => {
        expect(isBoardFilledWithSameValues(board1)).toBeTruthy()
        expect(isBoardFilledWithSameValues(board2)).toBeFalsy()
        expect(isBoardFilledWithSameValues(board3)).toBeTruthy()
    })
})