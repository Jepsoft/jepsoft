'use client'
import Link from 'next/link';
import Loader from "./loader.gif";
import BG from './images/image copy.png';
import Mobile from "./icons/mobile_dev.svg";
import SoftDev from "./icons/soft_dev.svg"
import Maintain from "./icons/maintain.svg";
import webdev from "./icons/web_dev.svg"
import Image from 'next/image';
import Logo from "./images/logo.png";
import NFC from "./icons/nfc.svg";
import Node from "./icons/node.svg";
import Hat from "./images/santa-hat.png";
import "./style.scss";
import Education from './images/mortarboard.png';
import CSharp from "./icons/csharp.svg";
import ReactImg from "./icons/react.svg";
import Php from "./icons/php.svg";
import Python from "./icons/python.svg";
import Happy from "./icons/happy.png";
import Shift from "./icons/shift.svg";
import SQl from "./icons/sql.svg";
import Dotnet from "./icons/dotnet.svg";
import Laraval from "./icons/laravel.svg";
import Java from "./icons/java.svg";
import { useEffect, useState } from 'react';
export default function Home() {
  const [isSticky, setIsSticky] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 5000);
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
    <div>
      {isLoading && (
        <div className='flex justify-center backdrop-blur-sm items-center fixed left-0 right-0 top-0 bottom-0 z-50'>
          <Image unoptimized src={Loader} alt='loader' className='object-contain' />
        </div>
      )}
      <div className=' overflow-x-hidden'>
        <div className='bot animate-updown fixed right-2 sm:right-5 sm:bottom-5 md:right-10 md:bottom-10 lg:-right-10 lg:bottom-10 xl:right-12 xl:bottom-12 bottom-2 z-20'>
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
        <nav
          className={`${isSticky
            ? "bg-opacity-80 pb-1 bg-black shadow-md backdrop-blur-sm transition-all duration-500 pt-0"
            : "bg-opacity-30 duration-500 pt-10"
            } pt-1  z-20 fixed top-0 w-screen`}
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
                <Link href={"/education"} className=' cursor-pointer'>

                  <Image className="w-10 h-10 rounded-full" src={Education} alt="user photo" />
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
        <div className='z-20 '>
          <div className='flex justify-center items-center  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <div>
              <div>
                <h1 className=' text-center text-white text-[50px] md:text-[80px] lg:text-[100px] xl:text-[120px]'>Jepsoft</h1>
              </div>
              <h1 className=' text-[20px] ai-gradient-texx w-screen sm:text-[25px] md:text-[30px] lg:text-[33px]'>Transforming industries with cutting-edge software solutions</h1>
            </div>
          </div>
        </div>
        <div className='h-[100vh]'></div>
        <hr className="h-1 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 border-none rounded-full" />
        <div className='z-20 bg-white w-screen  backdrop-blur-sm md:px-14 px-5 lg-px-14 xl-px-14'>
          <h1 className='text-center md:text-left lg:text-left xl:text-left md:text-[30px] lg:text-[35px] xl:text-[35px] text-[25px] font-semibold mb-10 pt-10 text-gray-700'>
            Discover the Power of Jepsoft
          </h1>
          <p className='text-justify ml-4 mr-4 text-gray-700 text-[15px] md:text-[17px]'>Jepsoft is a forward-thinking software company committed to empowering businesses through innovative and tailored solutions. Our expertise spans custom software development, NFC card creation, ID card production, and a wide range of advanced digital tools. By streamlining workflows, enhancing data security, and elevating customer experiences, we help businesses thrive in an ever-evolving market. With a team of passionate developers and industry experts, we deliver user-friendly, efficient solutions designed to boost productivity, reduce operational costs, and support informed decision-making. At Jepsoft, we are dedicated to turning your vision into reality with technology that works for you.</p>
          <h1 className='text-center md:text-left lg:text-left xl:text-left md:text-[30px] lg:text-[35px] xl:text-[35px] text-[25px] font-semibold mb-10 pt-10 text-gray-700'>
            Expert With
          </h1>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
            <div className='flex flex-col items-center'>
              <Image
                src={ReactImg}
                alt='React'
                className='w-20 h-20 m-4 hover:scale-125 duration-300'
              />
              <h1 className='text-center mt-2 text-gray-600 md:font-bold'>React</h1>
            </div>
            <div className='flex flex-col items-center'>
              <Image
                src={Php}
                alt='PHP'
                className='w-20 h-20 md:w-24 md:h-24 lg:h-24 lg:w-24 xl:h-24 xl:w-24  m-4 hover:scale-125 duration-300'
              />
              <h1 className='text-center mt-2 text-gray-600 md:font-bold'>PHP</h1>
            </div>
            <div className='flex flex-col items-center'>
              <Image
                src={Python}
                alt='Python'
                className='w-20 h-20 md:w-24 md:h-24 lg:h-24 lg:w-24 xl:h-24 xl:w-24 m-4 hover:scale-125 duration-300'
              />
              <h1 className='text-center mt-2 text-gray-600 md:font-bold'>Python</h1>
            </div>
            <div className='flex flex-col items-center'>
              <Image
                src={SQl}
                alt='SQL'
                className='w-20 h-20 md:w-24 md:h-24 lg:h-24 lg:w-24 xl:h-24 xl:w-24 m-4 hover:scale-125 duration-300'
              />
              <h1 className='text-center mt-2 text-gray-600 md:font-bold'>SQL</h1>
            </div>
            <div className='flex flex-col items-center '>
              <Image
                src={Shift}
                alt='Shift'
                className='w-20 h-20 md:w-24 md:h-24 lg:h-24 lg:w-24 xl:h-24 xl:w-24 m-4 hover:scale-125 duration-300'
              />
              <h1 className='text-center mt-2 text-gray-600 md:font-bold'>Shift</h1>
            </div>
            <div className='flex flex-col items-center'>
              <Image
                src={CSharp}
                alt='C#'
                className='w-20 h-20 md:w-24 md:h-24 lg:h-24 lg:w-24 xl:h-24 xl:w-24 m-4 hover:scale-125 duration-300'
              />
              <h1 className='text-center mt-2 text-gray-600 md:font-bold'>C#</h1>
            </div>
            <div className='flex flex-col items-center'>
              <Image
                src={Java}
                alt='Java'
                className='w-20 h-20 md:w-24 md:h-24 lg:h-24 lg:w-24 xl:h-24 xl:w-24 m-4 hover:scale-125 duration-300'
              />
              <h1 className='text-center mt-2 text-gray-600 md:font-bold'>Java</h1>
            </div>
            <div className='flex flex-col items-center'>
              <Image
                src={Laraval}
                alt='Laravel'
                className='w-20 h-20 md:w-24 md:h-24 lg:h-24 lg:w-24 xl:h-24 xl:w-24 m-4 hover:scale-125 duration-300'
              />
              <h1 className='text-center mt-2 text-gray-600 md:font-bold'>Laravel</h1>
            </div>
            <div className='flex flex-col items-center'>
              <Image
                src={Dotnet}
                alt='.Net'
                className='w-20 h-20 md:w-24 md:h-24 lg:h-24 lg:w-24 xl:h-24 xl:w-24 m-4 hover:scale-125 duration-300'
              />
              <h1 className='text-center mt-2 text-gray-600 md:font-bold'>.Net</h1>
            </div>
            <div className='flex flex-col items-center'>
              <Image
                src={Node}
                alt='Node'
                className='w-20 h-20 md:w-24 md:h-24 lg:h-24 lg:w-24 xl:h-24 xl:w-24 m-4 hover:scale-125 duration-300'
              />
              <h1 className='text-center mt-2 text-gray-600 md:font-bold'>Node</h1>
            </div>
          </div>
          <br /><br />
          <div className=' bg-white'>
            <h1 className='ai-gradient-texttv text-center animate-updown text-sm sm:text-[19px] md:text-[25px]'>Have a great business idea? Let us help bring your vision to life. Contact us to turn ideas into reality</h1>
          </div>
          <div className=' bg-white '>
            <h1 className='text-center md:text-left lg:text-left xl:text-left md:text-[30px] lg:text-[35px] xl:text-[35px] text-[25px] font-semibold mb-10 pt-10 text-gray-700'>Services</h1>
            <p className='text-justify ml-4 mr-4 text-gray-700 text-[15px] md:text-[17px]'>At Jepsoft, we take immense pride in delivering exceptional software solutions that are meticulously crafted to meet the unique needs of our clients. Our team of highly skilled professionals brings expertise across a wide range of services, ensuring we can comprehensively address various aspects of your software development journey. Whether you're looking for custom software design, seamless integration, or robust support, we are committed to providing innovative solutions that enhance your business operations. Our goal is to work closely with you, understanding your objectives and transforming your ideas into scalable, high-performance software products that deliver long-term success.</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-20'>
              <div className='flex flex-col items-center'>
                <Image
                  src={SoftDev}
                  alt='React'
                  className='w-20 h-20 md:w-24 md:h-24 lg:h-24 lg:w-24 xl:h-24 xl:w-24 m-4 hover:scale-125 duration-300'
                />
                <h1 className='text-center mt-2 text-gray-600 md:font-bold w-[80%]' >Custom Software Development</h1>
              </div>
              <div className='flex flex-col items-center'>
                <Image
                  src={webdev}
                  alt='PHP'
                  className='w-20 h-20 md:w-24 md:h-24 lg:h-24 lg:w-24 xl:h-24 xl:w-24 m-4 hover:scale-125 duration-300'
                />
                <h1 className='text-center mt-2 text-gray-600 md:font-bold w-[80%]'>Custom Web Development</h1>
              </div>
              <div className='flex flex-col items-center'>
                <Image
                  src={Mobile}
                  alt='Python'
                  className='w-20 h-20 md:w-24 md:h-24 lg:h-24 lg:w-24 xl:h-24 xl:w-24 m-4 hover:scale-125 duration-300'
                />
                <h1 className='text-center mt-2 text-gray-600 md:font-bold'>Mobile Application Development</h1>
              </div>
              <div className='flex flex-col items-center'>
                <Image
                  src={Maintain}
                  alt='SQL'
                  className='w-20 h-20 md:w-24 md:h-24 lg:h-24 lg:w-24 xl:h-24 xl:w-24 m-4 hover:scale-125 duration-300'
                />
                <h1 className='text-center mt-2 text-gray-600 md:font-bold w-[80%]'>Maintenance and Support</h1>
              </div>
              <div className='flex flex-col items-center '>
                <Image
                  src={NFC}
                  alt='Shift'
                  className='w-20 h-20 md:w-24 md:h-24 lg:h-24 lg:w-24 xl:h-24 xl:w-24 m-4 hover:scale-125 duration-300'
                />
                <h1 className='text-center mt-2 text-gray-600 md:font-bold w-[70%]'>ID & NFC Card Creation</h1>
              </div>
            </div>

          </div>
        </div>
      </div>
      <footer className="bg-white  shadow  pt-24">
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
  )
}