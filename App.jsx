import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Portfolio from './main.jsx'
import ProjectPage from './ProjectPage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Portfolio />} />
                    <Route path="/portfolio/:id" element={<ProjectPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
