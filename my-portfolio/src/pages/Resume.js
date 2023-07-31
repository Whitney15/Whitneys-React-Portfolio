import React from 'react';

const Resume = () => {
  return  <div
  name="contact"
  className="p-4 text-white"
>
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full pb-56">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-lime-300">
              Resume
            </p></div>

            <p>Proficiencies</p>
            <ul className='flex space-x-4'>
              <button className='bg-slate-500 text-black rounded p-2'>HTML</button>
              <button className='bg-slate-500 text-black rounded p-2'>CSS</button>
              <button className='bg-slate-500 text-black rounded p-2'>JavaScrpit</button>
              <button className='bg-slate-500 text-black rounded p-2'>React</button>
              <button className='bg-slate-500 text-black rounded p-2'>Ui</button>
            </ul>

            <div className="">
                <a href="../assets/WhitneysOld-resume.pdf" className=" bg-lime-300 text-black px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300" download>Download Resume
                </a>
            </div>
      </div>
      </div>
};

export default Resume;