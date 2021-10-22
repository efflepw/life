import { FC } from 'react'
import { Button } from '../../Button'

const GameOption: FC<PropsType> = ({ shouldContinue, startLifeGame, stopLifeGame }) => {
    const startGame = () => {
        if (shouldContinue) {
            stopLifeGame()
        } else {
            startLifeGame()
        }
    }

    return (
        <div>
            <p>Place inital life ceils points on the board</p>
            <Button label={shouldContinue ? 'Stop' : 'Start'} click={startGame} />
        </div>
    )
}

export default GameOption

export type SidebarOptionStatePropsType = {
    shouldContinue: boolean
}
export type SidebarOptionDispatchPropsType = {
    startLifeGame: () => void
    stopLifeGame: () => void
}

type PropsType = SidebarOptionStatePropsType & SidebarOptionDispatchPropsType
