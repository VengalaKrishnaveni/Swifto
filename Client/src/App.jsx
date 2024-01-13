import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import CustomerRegistration from './Components/CustomerRegistration'
import Providers from './Components/Providers'
import ProviderRegistration from './Components/ProviderRegistration'
import Login from './Components/Login'
import RegistrationLanding from './Components/RegistrationLanding'

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* home & Services */}
          <Route path="/" element={<Home />} />
          <Route path="/providers" element={<Providers />} />

          <Route path="/RegistrationLanding" element={<RegistrationLanding/>} />

          {/* login and signup */}
          <Route path="/login" element={<Login />} />
          <Route path="/CustomerRegistration" element={<CustomerRegistration />} />
          {/* about and contact */}
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          {/* register service center/ mechanic and book swifto */}
          <Route path="/ProviderRegistration" element={<ProviderRegistration />} />
          <Route path="/book" element={<h1>Booked</h1>} />

        </Routes>  
      </Router>

    </>
  )
}

export default App
