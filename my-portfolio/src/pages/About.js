import React from 'react';
import Header from '../components/Header';
import HeroImage from '../assets/hero.jpg'

const About = () => {
  return <div name="home" className='h-screen w-full text-white'>
            <div className='max-w-screen-lg mx-auto flex flex-col items center justify-center h-full px-4 md:flex-row mt-24'>
                <div>
                    <p className=' text-pink-500 text-6xl font-bold'>Hi im Whitney</p>
                    <p className='text-3xl'>Im a front-end developer and Ui Designer</p>
                    

                    <div>
                        <button className=' bg-lime-300 text-black px-6 py-3 my-8 mx-auto rounded-md hover:scale-110 duration-300'>Portfolio
                        </button>
                    </div>
                </div>

                <div>
            <img 
            src={HeroImage} 
            alt='my profile' 
            className="inline rounded-3xl mx-auto h-64"
            /> 
        </div>   
            </div>
          </div>;
     
};

export default About;