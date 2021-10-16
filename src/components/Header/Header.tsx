import { HEADER_HEIGHT_PX } from '.././../consts/common'
import classes from './Header.module.scss'

const Header = () => {
    return <header style={{ height: HEADER_HEIGHT_PX }} className={classes.container}></header>
}

export default Header
