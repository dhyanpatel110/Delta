import React from 'react'
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home'
import SignUp from './pages/SignupPage'
import Pricing from './pages/PricingPage'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/pricing" exact component={Pricing} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
