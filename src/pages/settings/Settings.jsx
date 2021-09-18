import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>DeleteAccount</span>
        </div>

        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className='settingsProfilePic'>
            <img
              src='https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt=''
            />
            <label htmlFor='fileInput'>
              <i className='settingsProfilePicIcon far fa-user-circle'></i>
            </label>
            <input type='file' id='fileInput' />
          </div>
          <label>Username</label>
          <input type='text' placeholder='Jeff' />
          <label>Email</label>
          <input type='email' placeholder='jeff@email.com' />
          <label>Password</label>
          <input type='password' />
          <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
