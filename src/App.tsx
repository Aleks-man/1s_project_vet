import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { CatalogPage } from './pages/CatalogPage'
import { ContactsPage } from './pages/ContactsPage'
import { LandingPage } from './pages/LandingPage'
import { ServicesPage } from './pages/ServicesPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
