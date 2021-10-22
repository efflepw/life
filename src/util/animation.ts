import { BoardType, PointType } from '../types/board'
import { toggleBoardWithPoints } from './board'

// creating an array of numbers that are in a given limits
export const numbersBetween:numbersBetweenType = (c1, c2) => {
    const nums = []
    
    if (c1 < c2) {
    	for (let i = c1 + 1; i < c2; i++) nums.push(i)
    } else {
    	for (let i = c1 - 1; i > c2; i--) nums.push(i)
    }

    return nums
}

// creating an array of points that are between two points
export const pointsToFillBetweenPoints:pointsToFillBetweenPointsType = (p1, p2) => {
    const xV = numbersBetween(p1.x, p2.x)
    const yV = numbersBetween(p1.y, p2.y)
    const points = []
    
    for(let i = 0; i < xV.length; i++) {
        points.push({ x: xV[i], y: yV[i] })
    }
  
    return points
}

export const makeBubbleAnimationStep: bubbleAnimationType = (board, startPoint, step) => {
    // finding current step animation borders points
    const topPoint = { x: startPoint.x, y: startPoint.y + step }
    const rightPoint = { x: startPoint.x + step, y: startPoint.y }
    const bottomPoint = { x: startPoint.x, y: startPoint.y - step}
    const leftPoint = { x: startPoint.x - step, y: startPoint.y }

    // connecting border points into line
    const toFillTopRight = pointsToFillBetweenPoints(topPoint, rightPoint)
    const toFillRightBottom = pointsToFillBetweenPoints(rightPoint, bottomPoint)
    const toFillBottomLeft = pointsToFillBetweenPoints(bottomPoint, leftPoint)
    const toFillLeftTop = pointsToFillBetweenPoints(leftPoint, topPoint)

    const pointsToFill = [...toFillBottomLeft, ...toFillLeftTop, ...toFillTopRight, ...toFillRightBottom, topPoint, rightPoint, bottomPoint, leftPoint]

    const filledBoard = toggleBoardWithPoints([...board], pointsToFill)

    return filledBoard
}

type numbersBetweenType = (c1:number, c2:number) => number[]
type pointsToFillBetweenPointsType = (p1:PointType, p2:PointType) => PointType[]
type bubbleAnimationType = (board:BoardType, startPoint: PointType, step:number) => BoardType 