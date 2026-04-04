import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import WildlifeBanner from './components/WildlifeBanner/WildlifeBanner'
import Home from './pages/Home'
import Learning from './pages/Learning'
import HabitatLoss from './pages/HabitatLoss'
import UrbanWildlife from './pages/UrbanWildlife'
import HumaneCoexistence from './pages/HumaneCoexistence'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/learning/habitat-loss" element={<HabitatLoss />} />
        <Route path="/learning/urban-wildlife" element={<UrbanWildlife />} />
        <Route path="/learning/humane-coexistence" element={<HumaneCoexistence />} />
      </Routes>
      <Footer />
      <WildlifeBanner />
    </BrowserRouter>
  )
}
