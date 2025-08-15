import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App' // ඔබේ Homepage එක
import FeaturesPage from './pages/FeaturesPage' // Features පිටුව
import AboutPage from './pages/AboutPage' // About පිටුව
import LoginPage from './pages/login' // ඔබේ Login පිටුව
import './index.css' // Tailwind CSS styles

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)