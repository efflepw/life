import { FC, ReactNode } from 'react'
import { useState, useEffect, createContext } from 'react'

export const WindowSizeContext = createContext({ height: 0, width: 0 })

export const WindowSizeProvider: FC<PropsType> = ({ children }) => {
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)

    const updateWindowDimensions = () => {
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        updateWindowDimensions()
        window.addEventListener('resize', updateWindowDimensions)

        return () => {
            window.removeEventListener('resize', updateWindowDimensions)
        }
    })

    return <WindowSizeContext.Provider value={{ height, width }}>{children}</WindowSizeContext.Provider>
}

type PropsType = {
    children: ReactNode
}
