import { HashRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import { HomePage } from './pages/home/HomePage'
import { DetailPage } from './pages/detail/DetailPage'
import { NotFoundPage } from './pages/notFound/NotFoundPage'
import { Header } from './shared/components/header/Header'

function App() {
  return (
    <main className="app-container">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </main>
  )
}

export default App
