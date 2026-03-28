import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Desktop from './Desktop/Desktop';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Desktop />
  </StrictMode>,
)
