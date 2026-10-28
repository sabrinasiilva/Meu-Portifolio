import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PreferencesProvider } from './context/Preferences'
import { HomePage } from './pages/HomePage'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PreferencesProvider page="home">
      <HomePage />
    </PreferencesProvider>
  </StrictMode>,
)
