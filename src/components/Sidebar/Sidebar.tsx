import { FC } from 'react'
import { HEADER_HEIGHT_PX } from '../../consts/common'
import { optionType, sidebarOptionTypesEnum } from '../../types/sidebar'
import { GameOption } from './GameOption'
import { AnimationOption } from './AnimationOption'
import { SidebarOption } from './SidebarOption'
import leftArrowIcon from '../../assets/icons/leftArrow.svg'
import classes from './Sidebar.module.scss'

const OPTIONS = [
    { type: sidebarOptionTypesEnum.Game, name: 'Game', component: GameOption },
    { type: sidebarOptionTypesEnum.Animation, name: 'Animation', component: AnimationOption },
] as optionType[]

const Sidebar: FC<PropsType> = ({ sidebarIsOpen, toogleSidebar }) => {
    if (sidebarIsOpen) {
        return (
            <div className={`${classes.sidebar}`}>
                {OPTIONS.map((opt) => (
                    <SidebarOption key={opt.type} option={opt} />
                ))}
            </div>
        )
    } else {
        return (
            <div className={`${classes.sidebarClosed}`} style={{ height: HEADER_HEIGHT_PX }} onClick={toogleSidebar}>
                <img src={leftArrowIcon} alt={'open sidebar'} />
                <p>sidebar</p>
            </div>
        )
    }
}

export default Sidebar

export type SidebarOptionStatePropsType = { sidebarIsOpen: boolean }
export type SidebarOptionDispatchPropsType = { toogleSidebar: () => void }

type PropsType = SidebarOptionStatePropsType & SidebarOptionDispatchPropsType
