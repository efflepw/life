import { Provider } from 'react-redux'
import { WindowSizeProvider } from './context'
import store from './store/store'
import { Header, Board, Sidebar } from './components'
import './App.scss'

const App = () => {
    return (
        <WindowSizeProvider>
            <Provider store={store}>
                <Header />
                <Board />
                <Sidebar />
            </Provider>
        </WindowSizeProvider>
    )
}

export default App
