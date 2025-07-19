import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './page/inicio/App'
import RouterApp from './router/RouterApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>,
)
