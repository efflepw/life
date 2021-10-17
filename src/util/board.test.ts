import *  as CNSTS from '../consts/common'
import { emptyBoard, fillBoard, isBoardFilled } from './board'

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
    test('1 element', () => {
        const board = [[0,0,0],[0,0,0],[0,0,0]]
        const boardToBe = [[0,0,0],[0,1,0],[0,0,0]]

        expect(fillBoard(board, [{ x: 1, y: 1 }])).toEqual(boardToBe)
    })

    test('4 elements', () => {
        const board = [[0,0,0],[0,1,0],[0,0,0]]
        const boardToBe = [[0,1,0],[1,1,1],[0,1,0]]

        expect(fillBoard(board, [{ x: 0, y: 1 }, { x: 1, y: 0 }, { x: 1, y: 2 }, { x: 2, y: 1 }])).toEqual(boardToBe)
    })

    test('element out of table #1', () => {
        const board = [[0,0,0],[0,1,0],[0,0,0]]
        const boardToBe = [[0,0,0],[0,1,0],[0,0,0]]

        expect(fillBoard(board, [{ x: 3, y: 3 }])).toEqual(boardToBe)
    })

    test('element out of table #2', () => {
        const board = [[]]

        expect(fillBoard(board, [{ x: 0, y: 0 }])).toEqual(board)
        expect(fillBoard(board, [{ x: 1, y: 1 }])).toEqual(board)
    })

    test('is board filled', () => {
        const board1 = [[0,0,0],[0,0,0],[0,0,0]]
        const board2 = [[0,0,0],[0,1,0],[0,0,0]]
        const board3 = [[1,1,1],[1,1,1],[1,1,1]]

        expect(isBoardFilled(board1)).toBeFalsy()
        expect(isBoardFilled(board2)).toBeFalsy()
        expect(isBoardFilled(board3)).toBeTruthy()
    })
})