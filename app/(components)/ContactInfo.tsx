import React from 'react'
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ContactInfo = () => {
    return (
        <div className='h-[100%]'>
            <ul>
                <li>
                    <span className='inline-block p-2  align-middle cursor-pointer'>
                        < MdMarkEmailRead />
                    </span>
                    <p className='inline-block p-2  align-middle cursor-pointer'>
                        amankaziak1999@gmail.com
                    </p>
                </li>
                <li>
                    <span className='inline-block p-2  align-middle cursor-pointer'>
                        < FaPhoneAlt />
                    </span>
                    <p className='inline-block p-2  align-middle cursor-pointer'>
                        +91-7720808013
                    </p>
                </li>
                <li>
                    <span className='inline-block p-2  align-middle cursor-pointer'>
                        < FaLinkedin />
                    </span>
                    <p className='inline-block p-2  align-middle cursor-pointer'>
                        https://www.linkedin.com/in/amankaziak/
                    </p>
                </li>
                <li>
                    <span className='inline-block p-2  align-middle cursor-pointer'>
                        < FaGithub />
                    </span>
                    <p className='inline-block p-2  align-middle cursor-pointer'>
                        https://github.com/Amn9909
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default ContactInfo