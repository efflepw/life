import { toggleGamePoint, countPointsAround } from './game'
import { PointType } from "../types/board"

describe('toggle game point: ', () => {
    const point1: PointType = { x: 0, y: 0 }
    const point2: PointType = { x: 0, y: 1 }
    const point3: PointType = { x: 1, y: 1 }
    
    test('points added successfully', () => {
        const points1 = [] as PointType[]
        const points2 = [point1] as PointType[]

        const pointsRes1 = [ point1 ] as PointType[]
        const pointsRes2 = [ point1, point2 ] as PointType[]

        expect(toggleGamePoint(points1, point1)).toEqual(expect.arrayContaining(pointsRes1))
        expect(toggleGamePoint(points2, point2)).toEqual(expect.arrayContaining(pointsRes2))
    })

    test('points toggled successfully', () => {
        const points1 = [ point1 ] as PointType[]
        const points2 = [ point1, point2, point3 ] as PointType[]

        const pointsRes1 = [ ] as PointType[]
        const pointsRes2 = [ point3, point1 ] as PointType[]

        expect(toggleGamePoint(points1, point1)).toEqual(expect.arrayContaining(pointsRes1))
        expect(toggleGamePoint(points2, point2)).toEqual(expect.arrayContaining(pointsRes2))
    })
})

describe('count points around', () => {
    const board1 = [[0,0,0],[0,0,0],[0,0,0],[0,0,0]]
    const board2 = [[0,0,0],[0,1,0],[0,0,0],[0,0,0]]
    const board3 = [[1,1,1],[1,1,1],[1,1,1],[1,1,1]]

    test('count points answer correct', () => {
        const point1 = { x: 1, y: 1 } as PointType
        const point2 = { x: 0, y: 0 } as PointType

        expect(countPointsAround(board1, point1)).toBe(0)
        expect(countPointsAround(board2, point1)).toBe(0)
        expect(countPointsAround(board2, point2)).toBe(1)
        expect(countPointsAround(board3, point1)).toBe(8)
        expect(countPointsAround(board3, point2)).toBe(3)
    })
})