import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FirstComponent from './components/FirstComponent'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App  value={100} />
    {/* <FirstComponent title='Hi, I am Bryan' /> */}
  </React.StrictMode>
)
