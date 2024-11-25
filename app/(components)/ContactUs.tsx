"use client"
import React from 'react'
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { useTheme } from 'next-themes';

const ContactUs = () => {
  const { theme } = useTheme()

  console.log("first",theme)

  const socialLinks = [
    {
      key: 'email',
      value: 'amankaziak1999@gmail.com'
    },
    {
      key: 'phone',
      value: '+917720808013'
    },
    {
      key: 'linkdin',
      value: 'https://www.linkedin.com/in/amankaziak/'
    },
    {
      key: 'github',
      value: 'https://github.com/Amn9909'
    },
    {
      key: 'instagram',
      value: 'https://www.instagram.com/'
    },
    {
      key: 'youtube',
      value: 'https://www.youtube.com/'
    }
  ]

  const redirectToSocials = (social: string) => {
    const socialData = socialLinks.find((_social) => _social.key === social)

    if (socialData) {
      if (social === "email") {
        window.location.href = `mailto:${socialData.value}`;
      } else if (social === "phone") {
        window.location.href = `tel:${socialData.value}`;
      } else {
        window.open(socialData.value, "_blank");
      }
    }
  }

  return (
    <div className="h-[100%] flex items-center space-x-4 overflow-x-scroll">
      <div className={`p-4 m-2 rounded-full border-4 transition duration-200 
    hover:border-red-600 hover:text-red-600 hover:scale-110 
    ${theme === 'dark' ? 'border-white' : 'border-black'}`}>
        <MdMarkEmailRead size={30} onClick={() => redirectToSocials('email')} />
      </div>
      <div className={`p-4 m-2 rounded-full border-4 transition duration-200 
    hover:border-red-600 hover:text-red-600 hover:scale-110 
    ${theme === 'dark' ? 'border-white' : 'border-black'}`}>
        <FaPhoneAlt size={30} onClick={() => redirectToSocials('phone')} />
      </div>
      <div className={`p-4 m-2 rounded-full border-4 transition duration-200 
    hover:border-red-600 hover:text-red-600 hover:scale-110 
    ${theme === 'dark' ? 'border-white' : 'border-black'}`}>
        <FaLinkedin size={30} onClick={() => redirectToSocials('linkdin')} />
      </div>
      <div className={`p-4 m-2 rounded-full border-4 transition duration-200 
    hover:border-red-600 hover:text-red-600 hover:scale-110 
    ${theme === 'dark' ? 'border-white' : 'border-black'}`}>
        <FaGithub size={30} onClick={() => redirectToSocials('github')} />
      </div>
      <div className={`p-4 m-2 rounded-full border-4 transition duration-200 
    hover:border-red-600 hover:text-red-600 hover:scale-110 
    ${theme === 'dark' ? 'border-white' : 'border-black'}`}>
        <FaSquareInstagram size={30} onClick={() => redirectToSocials('instagram')} />
      </div>
      <div className={`p-4 m-2 rounded-full border-4 transition duration-200 
    hover:border-red-600 hover:text-red-600 hover:scale-110 
    ${theme === 'dark' ? 'border-white' : 'border-black'}`}>
        <FaYoutube size={30} onClick={() => redirectToSocials('youtube')} />
      </div>
    </div>
  )
}

export default ContactUs