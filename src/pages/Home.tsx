import Background from '../assets/images/hero3-1.png'
import '../styles.css'

function Home() {
  return (
    <div 
    style={{backgroundImage: `url(${ Background })`}} 
    className='hero mx-auto bg-cover '
    >
          <h2 className="text-8xl font-bold m-5">Soul Soju</h2>
          <br />
          <h3 className="text 5x1 text-gray-700 font-semibold m-5">Soju that has Soul and is delicious.</h3>
          <a href="#/about/"><button className='rounded border-2 border-gray-800 p-3 mx-5 hover:bg-gray-800 hover:text-white'>Learn More</button></a>
    </div>
  )
}

export default Home