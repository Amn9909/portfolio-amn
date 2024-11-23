"use client"
import React from 'react'
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const ContactUs = () => {

  const redirectToSocials = (social: string) => {
    console.log(social)
  }
  
  return (
    <div className="h-[100%] flex items-center space-x-4 overflow-x-scroll">
      <div className=' p-4 m-2 rounded-full border-4 border-white hover:border-red-600 hover:scale-110 transition duration-200'>
        <MdMarkEmailRead size={60} onClick={() => redirectToSocials('email')} />
      </div>
      <div className=' p-4 m-2 rounded-full border-4 border-white hover:border-red-600 hover:scale-110 transition duration-200'>
        <FaPhoneAlt size={60} onClick={() => redirectToSocials('phone')} />
      </div>
      <div className=' p-4 m-2 rounded-full border-4 border-white hover:border-red-600 hover:scale-110 transition duration-200'>
        <FaLinkedin size={60} onClick={() => redirectToSocials('linkdin')} />
      </div>
      <div className=' p-4 m-2 rounded-full border-4 border-white hover:border-red-600 hover:scale-110 transition duration-200'>
        <FaGithub size={60} onClick={() => redirectToSocials('github')} />
      </div>
      <div className=' p-4 m-2 rounded-full border-4 border-white hover:border-red-600 hover:scale-110 transition duration-200'>
        <FaSquareInstagram size={60} onClick={() => redirectToSocials('instagram')} />
      </div>
      <div className=' p-4 m-2 rounded-full border-4 border-white hover:border-red-600 hover:scale-110 transition duration-200'>
        <FaYoutube size={60} onClick={() => redirectToSocials('youtube')} />
      </div>
    </div>
  )
}

export default ContactUs