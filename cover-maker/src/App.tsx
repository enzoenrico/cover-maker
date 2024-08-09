import { NextUIProvider } from "@nextui-org/react"
import { Route, Routes, useNavigate } from "react-router-dom"

import Home from "./pages/Home"
import Notfound from "./pages/Notfound"

function App() {
    const navigate = useNavigate()

    return (
        <NextUIProvider navigate={navigate}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </NextUIProvider>
    )
}

export default App
