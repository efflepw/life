import { connect } from 'react-redux'
import { boardActions } from '../../../store/board'
import { AppStateType } from '../../../store/store'
import { sidebarOptionTypesEnum } from '../../../types/sidebar'
import SidebarOption, {
    SidebarOptionStatePropsType,
    SidebarOptionDispatchPropsType,
    SidebarOptionOwnPropsType
} from './SidebarOption'

const mapStateToProps = (state: AppStateType) => ({
    openedOption: state.board.openedOption
})

const mapDispatchToProps = {
    setOpenedOption: (openedOption: sidebarOptionTypesEnum) => boardActions.setBoardData({ openedOption })
}

export default connect<SidebarOptionStatePropsType, SidebarOptionDispatchPropsType, SidebarOptionOwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(SidebarOption)
