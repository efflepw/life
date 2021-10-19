import { FC, useEffect } from 'react'
import { useWindowSize } from '../../hooks'
import { HEADER_HEIGHT_PX, SQUARE_SIZE, SQUARE_MARGIN } from '../../consts/common'
import classes from './Board.module.scss'
import { PointType } from '../../types/board'

const Square: FC<SquareType> = ({ value, click }) => {
    const squareSizeStyles = {
        width: SQUARE_SIZE,
        height: SQUARE_SIZE,
        border: `${SQUARE_MARGIN}px solid transparent`,
        backgroundClip: 'padding-box',
        backgroundColor: value ? '#fff' : '#000',
    }

    return <div className={classes.square} style={squareSizeStyles} onClick={click}></div>
}

const Board: FC<PropsType> = ({ board, createEmptyBoard, startBubbleAnimation }) => {
    const { height, width } = useWindowSize()

    const squares = board.map((bRow, rIdx) => (
        <div className={classes.row} key={rIdx}>
            {bRow.map((bSquare, squareIdx) => (
                <Square key={squareIdx} value={bSquare} click={() => startBubbleAnimation({ x: rIdx, y: squareIdx })} />
            ))}
        </div>
    ))

    useEffect(() => {
        createEmptyBoard(height, width)
    }, [height, width, createEmptyBoard])

    return (
        <div style={{ height: height - HEADER_HEIGHT_PX, width }} className={classes.container}>
            <div className={classes.boardContainer}>{squares}</div>
        </div>
    )
}

export default Board

export interface ArticleStateInterface {
    board: number[][]
}

export interface ArticleDispatchInterface {
    createEmptyBoard: (height: number, width: number) => void
    startBubbleAnimation: (startPoint: PointType) => void
}

type PropsType = ArticleStateInterface & ArticleDispatchInterface
type SquareType = {
    value: number
    click: () => void
}
