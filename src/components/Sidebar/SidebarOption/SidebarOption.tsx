import { FC } from 'react'
import { optionType, sidebarOptionTypesEnum } from '../../../types/sidebar'
import classes from '../Sidebar.module.scss'

const SidebarOption: FC<PropsType> = ({ option, openedOption, setOpenedOption }) => {
    const isOpened = openedOption === option.type
    const Content = option.component

    const headerClick = () => {
        setOpenedOption(option.type)
    }

    return (
        <div className={classes.sidebarOption}>
            <div onClick={headerClick}>
                <h3>{option.name}</h3>
            </div>
            {isOpened && <Content />}
        </div>
    )
}

export default SidebarOption

export type SidebarOptionStatePropsType = { openedOption: sidebarOptionTypesEnum }
export type SidebarOptionDispatchPropsType = { setOpenedOption: (openedOption: sidebarOptionTypesEnum) => void }
export type SidebarOptionOwnPropsType = { option: optionType }

type PropsType = SidebarOptionStatePropsType & SidebarOptionDispatchPropsType & SidebarOptionOwnPropsType
