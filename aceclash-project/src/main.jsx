import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AceclashApp } from './aceclashApp'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <AceclashApp/>
      </BrowserRouter>

    </Provider>
   
  </React.StrictMode>,
)
