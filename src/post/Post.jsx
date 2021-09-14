import './post.css'

export default function Post() {
  return (
    <div className='post'>
      <img
        className='postImg'
        src='https://images.pexels.com/photos/4185872/pexels-photo-4185872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
        alt=''
      />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>
          Lorem, ipsum dolor sit amet consectetur
        </span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <div className='postDesc'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, fugiat
        magni aliquid minima eum maiores reiciendis quos commodi possimus,
        pariatur amet iure asperiores, esse at impedit numquam eos debitis vero.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, fugiat
        magni aliquid minima eum maiores reiciendis quos commodi possimus,
        pariatur amet iure asperiores, esse at impedit numquam eos debitis vero
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, fugiat
        magni aliquid minima eum maiores reiciendis quos commodi possimus,
        pariatur amet iure asperiores, esse at impedit numquam eos debitis vero
      </div>
    </div>
  )
}
