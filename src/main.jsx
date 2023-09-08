import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/favs" element={<Favs/>}/>
        <Route path="/dentist/:id" element={<Detail/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
