import { BoardType, PointType } from "../types/board"
import { clearBoard, fillBoard } from "./board"

export const toggleGamePoint:toggleGamePointType = (points, point) => {
    if (points.find(p => p.x === point.x && p.y === point.y)) {
        return points.filter(p => !(p.x === point.x && p.y === point.y))
    } else {
        return [...points, point]
    }
}

const getPointsAround: getPointsAroundType = (point) => {
    const p = (x: number, y: number) => ({ x, y })
    
    const coordsToCheck = [
        p(-1, -1),
        p(-1, 0),
        p(-1, 1),
        p(0, -1),
        p(0, 1),
        p(1, -1),
        p(1, 0),
        p(1, 1)
    ]
    
    return coordsToCheck.map(pnt => ({ x: point.x + pnt.x, y: point.y + pnt.y }))
}

export const countPointsAround: countPointsAroundType = (board, point) => {
    const pointsAround = getPointsAround(point)
    const pointsAroundSum = pointsAround.reduce((ac, cv) => ac + (board[cv.x] && board[cv.x][cv.y] ? board[cv.x][cv.y] : 0), 0)

    return pointsAroundSum
}

export const lifeGameStep: liveGameType = (board, placedPoints) => {
    const pointsToPlace = [] as PointType[]
    const deadPointsToCheck = [] as PointType[]

    // finding all points to check by the life rules
    placedPoints.forEach((pp) => {
        const pointsAround = getPointsAround(pp)

        pointsAround.forEach((pa) => {
            const pointAlreadyWrited = deadPointsToCheck.find(ptc => ptc.x === pa.x && ptc.y === pa.y)
            const pointIsNotPlaced = placedPoints.find(ptc => ptc.x === pa.x && ptc.y === pa.y)

            if (!pointAlreadyWrited && !pointIsNotPlaced) {
                deadPointsToCheck.push(pa)
            }
        })
    })

    // checking alive points
    placedPoints.forEach(pp => {
        const pointsAround = countPointsAround(board, pp)

        if (pointsAround === 2 || pointsAround === 3) {
            pointsToPlace.push(pp)
        }
    })

    // checking dead points
    deadPointsToCheck.forEach(dp => {
        const pointsAround = countPointsAround(board, dp)

        if (pointsAround === 3) {
            pointsToPlace.push(dp)
        }
    })

    // board clearing
    const clearedBoard = clearBoard(board)
    
    // place on board new points
    const newBoard = fillBoard(clearedBoard, pointsToPlace)
    
    return newBoard
}

type toggleGamePointType = (points: PointType[], point: PointType) => PointType[]
type getPointsAroundType = (point: PointType) => PointType[]
type countPointsAroundType = (board: BoardType, point: PointType) => number
type liveGameType = (board: BoardType, placedPoints: PointType[]) => BoardType