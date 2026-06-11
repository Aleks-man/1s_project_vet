import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CallbackModal } from './components/CallbackModal'
import { Header } from './components/Header'
import { ScrollToTop } from './components/ScrollToTop'
import { CatalogPage } from './pages/CatalogPage'
import { ContactsPage } from './pages/ContactsPage'
import { LandingPage } from './pages/LandingPage'
import { ProductPage } from './pages/ProductPage'
import { ServicesPage } from './pages/ServicesPage'
import './App.css'

function App() {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false)

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage onCallbackRequest={() => setIsCallbackOpen(true)} />} />
        <Route path="/catalog" element={<CatalogPage onCallbackRequest={() => setIsCallbackOpen(true)} />} />
        <Route path="/catalog/:slug" element={<ProductPage onCallbackRequest={() => setIsCallbackOpen(true)} />} />
        <Route path="/services" element={<ServicesPage onCallbackRequest={() => setIsCallbackOpen(true)} />} />
        <Route path="/contacts" element={<ContactsPage onCallbackRequest={() => setIsCallbackOpen(true)} />} />
      </Routes>
      <CallbackModal isOpen={isCallbackOpen} onClose={() => setIsCallbackOpen(false)} />
    </BrowserRouter>
  )
}

export default App
