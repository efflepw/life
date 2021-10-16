import { connect } from 'react-redux'
import { createEmptyBoard } from '../../store/board'
import { AppStateType } from '../../store/store'
import Board from './Board'

const mapStateToProps = (state: AppStateType) => ({
    board: state.board.board
})

export default connect(mapStateToProps, { createEmptyBoard })(Board)
