import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/home'
import Signup from './Components/Signup'
import Providers from './Components/Providers'
import Register from './Components/Register'
import Login from './Components/Login'

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* home & Services */}
          <Route path="/" element={<Home />} />
          <Route path="/providers" element={<Providers />} />
          {/* login and signup */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* about and contact */}
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          {/* register service center/ mechanic and book swifto */}
          <Route path="/register" element={<Register />} />
          <Route path="/book" element={<h1>Booked</h1>} />

        </Routes>  
      </Router>

    </>
  )
}

export default App
