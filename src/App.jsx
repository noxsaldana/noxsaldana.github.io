import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import WildlifeBanner from './components/WildlifeBanner/WildlifeBanner'
import Home from './pages/Home'
import Learning from './pages/Learning'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learning" element={<Learning />} />
      </Routes>
      <Footer />
      <WildlifeBanner />
    </BrowserRouter>
  )
}
