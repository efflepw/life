import { FC } from 'react'
import { BoardType, PointType } from '../../types/board'
import Square from './Square'
import classes from './Board.module.scss'

const Board: FC<PropsType> = ({ board, boardSizeStyles, boardClick }) => {
    const squares = board.map((bRow, rIdx) => (
        <div className={classes.row} key={rIdx}>
            {bRow.map((bSquare, squareIdx) => (
                <Square key={squareIdx} value={bSquare} click={() => boardClick({ x: rIdx, y: squareIdx })} />
            ))}
        </div>
    ))

    return (
        <div style={boardSizeStyles} className={classes.container}>
            <div className={classes.boardContainer}>{squares}</div>
        </div>
    )
}

export default Board

interface PropsType {
    board: BoardType
    boardSizeStyles: { height: string; width: string }
    boardClick: (point: PointType) => void
}
