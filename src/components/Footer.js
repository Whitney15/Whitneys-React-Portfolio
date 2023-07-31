import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const socialMediaLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Whitney15', // Replace with your GitHub profile URL
      icon: faGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/whitney-w-4b8896201/', // Replace with your LinkedIn profile URL
      icon: faLinkedin,
    },
    // {
    //   name: 'Instagram',
    //   url: 'https://www.instagram.com/yourusername', // Replace with your Instagram profile URL
    //   icon: faInstagram,
    // },
    // You can add more social media links if needed
  ];

  return (
    <footer className="bg-pink-500 text-white py-4">
      <div className="container mx-auto text-center">
        <ul className="flex justify-center space-x-4">
          {socialMediaLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-lime-300"
              >
                <FontAwesomeIcon icon={link.icon} />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4">© {new Date().getFullYear()} Whitney White. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;