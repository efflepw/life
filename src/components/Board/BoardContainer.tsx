import { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { useWindowSize } from '../../hooks'
import { createEmptyBoard } from '../../store/board'
import { startBubbleAnimation } from '../../store/animation'
import { placeGamePoint } from '../../store/game'
import { AppStateType } from '../../store/store'
import { PointType } from '../../types/board'
import { HEADER_HEIGHT_PX } from '../../consts/common'
import Board from './Board'

const BoardContainer: FC<PropsType> = ({ board, createEmptyBoard, startBubbleAnimation, placeGamePoint }) => {
    const { height, width } = useWindowSize()
    const boardSizeStyles = { height: `${height - HEADER_HEIGHT_PX}px`, width: `${width}px` }

    const boardClick = (point: PointType) => {
        placeGamePoint(point)
    }

    // create new board for current window dimension
    useEffect(() => {
        createEmptyBoard(height, width)
    }, [height, width, createEmptyBoard])

    return <Board board={board} boardSizeStyles={boardSizeStyles} boardClick={boardClick} />
}

const mapStateToProps = (state: AppStateType): ArticleStateInterface => ({
    board: state.board.board,
})

export default connect(mapStateToProps, { createEmptyBoard, startBubbleAnimation, placeGamePoint })(BoardContainer)

export interface ArticleStateInterface {
    board: number[][]
}
export interface ArticleDispatchInterface {
    createEmptyBoard: (height: number, width: number) => void
    startBubbleAnimation: (startPoint: PointType) => void
    placeGamePoint: (point: PointType) => void
}

type PropsType = ArticleStateInterface & ArticleDispatchInterface
