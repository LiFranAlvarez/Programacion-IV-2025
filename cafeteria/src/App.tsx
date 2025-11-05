import React from 'react'
import { Menu } from './components/menu'

const App: React.FC = () => {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>☕ Cafetería Digital</h1>
      <Menu />
    </main>
  )
}

export default App