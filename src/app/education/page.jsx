'use client'
import Image from 'next/image';
import WebDeveopmet from '../images/web_dev.svg';
import react from '../images/react.svg';
import php from '../images/php.svg';
import Logo from "../images/logo.png";
import '../style.scss';
import Grd from "./lms/graduate.png";
import Login from "../icons/enter.png";
import Link from 'next/link';
import axios from 'axios';
import Loader from "../loader.gif";
import BG from '../images/image copy.png';
import Hat from "../images/santa-hat.png";
import "../style.scss";
import Happy from "../icons/happy.png";
import { useEffect, useState } from 'react';
export default function Home() {
    const [isSticky, setIsSticky] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    setTimeout(() => {
        setIsLoading(false);
    }, 1000);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className=' overflow-x-hidden'>
            {isLoading && (
                <div className='flex justify-center backdrop-blur-sm items-center fixed left-0 right-0 top-0 bottom-0 z-50'>
                    <Image unoptimized src={Loader} alt='loader' className='object-contain' />
                </div>
            )}
            <div className='bot animate-updown fixed right-2 sm:right-5 sm:bottom-5 md:right-10 md:bottom-10 lg:-right-10 lg:bottom-10 xl:right-12 xl:bottom-12 bottom-2 z-50'>
                <div className="cloud hidden sm:block">
                    <div className="text ">Chat with me</div>
                </div>
                <Image src={Happy} alt='chatbot' className={`${isSticky
                    ? "bg-gray-300 rounded-full p-1 w-16 h-16 ai-gradient-bg duration-500 ease-out"
                    : "w-14 h-14 duration-500 ease-out"
                    } `} />
            </div>
            <Image src={BG} alt='bg' className='w-screen h-screen left-0 right-0 top-0 fixed bottom-0 object-cover -z-50' />
            <div className='-z-20 fixed w-screen h-screen'>
                <div className="snow foreground"></div>
                <div className="snow foreground layered"></div>
                <div className="snow middleground"></div>
                <div className="snow middleground layered"></div>
                <div className="snow background"></div>
                <div className="snow background layered"></div>
            </div>
            <div>
                <nav
                    className={`${isSticky
                        ? "bg-opacity-80 pb-1 bg-black shadow-md backdrop-blur-sm transition-all duration-500 pt-0"
                        : "bg-opacity-30 duration-500 pt-10"
                        } pt-1 z-20 fixed top-0 w-screen`}
                >
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                        <Image src={Hat} alt="hat" className="w-8 h-8 mt-[-15px] ml-[78px] z-10" />

                        <span className="absolute text-2xl  font-semibold whitespace-nowrap text-white">
                            Jepsoft
                        </span>
                        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button
                                type="button"
                                className="flex text-sm bg-white rounded-full md:me-0 focus:ring-4"
                                id="user-menu-button"
                                aria-expanded="false"
                                data-dropdown-toggle="user-dropdown"
                                data-dropdown-placement="bottom"
                            >
                                <Link href={"/education/lms"} className=' cursor-pointer'>
                                    <Image className="w-10 h-10 rounded-full" src={Grd} alt="user photo" />
                                </Link>
                            </button>
                        </div>
                        <div
                            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                            id="navbar-user"
                        >
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white">
                                {["Home", "About", "Services", "Products", "Contact"].map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="block py-2 px-3 text-white rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className='z-20 ml-[5%] mr-[5%]'>
                    <div className='flex justify-center items-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                        <div>
                            <div>
                                <h1 className=' text-center text-white text-[50px] md:text-[80px] lg:text-[100px] xl:text-[120px]'>Jepsoft Education</h1>
                            </div>
                            <h1 className=' text-[20px] ai-gradient-texx w-screen sm:text-[25px] md:text-[30px] lg:text-[33px]'>The Learning Paradise for Students</h1>
                        </div>
                    </div>
                </div>

                <div className='h-screen'>
                </div>
                <div className='bg-white'>

                    <div className=' min-h-svh bg-white pt-3'>
                        <h1 className='ml-[5%] mr-[5%] text-[35px] mt-2 mb-16 text-center text-gray-700 pt-10 font-bold'>What is Jepsoft Education</h1>
                        <div className=' md:flex ml-[5%] mr-[5%]'>
                            <div className=' md:w-1/2 pr-[2%] shadow-md shadow-[#af69ff]    p-5   rounded-[30px] m-3'>
                                <p className='text-gray-600 mt-5 text-justify text-[19px]'>
                                    Jepsoft Education is a cutting-edge educational institution dedicated to equipping you with the knowledge and skills required to overcome challenges in the software industry and succeed as an expert. Our courses are specifically designed to meet the evolving demands of the software sector, blending teaching methodologies, research, and hands-on experience to provide you with the essential learning you need. At Jepsoft Education, our mission is to support your professional journey, helping you grow and thrive in the rapidly advancing world of software development.
                                </p>
                            </div>
                            <br />
                            <div className='md:w-1/2 pr-[2%]  p-5 shadow-md shadow-[#af69ff]   rounded-[30px] m-3'>
                                <p className='text-gray-600 text-justify mt-5 text-[19px]'>
                                    Jepsoft Education යනු මෘදුකාංග ක්ෂේත්‍රයේ පළමු පියවර තබන ඔබට සාර්ථක වීමට අවශ්‍ය දැනුම සහ කුසලතාවලින් ඔබව සන්නද්ධ කිරීමට කැප වූ පිළිගත් අධ්‍යාපන ආයතනයකි. අපගේ පාඨමාලා විශේෂයෙන් නිර්මාණය කර ඇත්තේ මෘදුකාංග ක්ෂේත්‍රය තුළ ඉල්ලීම් සපුරාලීමට සුදුසු මෘදුකාංග ඉංජිනේරුවන් බිහි කිරීමටය. ඒ සඳහා ගැළපෙන නවීන ඉගෙනුම්, ඉගැන්වීම් ක්‍රමවේද යටතේ ඔබට අවශ්‍ය මූලික දැනුමේ සිට මෘදුකාංග ක්ෂේත්‍රයේ ඉහළටම ගමන් කිරීමට අවශ්‍ය වන ප්‍රායෝගික පැවරුම් හා ව්‍යාපෘති හරහා ඉගැන්වීම් කටයුතු සිදු කිරීම මෙහි ඇති විශේෂත්වයයි. Jepsoft Education වන අපගේ මූලික මෙහෙවර වන්නේ මෘදුකාංග ක්ෂේත්‍රයට මෙන්ම, ශීඝ්‍රයෙන් දියුණු වන ලෝකයේ මෘදුකාංග ඉංජිනේරුවෙකු ලෙස දියුණු වීමට ඔබට උපකාර කරමින් ඔබේ වෘත්තීය ගමනට සහාය වීමයි.
                                </p>
                            </div>
                            <br />
                        </div>
                        <h2 className='mt-5 mb-5 ml-[7%] mr-[7%] text-gray-600 text-center'> Ready to take your first step towards becoming an expert in the software industry? Join Jepsoft Education now and start your journey to success. Our tailored courses and expert guidance will equip you with the skills and knowledge you need to thrive in the ever-evolving world of software development.</h2>
                        <h1 className=' text-center font-bold text-gray-600 mt-5 mb-5 text-[20px]'><Link href='https://wa.me/94774835253' className='ai-gradient-textt cursor-pointer'>Contact us</Link> today to learn more and get started!</h1>
                        <br />
                        <br />
                        <h1 className=' text-gray-700 font-bold text-center text-[35px]'>Jepsoft Education Courses</h1>
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className=' md:flex ml-[5%] mr-[5%]'>
                            <div class="w-full md:w-1/3 text-center text-white ml shadow-[#0080ff] shadow-md  rounded-[30px] p-3 md:m-3">
                                <h1 class="text-[18px] mt-3">Web Development</h1>
                                <div className='flex justify-center mt-3 mb-3'>
                                    <Image src={WebDeveopmet} className='w-40' alt='webdevelopmet image' />
                                </div>
                                <p className='mt-3 mb-2 text-justify text-gray-600'>
                                    This Course is about the Web Development. You Will Learn HTML, CSS, JS and Web Hosting. Also we will Issue the <span className='text-red-600 font-bold'>E Certificate</span> to you. After the Course you will be able to build your own website and we will help you for your problems. To learn More About the Course <Link href='https://wa.me/94774835253' className='text-green-600 cursor-pointer'>Contact us</Link>
                                </p>
                                <br />
                                <Link href='https://wa.me/94774835253?text=I%20would%20like%20to%20join%20the%20web%20development%20course' className=' cursor-pointer'>
                                    <h1 className=' text-center font-bold text-white mt-5 mb- text-[20px] ai-gradient-bg p-2 rounded-[30px] cursor-pointer'>Join to Course</h1>
                                </Link>
                            </div>
                            <br /><br />
                            <div class="w-full md:w-1/3 text-center text-white shadow-[#0080ff] shadow-md  rounded-[30px] p-3 md:m-3 mt-3 mb-3">
                                <h1 class="text-[18px] mt-3">PHP Backend Developmet</h1>
                                <div className='flex justify-center mt-3 mb-3'>
                                    <Image src={php} className='w-40' alt='webdevelopmet image' />
                                </div>
                                <p className='mt-3 mb-2 text-justify text-gray-600'>This course is designed to introduce the essentials of PHP. You will learn how to create dynamic web applications and handle data efficiently. We will cover everything from setting up a PHP environment to connecting with databases, managing sessions etc. To learn More About the Course <Link href='https://wa.me/94774835253' className='text-green-600 cursor-pointer'>Contact us</Link></p>
                                <br />
                                <h1 className='text-center font-bold text-white mt-5 mb- text-[20px] ai-gradient-bg p-2 rounded-[30px] cursor-not-allowed'>Coming Soon</h1>
                            </div>
                            <br /><br />
                            <div class="w-full md:w-1/3 text-center text-white shadow-[#0080ff] shadow-md  rounded-[30px] p-3 md:m-3 mt-3 mb-3">
                                <h1 class="text-[18px] mt-3">JS & React Basics</h1>
                                <div className='flex justify-center mt-3 mb-3 p-1'>
                                    <Image src={react} className='w-40' alt='webdevelopmet image' />
                                </div>
                                <p className=' text-justify mt-3 mb-2 text-gray-600'>This course will introduce you to JavaScript, the programming language that powers the web, and React, the popular library for building user interfaces. You'll start with the basics of JavaScript, learning how to make your web pages interactive and dynamic. Then, you'll dive into React with how to build modern web applications. To learn more <Link href='https://wa.me/94774835253' className='text-green-600 cursor-pointer'>Contact us</Link></p>
                                <h1 className='text-center font-bold text-white mt-5 mb- text-[20px] ai-gradient-bg p-2 rounded-[30px] cursor-not-allowed'>Coming Soon</h1>
                            </div>
                        </div>
                    </div>
                    <footer className="bg-white  shadow dark:bg-gray-900 pt-24">
                        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                            <div className="sm:flex sm:items-center sm:justify-between">
                                <a href="https://jepsoft.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                                    <Image height={100} width={100} className='mr-[-35px] mt-[5px]' src={Logo} />

                                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jepsoft</span>
                                </a>
                                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                                    <li>
                                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Jepsoft™</a>. All Rights Reserved.</span>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}