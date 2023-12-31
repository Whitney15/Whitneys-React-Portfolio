import React from 'react';

const Contact = () => {
  return (
    <div
      name="contact"
      className="p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full pb-48">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-lime-300">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/31313319-e886-40c5-af98-21b4317d9014"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name" required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email" required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message" required
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className=" bg-pink-500 text-white px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;