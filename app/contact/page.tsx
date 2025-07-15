"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaQuora } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import flag from "./images/Flag_of_Pakistan.svg"
import Image from 'next/image';

const Page = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c1lz6a3', 'template_juzb1wp', form.current, 'bJczsAiWPFnljY2Uq') // Use correct IDs here
      .then(
        () => {
          alert('Email has been sent successfully!');
          form.current.reset(); // Clear the input fields
        },
        (error) => {
          alert('Failed to send email...' + error.text);
        }
      );
  };
  return (
    <>
      <div className='w-[100%] bg-[#f5f5f5] pt-20'>
        <div className='bg-[#f5f5f5] w-[90%] mx-auto flex items-center max-sm:flex max-sm:flex-col'>
          <div className='left w-[45%] flex flex-col gap-y-5 max-sm:w-[100%]'>
            <h1 className='text-3xl font-extrabold text-black'>GET A FREE QUOTE</h1>
            <hr className='w-[25%] h-1 bg-[#EAB308]' />
            <h1 className='text-2xl tracking-widest text-[#4B5563]'>Don&#39;t Hesitate to contact with us <br /> for any kind of information</h1>
            <div className='flex flex-col gap-y-2'>
              <h1 className='text-[#000000]'><span className='font-bold '>Address</span>: 1585 Angus St, Regina, SK S4T 7E1, Canada</h1>
              <p className='text-[#000000]'> <span className='font-bold  '>Phone</span>: +1 (306) 545-2056</p>
              <p className='text-[#000000]'><span className='font-bold  '>Email</span>: info@nextechbs.ca</p>
            </div>

            <div className='flex gap-x-5 text-[#000000]'>
              <FaFacebookF />
              <CiInstagram />
              <FaTwitter />
              <FaPinterest />
              <FaQuora />
              <FaGithubAlt />
              <FaLinkedin />
            </div>
          </div>
          <div className='right w-[45%] max-sm:w-[100%]'>
            <div className="flex items-center justify-center min-h-screen ">
              <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg p-8 bg-transparent rounded-lg " >
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium  text-[#4B5563]">Name*</label>
                    <input
                      type="text"
                      id="name"
                      className="block w-full p-2 mt-1 bg-transparent rounded-md shadow-sm outline-black "
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium  text-[#4B5563] outline-black">E-mail*</label>
                    <input
                      type="email"
                      id="email"
                      className="block w-full p-2 mt-1 bg-transparent rounded-md shadow-sm outline-black focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your E-mail"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium  text-[#4B5563] outline-black">Phone</label>
                  <div className="flex">
                    <div className="flex items-center p-2 border rounded-l-md">
                      <Image
                        src={flag} // Replace with your flag URL
                        alt="Pakistan Flag"
                        className="w-5 h-5"
                      />
                      <span className="ml-2  text-[#4B5563]">+92</span>
                    </div>
                    <input
                      type="text"
                      id="phone"
                      className="flex-grow block w-full p-2 bg-transparent shadow-sm outline-black rounded-r-md focus:ring-[#2563EB] focus:border-[#2563EB]"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium  text-[#4B5563]">Message</label>
                  <textarea
                    id="message"
                    className="block w-full h-32 p-2 mt-1 bg-transparent rounded-md shadow-sm outline-black focus:[#2563EB] focus:border-blue-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-2 font-semibold text-white bg-black  rounded-md  focus:ring-2 focus:ring-[#3560bd] focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2577963.904692506!2d-104.244057!3d50.876662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e431b6cf7c9%3A0xa07ea529c11218d9!2s1585%20Angus%20St%2C%20Regina%2C%20SK%20S4T%207E1%2C%20Canada!5e0!3m2!1sen!2sus!4v1726838379427!5m2!1sen!2sus" className='h-[100vh] w-full'></iframe>
      </div>

    </>
  )
}

export default Page