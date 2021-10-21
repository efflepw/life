import { connect } from 'react-redux'
import { AppStateType } from '../../store/store'
import Sidebar, { SidebarOptionStatePropsType, SidebarOptionDispatchPropsType } from './Sidebar'
import { boardActions } from '../../store/board'

const mapStateToProps = (state: AppStateType) => ({
    sidebarIsOpen: state.board.sidebarIsOpen
})

const mapDispatchToProps = {
    toogleSidebar: boardActions.toogleSidebar
}

export default connect<SidebarOptionStatePropsType, SidebarOptionDispatchPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Sidebar)