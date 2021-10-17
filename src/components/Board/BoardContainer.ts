import { connect } from 'react-redux'
import { createEmptyBoard } from '../../store/board'
import { startBubbleAnimation } from '../../store/animation'
import { AppStateType } from '../../store/store'
import Board from './Board'

const mapStateToProps = (state: AppStateType) => ({
    board: state.board.board,
    step: state.animation.step
})

export default connect(mapStateToProps, { createEmptyBoard, startBubbleAnimation })(Board)
