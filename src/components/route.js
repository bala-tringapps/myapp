import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './nav'
import About from './About'
import Booksearch from './booklist'
import Transaction from './transaction'

function Path() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path='/about' element={<About/>} />
          <Route path='/transaction' element={<Transaction/>} />
          <Route path='/booksearch' element={<Booksearch/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default Path