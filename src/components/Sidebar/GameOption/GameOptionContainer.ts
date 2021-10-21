import { connect } from 'react-redux'
import { startLifeGame, stopLifeGame } from '../../../store/game'
import { AppStateType } from '../../../store/store'
import GameOption, { SidebarOptionStatePropsType, SidebarOptionDispatchPropsType } from './GameOption'

const mapStateToProps = (state: AppStateType) => ({
    shouldContinue: state.game.shouldContinue
})

const mapDispatchToProps = {
    startLifeGame,
    stopLifeGame
}

export default connect<SidebarOptionStatePropsType, SidebarOptionDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(GameOption)
