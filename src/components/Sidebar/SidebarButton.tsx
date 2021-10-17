import { FC } from 'react'
import leftArrow from '../../assets/icons/leftArrow.svg'
import classes from './Sidebar.module.scss'

const SidebarButton: FC = () => {
    return (
        <div className={classes.sidebarButton}>
            <img src={leftArrow} alt={'left arrow'} />
        </div>
    )
}

export default SidebarButton
