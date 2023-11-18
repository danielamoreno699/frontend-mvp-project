import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { AceclashApp } from './aceclashApp'
import { Provider } from 'react-redux'
import { store } from '../src/store/store'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AceclashApp/>
      </BrowserRouter>
    </Provider>
   
   
  </React.StrictMode>,
)
