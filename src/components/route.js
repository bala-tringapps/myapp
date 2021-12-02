import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './nav'
import Home from './home'
import About from './About'
import Booksearch from './booklist'
import Transaction from './transaction'

function Path() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/booklist' element={<Booksearch />} />
          <Route path='/transaction' element={<Transaction />} />
        </Routes>
      </div>
    </Router>
  )
}

export default Path
