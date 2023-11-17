import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AceclashApp } from './aceclashApp'
import { store } from './store'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AceclashApp/>
      </BrowserRouter>

    </Provider>
   
  </React.StrictMode>,
)
