import { FC } from 'react'
import { SQUARE_SIZE, SQUARE_MARGIN } from '../../consts/common'
import classes from './Board.module.scss'

const Square: FC<SquareType> = ({ value, click }) => {
    const squareSizeStyles = {
        width: SQUARE_SIZE,
        height: SQUARE_SIZE,
        border: `${SQUARE_MARGIN}px solid transparent`,
        backgroundClip: 'padding-box',
        backgroundColor: value ? '#fff' : '#000',
    }

    return <div className={classes.square} style={squareSizeStyles} onClick={click}></div>
}

export default Square

interface SquareType {
    value: number
    click: () => void
}
