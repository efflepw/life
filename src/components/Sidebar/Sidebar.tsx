import { FC } from 'react'
// import SidebarButton from './SidebarButton'
import classes from './Sidebar.module.scss'

const SelectedOption = () => {
    return (
        <div className={classes.option}>
            <input type={'checkbox'} checked={true} />
            <span>Animation</span>
        </div>
    )
}

const Sidebar: FC = () => {
    // const [isShowed, setIsShowed] = useState<boolean>(false)
    // return <SidebarButton />

    return (
        <div className={classes.sidebar}>
            <SelectedOption />
        </div>
    )
}

export default Sidebar
