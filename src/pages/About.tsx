import React from 'react'
// import aboutBackground from '../assets/images/hero4.png'
import videoBg from '../assets/images/sojumovie.mp4'

const About = () => {
  return (
    <div
      // style={{backgroundImage: `url(${aboutBackground})`
              // backgroundSize:       
      // }}
      // className= 'bg-cover h-screen'
    >
    <video className= 'absolute top-25'src={videoBg} autoPlay loop muted></video>
    <div className='flex flex-col justify-center items-start'>
    <h2 className= 'mt-4 p-4 text-6xl font-bold text-yellow-700 z-10'>About Soul Soju</h2>,
    <p className='text-yellow-600 font-semibold md:text-md lg:text-3x1 px-4 md:w-3/5 lg:w-2/5 leading-loose tracking-wide z-10'>Soul Soju is an index on all the amazing flavors and variations of Korea's national drink. It is a 100% user driven project to include all brands of soju including the major labels beloved by Soju drinkers around the world, as well as the soju from independent brewers working tirelessly to create their unique flavors. Soul Soju is the place to find your answer to the question of what is the best soju.</p>
    </div>
    </div>
  )
}

export default About