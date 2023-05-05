import { HashRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import { HomePage } from './pages/HomePage'
import { DetailPage } from './pages/DetailPage'
import { NotFoundPage } from './pages/notFoundPage/NotFoundPage'

function App() {
  return (
    <main className="app-container">
      <section></section>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
      <section></section>
    </main>
  )
}

export default App
