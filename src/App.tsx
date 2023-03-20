import { BrowserRouter, HashRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import routes from './config/routes'
// import Home from './pages/Home'


function App() {

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        { routes.map((route: any, index: any)=>(
          <Route
            key={index}
            path={route.path}
            element={
              <route.component />
            }
            />
        )) }
      </Routes>
    </HashRouter>
  )
}

export default App
