import React from 'react';
import BirdHouse from '../assets/BirdHouse.png'
import CohortR from '../assets/Cohort-Retort.png'
import Yumbook from '../assets/Yumbook.png'
import CodeQuiz from '../assets/CodeQuiz.png'


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: BirdHouse,
      demoUrl: 'https://whitney15.github.io/Bird_Project/',
      codeUrl: 'https://github.com/Whitney15/Bird_Project'
    },
    {
      id: 2,
      src: CohortR,
      demoUrl: 'https://cohort-retort-v1-3ead1d24c761.herokuapp.com',
      codeUrl: 'https://github.com/Oscarl214/Cohort-Retort'
    },
    {
      id: 3,
      src: Yumbook,
      demoUrl: 'https://yumbook.herokuapp.com/',
      codeUrl: 'https://github.com/Whitney15/Yumbook'
    },
    {
      id: 4,
      src: CodeQuiz,
      demoUrl: 'https://whitney15.github.io/Code-Quiz/',
      codeUrl: 'https://github.com/Whitney15/Code-Quiz'
    },
    {
      id: 5,
      src: BirdHouse,
      demoUrl: 'https://whitney15.github.io/Bird_Project/',
      codeUrl: 'https://github.com/Whitney15/Bird_Project'
    },
    {
      id: 6,
      src: BirdHouse,
      demoUrl: 'https://whitney15.github.io/Bird_Project/',
      codeUrl: 'https://github.com/Whitney15/Bird_Project'
    },
  ] 

  return <div name="portfolio" className='w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
              <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-lime-300'>Portfolio</p>
                <p className='py-6'>Check out some of my work</p>
              </div>

             

    {/*structure for card  */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {portfolios.map(({ id, src, demoUrl, codeUrl }) => (
                <div 
                key={id}
                className='shadow-md shadow-pink-500'>
                <img 
                src={src} 
                alt=""
                className='rounded-md duration-200 hover:scale-110'
                />
                  <div className='flex items-center justify-center'>
                  <a href={demoUrl} target='_blank' rel='noopener noreferrer'>
                  <button className='w-1/2 px-6 py-3 m4 duration-200 hover:scale-105'>demo</button>
                </a>
                <a href={codeUrl} target='_blank' rel='noopener noreferrer'>
                  <button className='w-1/2 px-6 py-3 m4 duration-200 hover:scale-105'>code</button>
                </a>
                  </div>
              </div>
                ))}
              
            </div>

            </div>
  </div>
};

export default Portfolio;