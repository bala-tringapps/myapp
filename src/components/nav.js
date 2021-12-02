import './css/nav.css'
import { Link } from 'react-router-dom'
import Home from './home'
function Navigation() {

  return (
    <div>
      <nav>
        <div className='topnav'>
          <ul>
            <Link to='/'>
              <li className='active'>Home</li>
            </Link>
            <Link to='/about'>
              <li>About</li>
            </Link>
            <Link to='/booklist'>
              <li>Book List</li>
            </Link>
            <Link to='/transaction'>
              <li>Transaction</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
