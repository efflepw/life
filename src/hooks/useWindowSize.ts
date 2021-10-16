import { useContext } from 'react'
import { WindowSizeContext } from '../context/WindowSizeContext'

const useWindowSize = () => {
    return useContext(WindowSizeContext)
}

export default useWindowSize
