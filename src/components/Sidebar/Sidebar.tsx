import { FC } from 'react'
import { HEADER_HEIGHT_PX } from '../../consts/common'
import { optionType, sidebarOptionTypesEnum } from '../../types/sidebar'
import { GameOption } from './GameOption'
import { AnimationOption } from './AnimationOption'
import { SidebarOption } from './SidebarOption'
import { Button } from '../Button'
import leftArrowIcon from '../../assets/icons/leftArrow.svg'
import classes from './Sidebar.module.scss'

const OPTIONS = [
    { type: sidebarOptionTypesEnum.Game, name: 'Game', component: GameOption },
    { type: sidebarOptionTypesEnum.Animation, name: 'Animation', component: AnimationOption },
] as optionType[]

const Sidebar: FC<PropsType> = ({ sidebarIsOpen, toogleSidebar, clearBoard }) => {
    if (sidebarIsOpen) {
        return (
            <div className={`${classes.sidebar}`}>
                <div className={classes.sidebarHeader}>
                    <Button label={'✕'} click={toogleSidebar} />
                </div>
                <div className={classes.sidebarOptions}>
                    {OPTIONS.map((opt) => (
                        <SidebarOption key={opt.type} option={opt} />
                    ))}
                </div>
                <div className={classes.sidebarFooter}>
                    <Button label={'Clear board'} click={clearBoard} />
                </div>
            </div>
        )
    } else {
        return (
            <div className={`${classes.sidebarClosed}`} style={{ height: HEADER_HEIGHT_PX }}>
                <Button label={'sidebar'} click={toogleSidebar} />
            </div>
        )
    }
}

export default Sidebar

export type SidebarOptionStatePropsType = { sidebarIsOpen: boolean }
export type SidebarOptionDispatchPropsType = { toogleSidebar: () => void; clearBoard: () => void }

type PropsType = SidebarOptionStatePropsType & SidebarOptionDispatchPropsType
