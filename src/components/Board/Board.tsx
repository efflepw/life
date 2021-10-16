import { FC, useEffect } from 'react'
import { useWindowSize } from '../../hooks'
import { HEADER_HEIGHT_PX, SQUARE_SIZE, SQUARE_MARGIN } from '../../consts/common'
import classes from './Board.module.scss'

const Square = () => {
    const squareSizeStyles = {
        width: SQUARE_SIZE,
        height: SQUARE_SIZE,
        margin: `${SQUARE_MARGIN}px`,
    }

    return <div className={classes.square} style={squareSizeStyles}></div>
}

const Board: FC<PropsType> = ({ board, createEmptyBoard }) => {
    const { height, width } = useWindowSize()

    const squares = board.map((bRow, rIdx) => (
        <div className={classes.row} key={rIdx}>
            {bRow.map((bSquare, squareIdx) => (
                <Square key={squareIdx} />
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
}

type PropsType = ArticleStateInterface & ArticleDispatchInterface
