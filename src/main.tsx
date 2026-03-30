import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './Pages/Home/Home';
import Desktop from './Pages/Desktop/Desktop';
import NotFound from './Pages/NotFound/NotFound';
import './styles/variables.scss'
import './styles/styles.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='light-theme'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='desktop' element={<Desktop />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
    </div>
  </StrictMode>,
)
