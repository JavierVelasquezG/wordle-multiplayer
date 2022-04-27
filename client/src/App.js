import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/HomePage'
import Rooms from './pages/RoomsPage'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rooms" element={<Rooms />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
