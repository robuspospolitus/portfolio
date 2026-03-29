import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Desktop from './Desktop/Desktop';
import './styles/variables.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='light-theme'>
      <Desktop />
    </div>
  </StrictMode>,
)
