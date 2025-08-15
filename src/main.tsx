import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App' // මේක homepage එක වෙන්න පුළුවන්
import FeaturesPage from './pages/FeaturesPage' // මේක features පිටුව
import AboutPage from './pages/AboutPage' // මේක about පිටුව
import './index.css' // Tailwind CSS styles

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* ඔබට තවත් pages අවශ්‍ය නම්, මෙතනට Route එකක් දාන්න පුළුවන් */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)