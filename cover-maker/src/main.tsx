import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <main className="dark text-foreground bg-background" >
            <App />
            </main>
        </BrowserRouter>
    </StrictMode>,
)
