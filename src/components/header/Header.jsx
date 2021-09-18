import './header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>All Things</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img
        className='headerImg'
        src='https://www.gettingsmart.com/wp-content/uploads/2016/12/Woman-Typing-Blog-Post-on-Laptop-Computer-Feature-Image.jpg'
        alt=''
      />
    </div>
  )
}
