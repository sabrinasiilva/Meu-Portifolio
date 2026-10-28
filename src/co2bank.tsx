import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PreferencesProvider } from './context/Preferences'
import { CaseStudyPage } from './pages/CaseStudyPage'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PreferencesProvider page="case">
      <CaseStudyPage />
    </PreferencesProvider>
  </StrictMode>,
)
