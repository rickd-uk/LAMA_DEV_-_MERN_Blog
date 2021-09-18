import { Link } from 'react-router-dom'
import './topbar.css'

export default function TopBar() {
  const user = false
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className='topIcon fab fa-facebook-square'></i>
        <i className='topIcon fab fa-twitter-square'></i>
        <i className='topIcon fab fa-pinterest-square'></i>
        <i className='topIcon fab fa-instagram-square'></i>
      </div>

      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link to='/' className='link'>
              HOME
            </Link>
          </li>
          <li className='topListItem'>
            <Link to='/about' className='link'>
              ABOUT
            </Link>
          </li>
          <li className='topListItem'>
            <Link to='/contact' className='link'>
              CONTACT
            </Link>
          </li>
          <li className='topListItem'>
            <Link to='/write' className='link'>
              WRITE
            </Link>
          </li>
          <li className='topListItem'>{user && 'LOGOUT'}</li>
        </ul>
      </div>

      <div className='topRight'>
        {user ? (
          <img
            className='topImg'
            src='https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
            alt=''
          />
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/login'>
                LOGIN
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/register'>
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className='topSearchIcon fas fa-search'></i>
      </div>
    </div>
  )
}
