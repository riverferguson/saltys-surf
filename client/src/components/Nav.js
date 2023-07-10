import { Link } from 'react-router-dom'
import './index.css'

const Nav = ({ user }) => {
  
    return (
        <nav className="nav">

              <ul>
                  <li className='nav-link-wrapper'>
                  <Link to="/products"> Products </Link>
                  </li>
                  
                  <li className='nav-link-wrapper'>
                  <Link to="/cartitems"> Cart </Link>
                  </li>

                  <li className='nav-link-wrapper'>
                  <Link to={user ? "/signout" : "/signin"}>
                    {user ? "SignOut" : "SignIn"}
                    </Link>
                  </li>

                  <li className='nav-link-wrapper'>
                    <Link to="/signup">SignUp</Link>
                  </li>                                          
                  
              </ul>
          </nav>
        )
    }

export default Nav