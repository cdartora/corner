import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import SettingsProvider from './context/settingsProvider';
import RadioProvider from './context/radioProvider';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SettingsProvider>
      <RadioProvider>
        <App />
      </RadioProvider>
    </SettingsProvider>
  </React.StrictMode>
)
