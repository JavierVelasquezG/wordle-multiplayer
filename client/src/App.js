import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/HomePage'
import Rooms from './pages/RoomsPage'
import Play from './pages/PlayPage'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/play" element={<Play />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
