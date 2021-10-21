import { FC } from 'react'

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

            <button onClick={startGame}>{shouldContinue ? 'Stop' : 'Start'}</button>
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
