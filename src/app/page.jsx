'use client'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Jepsoft from './icons/Jepsoft.svg';
import './style.scss';
import Italy from './images/italy.svg';
import SL from './images/sl.svg';
import Dotnet from './icons/dotnet.svg';
import java from './icons/java.svg';
import larval from './icons/laravel.svg';
import php from './icons/php.svg';
import sql from './icons/sql.svg';
import react from './icons/react.svg';
import python from './icons/python.svg';
import shift from './icons/shift.svg';
import node from './icons/node.svg';
import soft_dev from './icons/soft_dev.svg';
import web_dev from './icons/web_dev.svg';
import social_manage from './icons/social_manage.svg';
import maintain from './icons/maintain.svg';
import mobile_dev from './icons/mobile_dev.svg';
import { enqueueSnackbar } from 'notistack';
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handlescrolltocontact = () => {
    setShowAboutUs(!showAboutUs);
    setIsMenuOpen(false);
    window.scrollTo({
      top: document.getElementById('contactSection').offsetTop,
      behavior: 'smooth'
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://jepsoft.com/backend/public/api/send-email', {
        email,
        subject,
        message,
      });
      enqueueSnackbar("Request Sent", { variant: 'success' });
      window.location.href = 'https://jepsoft.com';
    } catch (error) {
      enqueueSnackbar("Check Your Email or Connection", { variant: 'error' });
    }
  };
  const handlescrolltoabout = () => {
    setShowAboutUs(!showAboutUs);
    setIsMenuOpen(false);
    window.scrollTo({
      top: document.getElementById('aboutUsSection').offsetTop,
      behavior: 'smooth'
    });
  }
  const handleservicescroll = () => {
    setShowAboutUs(!showAboutUs);
    setIsMenuOpen(false);
    window.scrollTo({
      top: document.getElementById('servicesSection').offsetTop,
      behavior: 'smooth'
    });
  }
  return (
    <div>
      <nav className={`absolute left-0 right-0 p-5 z-40 ${isMenuOpen ? '' : ''}`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={Jepsoft} className="w-20 " alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Jepsoft</span>
          </a>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700  transition duration-300 ease-in-out transform hover:scale-110" aria-controls="navbar-default" aria-expanded={isMenuOpen ? "true" : "false"}>
            <span className="sr-only">Open main menu</span>
            <svg className={`w-5 h-5 ${isMenuOpen ? 'hidden' : 'block'}`} aria-hidden="true" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
            <svg className={`w-5 h-5 ${isMenuOpen ? 'block' : 'hidden'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className={`w-full md:block md:w-auto   ${isMenuOpen ? 'block' : 'hidden'} `} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white cursor-pointer rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={handlescrolltoabout}>About</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={handleservicescroll}>Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={handlescrolltocontact}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={`${isMenuOpen ? 'blur' : ''}`}>
        <div className=' fixed top-0 right-0 bottom-0 left-0'>
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
        </div>

        <div className=" h-svh">
          <nav className="absolute left-0 right-0 p-5 z-40">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                <Image src={Jepsoft} className="w-20 " alt="Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Jepsoft</span>
              </a>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700  transition duration-300 ease-in-out transform hover:scale-110" aria-controls="navbar-default" aria-expanded={isMenuOpen ? "true" : "false"}>
                <span className="sr-only">Open main menu</span>
                <svg className={`w-5 h-5 ${isMenuOpen ? 'hidden' : 'block'}`} aria-hidden="true" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
                <svg className={`w-5 h-5 ${isMenuOpen ? 'block' : 'hidden'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className={`w-full md:block md:w-auto   ${isMenuOpen ? 'block' : 'hidden'} `} id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                  <li>
                    <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3 text-white cursor-pointer rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={handlescrolltoabout}>About</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={handleservicescroll}>Services</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={handlescrolltocontact}>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="h-screen w-screen flex flex-col justify-center items-center relative z-10">
            {isLoading && (
              <div className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur bg-white bg-opacity-10 z-50">
                <div className="infinity-icon">
                  <div className="left"></div>
                  <div className="right"></div>
                </div>
              </div>


            )}
            <div className='text-center ml-10 mr-10'>
              <h2 className='text-white text-[100px] '>Jepsoft</h2>
              <h2 className='text-white text-[30px] '>Transforming industries with cutting-edge software solutions</h2>
            </div>
          </div>
          <div id="aboutUsSection" >
            <hr className=' ' />
            <section className=" min-h-svh">
              <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                  <div className="lg:text-center">
                    <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-center text-gray-100 sm:text-4xl">
                      About Us
                    </p>
                    <br />
                    <br />
                  </div>
                  <br />
                  <div >
                    <div className=" p-4">
                      <p className="mt-4  text-lg text-gray-500 lg:mx-auto text-center">
                        At Jepsoft, we empower businesses with innovative software solutions designed to streamline workflows, enhance
                        data security, improve customer experience. Our team of passionate developers and industry experts is dedicated
                        to crafting user-friendly and efficient tools that help you achieve increased productivity, reduced costs, improved
                        decision-making.
                      </p>
                      <br />
                      <br />
                      <div className="lg:text-center">
                        <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-center text-gray-400 sm:text-3xl">
                          Currently Working With
                        </p>
                        <br />
                        <br />
                        <br />
                        <div className='flex justify-center'>
                        <div className='flex flex-col items-center mx-2 my-4 mr-10 ml-10 mb-12'>
                              <Image src={Italy} alt='' className='w-20 h-20' />
                              <h3 className='text-white mt-5'>Italy</h3>
                            </div>
                            <div className='flex flex-col items-center mx-2 my-4 mr-10 ml-10 mb-12'>
                              <Image src={SL} alt='' className='w-20 h-20' />
                              <h3 className='text-white mt-5'>Sri Lanka</h3>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className="lg:text-center">
                          <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-center text-gray-400 sm:text-3xl">
                            Expert With
                          </p>
                          <br />
                          <br />
                          <br />
                          <div className='flex justify-center text-center flex-wrap'>
                            <div className='flex flex-col items-center mx-2 my-4 mr-10 ml-10 mb-12'>
                              <Image src={larval} alt='' className='w-20 h-20' />
                              <h3 className='text-white mt-5'>Laravel</h3>
                            </div>
                            <div className='flex flex-col items-center mx-2 my-4 mr-10 ml-10 mb-12'>
                              <Image src={php} alt='' className='w-20 h-20' />
                              <h3 className='text-white mt-5'>PHP</h3>
                            </div>
                            <div className='flex flex-col items-center mx-2 my-4 mr-10 ml-10 mb-12'>
                              <Image src={sql} alt='' className='w-20 h-20' />
                              <h3 className='text-white mt-5'>SQL</h3>
                            </div>
                            <div className='flex flex-col items-center mx-2 my-4 mr-10 ml-10 mb-12'>
                              <Image src={Dotnet} alt='' className='w-20 h-20' />
                              <h3 className='text-white mt-5'>.NET</h3>
                            </div>
                            <div className='flex flex-col items-center mx-2 my-4 mr-10 ml-10 mb-12'>
                              <Image src={react} alt='' className='w-20 h-20' />
                              <h3 className='text-white mt-5'>React</h3>
                            </div>
                            <div className='flex flex-col items-center mx-2 my-4 mr-10 ml-10 mb-12'>
                              <Image src={java} alt='' className='w-20 h-20' />
                              <h3 className='text-white mt-5'>java</h3>
                            </div>
                            <div className='flex flex-col items-center mx-2 my-4 mr-10 ml-10 mb-12'>
                              <Image src={shift} alt='' className='w-20 h-20' />
                              <h3 className='text-white mt-5'>Shift</h3>
                            </div>
                            <div className='flex flex-col items-center mx-2 my-4 mr-10 ml-10 mb-12'>
                              <Image src={python} alt='' className='w-20 h-20' />
                              <h3 className='text-white mt-5'>Python</h3>
                            </div>
                            <div className='flex flex-col items-center mx-2 my-4 mr-10 ml-10 mb-12'>
                              <Image src={node} alt='' className='w-20 h-20' />
                              <h3 className='text-white mt-5'>Node</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <hr className='' />
            <section className="min-h-svh" id='servicesSection'>
              <div className="py-12 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="lg:text-center">
                    <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-center text-gray-100 sm:text-4xl">
                      Services
                    </p>
                    <br />
                    <br />
                  </div>
                  <br />
                  <div >
                    <div className=" p-4">
                      <p className="mt-4  text-lg text-gray-500 lg:mx-auto text-center">
                        At Jepsoft, we pride ourselves on delivering top-notch software solutions tailored to meet the unique needs of our clients.
                        Our team of skilled professionals specializes in a wide range of services, ensuring that we can address various
                        aspects of your software development journey.
                      </p>
                      <br />
                      <br />
                      <br />
                      <div className='flex justify-center text-center flex-wrap'>
                            <div className='flex flex-col items-center mx-2 my-4 mr-10 ml-10 mb-12'>
                              <Image src={soft_dev} alt='' className='w-20 h-20' />
                              <h3 className='text-white mt-5 w-36'>Custom Software Development</h3>
                            </div>
                            <div className='flex flex-col items-center mx-2 my-4 mr-10 ml-10 mb-12'>
                              <Image src={web_dev} alt='' className='w-20 h-20' />
                              <h3 className='text-white mt-5 w-36'>Web Development</h3>
                            </div>
                            <div className='flex flex-col items-center mx-2 my-4 mr-10 ml-10 mb-12'>
                              <Image src={mobile_dev} alt='' className='w-20 h-20' />
                              <h3 className='text-white mt-5 w-36'>Mobile Application Development</h3>
                            </div>
                            <div className='flex flex-col items-center mx-2 my-4 mr-10 ml-10 mb-12'>
                              <Image src={maintain} alt='' className='w-20 h-20' />
                              <h3 className='text-white mt-5 w-36'>Maintenance and Support</h3>
                            </div>
                            <div className='flex flex-col items-center mx-2 my-4 mr-10 ml-10 mb-12'>
                              <Image src={social_manage} alt='' className='w-20 h-20' />
                              <h3 className='text-white mt-5 w-36'>Social media management</h3>
                            </div>
                        </div>
                          
                      {/* <div className="flex flex-wrap justify-center">
                        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 mt-5 mb-5">
                          <div className="flex flex-col items-center justify-center text-center">
                            <Image src={soft_dev} alt="Jepsoft" className="sm:w-26 md:w-28" />
                            <h4 className="w-36 text-white mt-5">Custom Software Development</h4>
                          </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 mt-5 mb-5">
                          <div className="flex flex-col items-center justify-center text-center">
                            <Image src={web_dev} alt="Jepsoft" className="sm:w-26 md:w-28" />
                            <h4 className="w-36 text-white mt-5">Web Development</h4>
                          </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 mt-5 mb-5">
                          <div className="flex flex-col items-center justify-center text-center">
                            <Image src={mobile_dev} alt="Jepsoft" className="sm:w-26 md:w-28" />
                            <h4 className="w-36 text-white mt-5">Mobile Application Development</h4>
                          </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 mt-5 mb-5">
                          <div className="flex flex-col items-center justify-center text-center">
                            <Image src={maintain} alt="Jepsoft" className="sm:w-26 md:w-28" />
                            <h4 className="w-36 text-white mt-5">Maintenance and Support</h4>
                          </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 mt-5 mb-5">
                          <div className="flex flex-col items-center justify-center text-center">
                            <Image src={social_manage} alt="Jepsoft" className="sm:w-26 md:w-28" />
                            <h4 className="w-36 text-white mt-5">Social media management</h4>
                          </div>
                        </div>
                      </div> */}

                    </div>
                  </div>
                </div>
              </div>
            </section>
            <hr className=' ' />
            <section className="min-h-svh" id='contactSection'>
              <div className="py-12 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                  <div className="lg:text-center">
                    <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-center text-gray-100 sm:text-4xl">
                      Contact Us
                    </p>
                    <br />
                    <br />
                  </div>
                  <br />
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className=" border p-4 rounded-3xl z-10">
                      <section className=" rounded-3xl">
                        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-100">Contact Us</h2>
                          <p className="mb-8 lg:mb-16 font-light text-center text-gray-900 dark:text-gray-400 sm:text-xl">Describe What You Need</p>
                          <form onSubmit={handleSubmit} className="space-y-8 text-black">
                            <div>
                              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-100">Your email</label>
                              <input
                                type="email"
                                id="email"
                                className="text-black shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="name@gmail.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                            <div>
                              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-100">Subject</label>
                              <input
                                type="text"
                                id="subject"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Topic"
                                required
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                              />
                            </div>
                            <div className="sm:col-span-2">
                              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-100">Your message</label>
                              <textarea
                                id="message"
                                rows="6"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Let us know how we can help you"
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                              ></textarea>
                            </div>
                            <button type="submit" className="bg-black py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border">
                              Send message
                            </button>
                          </form>
                        </div>
                      </section>

                    </div>
                    <div className=" p-4 z-10">
                      <p className="mt-4  text-lg text-gray-500 lg:mx-auto">
                        Welcome to Jepsoft , where innovation meets efficiency. As a leading software company, we specialize in crafting tailored solutions to
                        meet your unique needs. Whether you're seeking cutting-edge technology, seamless integration, or expert support, our team is here                                                                           to empower your success.
                      </p>
                      <br />
                      <p className="mt-4 max-w-3xl  text-lg text-gray-500 lg:mx-auto">
                        Contact us today to explore how our software solutions can elevate your business to new heights.
                        Let's embark on a journey of digital transformation together.
                      </p>
                      <br /><br /><br />
                      <ul className="flex justify-center mt-5 space-x-5 ">
                        <li>
                          <a href="https://web.facebook.com/profile.php?id=61558793650349" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fill-rule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                clip-rule="evenodd"></path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/jepsoft?igsh=MTd1dHplcHcweTJleA==" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fill-rule="evenodd"
                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                clip-rule="evenodd"></path>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="https://wa.link/6rkzec" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd" />
                              <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/company/jepsoft/about/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                              <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <hr className='' />
            <footer className=" absolute left-0 right-0">
              <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                  <div className="mb-6 md:mb-0">
                    <a href="https://jepsoft.com/" className="flex items-center">
                      <Image src={Jepsoft} className="w-20" alt="FlowBite Logo" />
                      <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Jepsoft</span>
                    </a>
                  </div>
                  <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div className=' hid'>
                      <h2 className="mb-6 text-sm font-semibold text-white">Contact</h2>
                      <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                          <a href="" className="hover:underline z-10">+94 77 483 5253</a>
                        </li>
                        <li>
                          <a href="" className="hover:underline">Jepsoft</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="mb-6 text-sm font-semibold text-white">Follow us</h2>
                      <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                          <a href="https://web.facebook.com/profile.php?id=61558793650349" className="hover:underline ">Facebook</a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/jepsoft?igsh=MTd1dHplcHcweTJleA==" className="hover:underline">Instagram</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="mb-6 text-sm font-semibold text-white">Legal</h2>
                      <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                  <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Jepsoft</a>. All Rights Reserved.
                  </span>
                  <div className="flex mt-4 sm:justify-center sm:mt-0">
                    <a href="https://web.facebook.com/profile.php?id=61558793650349" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                      </svg>
                      <span className="sr-only">Facebook page</span>
                    </a>
                    <a href="https://www.instagram.com/jepsoft?igsh=MTd1dHplcHcweTJleA==" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
                      </svg>
                      <span className="sr-only">Discord community</span>
                    </a>
                    <a href="https://wa.link/6rkzec" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd" />
                        <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
                      </svg>
                      <span className="sr-only">Whats App page</span>
                    </a>
                    <a href="https://www.linkedin.com/company/jepsoft/about/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                      </svg>
                      <span className="sr-only">Linkedin account</span>
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
