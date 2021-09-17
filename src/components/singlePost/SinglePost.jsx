import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img
          src='https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
          alt=''
          className='singlePostImg'
        />
        <h1 className='singlePostTitle'>
          Ice Hotel
          <div className='singlePostEdit'>
            <i className='singlePostIcon far fa-edit'></i>
            <i className='singlePostIcon far fa-trash-alt'></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author: <b>Rick</b>
          </span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, iste
          consequuntur perferendis dolores quisquam odit temporibus quibusdam
          officiis voluptatem in porro commodi consectetur sapiente aliquam
          labore, voluptate alias qui expedita eligendi magni ad sequi! Neque
          modi quasi quod incidunt reiciendis blanditiis dicta debitis
          repellendus, omnis sapiente? Quia ex ipsa ducimus! Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Eius, iste consequuntur
          perferendis dolores quisquam odit temporibus quibusdam officiis
          voluptatem in porro commodi consectetur sapiente aliquam labore,
          voluptate alias qui expedita eligendi magni ad sequi! Neque modi quasi
          quod incidunt reiciendis blanditiis dicta debitis repellendus, omnis
          sapiente? Quia ex ipsa ducimus!Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eius, iste consequuntur perferendis dolores quisquam
          odit temporibus quibusdam officiis voluptatem in porro commodi
          consectetur sapiente aliquam labore, voluptate alias qui expedita
          eligendi magni ad sequi! Neque modi quasi quod incidunt reiciendis
          blanditiis dicta debitis repellendus, omnis sapiente? Quia ex ipsa
          ducimus!Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Eius, iste consequuntur perferendis dolores quisquam odit temporibus
          quibusdam officiis voluptatem in porro commodi consectetur sapiente
          aliquam labore, voluptate alias qui expedita eligendi magni ad sequi!
          Neque modi quasi quod incidunt reiciendis blanditiis dicta debitis
          repellendus, omnis sapiente? Quia ex ipsa ducimus!
        </p>
      </div>
    </div>
  )
}
