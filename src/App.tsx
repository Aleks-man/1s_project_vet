import { useState } from 'react'
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom'
import { CallbackModal } from './components/CallbackModal'
import { Header } from './components/Header'
import { ScrollToTop } from './components/ScrollToTop'
import { CatalogPage } from './pages/CatalogPage'
import { ContactsPage } from './pages/ContactsPage'
import { LandingPage } from './pages/LandingPage'
import { ProductPage } from './pages/ProductPage'
import { ServicesPage } from './pages/ServicesPage'
import './App.css'

type AppProps = {
  router?: 'browser' | 'memory'
  location?: string
}

function AppShell() {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false)

  return (
    <>
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
    </>
  )
}

function App({ router = 'browser', location = '/' }: AppProps) {
  if (router === 'memory') {
    return (
      <MemoryRouter initialEntries={[location]}>
        <AppShell />
      </MemoryRouter>
    )
  }

  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
