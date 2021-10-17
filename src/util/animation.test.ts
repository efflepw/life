import { numbersBetween, pointsToFillBetweenPoints, makeBubbleAnimationStep } from './animation'

describe('bubble animation: ', () => {
    test('numbers between', () => {
        expect(numbersBetween(0, 3)).toEqual([1, 2])
        expect(numbersBetween(0, 1)).toEqual([])
        expect(numbersBetween(0, 5)).toEqual([1, 2, 3, 4])
    })

    test('points to fill between two points', () => {
        const p1 = { x: 0, y: 3 }
        const p2 = { x: 3, y: 0 }

        const res = [{ x: 1, y: 2 }, { x: 2, y: 1 }]

        expect(pointsToFillBetweenPoints(p1, p2)).toEqual(res)
    })

    test('bubble animation filling works', () => {
        const p = (x:number, y:number) => ({ x, y })
        
        const board = [[0, 0, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
        const boardRes = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]

        expect(makeBubbleAnimationStep(board, p(1, 1), 1)).toEqual(boardRes)
    })

    test('bubble animation with overboard points', () => {
        const p = (x:number, y:number) => ({ x, y })
        
        const board = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]
        const boardRes = [[1, 1, 1, 0], [1, 1, 1, 1], [1, 1, 1, 0], [0, 1, 0, 0]]

        expect(makeBubbleAnimationStep(board, p(1, 1), 2)).toEqual(boardRes)
    })
})
