'use client'
import Image from "next/image";
import Bot from "./icons/happy.png";
import axios from "axios";
import BG from "./wallpaper.webp";
import CSD from "./jepimg/csd.webp";
import Computer from "./jepimg/comp.webp";
import Hand from "./jepimg/hand.webp";
import 'aos/dist/aos.css';
import newimage from "./jepimg/new.webp";
import logoReact from "./icons/react.webp";
import AOS from 'aos';
import Java from "./icons/java.webp";
import RFID from "./icons/rfid.webp";
import csharp from "./icons/Csharp.webp";
import Electrone from "./icons/Electron.webp";
import Firbase from "./icons/Firebase.webp";
import Github from "./icons/GitHub.webp";
import Laraval from "./icons/Laravel.webp";
import User from "./icons/user.webp";
import Logo from "./images/logo.webp";
import Mongo from "./icons/MongoDB.webp";
import Node from "./icons/node.webp";
import Anaconda from "./icons/Anaconda.webp";
import Js from "./icons/js.webp";
import Php from "./icons/php.webp";
import Android from "./icons/Android.webp";
import python from "./icons/python.webp";
import Map from "./images/map.webp";
import Aravindha from "./icons/aravindha.webp";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Hey this is Jemo from Jepsoft. How Can I Assist You Today.' },
  ]);
  const [input, setInput] = useState('');
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  // Handle input change
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Handle sending message
  const sendMessage = async () => {
    if (!input.trim()) return;
    const prefix = "  ";

    const messageWithPrefix = prefix + " Costomer: " + input + "answer  must be around 5 words";

    const newMessages = [
      ...messages,
      { role: 'user', content: input }
    ];
    const newMessagestosent = [
      ...messages,
      { role: 'user', content: messageWithPrefix }
    ];
    setMessages(newMessages);
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: 'assistant', content: 'Thinking...' },
    ]);

    try {
      // Send the messages array to the backend API
      const response = await axios.post('http://127.0.0.1:8000/api/chat', {
        messages: newMessagestosent,
      });

      // Log the raw response to check what is being returned
      try {
        const assistantMessage = response.data.text;
        if (assistantMessage) {
          setMessages([
            ...newMessages,
            { role: 'assistant', content: assistantMessage },
          ]);
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    } catch (error) {
      console.error('Error while sending message:', error);
    }

    setInput('');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const element = messagesEndRef.current;

    if (element && element.scrollHeight > element.clientHeight) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  const sliderRef = useRef(null);
  const [isWiggleActive, setIsWiggleActive] = useState(true);

  useEffect(() => {
    const slider = sliderRef.current;
    let index = 0;

    const interval = setInterval(() => {
      if (slider) {
        const cardWidth = slider.children[0].offsetWidth;
        const containerWidth = slider.offsetWidth;
        const itemsPerView = Math.floor(containerWidth / cardWidth);
        index = (index + 1) % (slider.children.length - itemsPerView + 1);

        slider.scrollTo({
          left: index * cardWidth,
          behavior: "smooth",
        });
      }
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Stop wiggle effect after 5 seconds
    const timeout = setTimeout(() => setIsWiggleActive(false), 5000);
    return () => clearTimeout(timeout);
  }, []);

  const services = [
    {
      title: "Custom Software Development",
      description:
        "We specialize in custom software development, creating tailored solutions that optimize efficiency, enhance user experience, and drive business growth.",
    },
    {
      title: "Web Development",
      description:
        "We are experts in creating responsive, user-friendly websites that maximize your business potential, driving growth, performance, and engagement",
    },
    {
      title: "Mobile App Development",
      description:
        "We deliver advanced smart card and NFC solutions, boosting security, efficiency and convenience while driving seamless experiences for businesses and clients",
    },
    {
      title: "UI/UX Design",
      description:
        "Our mobile app development services focus on building seamless, high-performance apps that drive engagement and accelerate business growth",
    },
  ];
  const TestimonialCard = ({ name, position, imageSrc, rating, review }) => {
    return (
      <div className="bg-[#f9f9f9] shadow-md scale-100 hover:scale-105 hover:duration-500 duration-500 rounded-[25px] p-6 flex-shrink-0 w-[300px]" data-aos="zoom-in-up">
        <div className="text-center">
          <p className="mb-3 pt-4 font-bold">Excellent Service!</p>
          <p className="text-sm">{review}</p>
        </div>
        <div className="text-[#FFD700] flex justify-center text-[30px] mt-2">{Array(rating).fill('★').join(' ')}</div>
        <div className="flex items-center justify-center mt-4">
          <Image src={imageSrc} alt={name} className="w-12 h-12 rounded-full" />
          <div className="ml-4">
            <p className="font-bold">{name}</p>
            <p className="text-[10px]">{position}</p>
          </div>
        </div>
      </div>
    );
  };

  const testimonials = [
    {
      name: "Mr. Aravindha Koralage",
      position: "Managing Director At Global Talent Solutions",
      imageSrc: Aravindha,
      rating: 5,
      review: "I had an amazing experience with this service. The team was professional, the quality was top-notch, and the response time was super fast. Highly recommend to everyone!"
    },
    {
      name: "Mr. Aravindha Koralage",
      position: "Managing Director At Global Talent Solutions",
      imageSrc: Aravindha,
      rating: 5,
      review: "I had an amazing experience with this service. The team was professional, the quality was top-notch, and the response time was super fast. Highly recommend to everyone!"
    },
    {
      name: "Mr. Aravindha Koralage",
      position: "Managing Director At Global Talent Solutions",
      imageSrc: Aravindha,
      rating: 4,
      review: "I had an amazing experience with this service. The team was professional, the quality was top-notch, and the response time was super fast. Highly recommend to everyone!"
    },
    {
      name: "Mr. Aravindha Koralage",
      position: "Managing Director At Global Talent Solutions",
      imageSrc: Aravindha,
      rating: 5,
      review: "I had an amazing experience with this service. The team was professional, the quality was top-notch, and the response time was super fast. Highly recommend to everyone!"
    }
  ];
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className=" text-white " >
      
      <div className="min-h-svh">
        <Image src={BG} className=" absalute left-0 right-0 top-0 min-h-svh  object-cover max-h-svh overflow-y-hidden " alt="Wallpaper" />
        <nav data-aos="fade-up"
          className={`fixed w-full z-20 top-0 left-0 transition-all duration-300  ${scrolled
            ? " bg-gray-900 shadow-lg pb-1 pt-1 bg-opacity-85"
            : "bg-transparent pt-4"
            }`}
        >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Jepsoft
              </span>
            </a>
            <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-[#3890FF] to-[#D95BB6] hover:scale-105 hover:duration-500 duration-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[25px] text-sm px-4 py-2"
              >
                Let's Start
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1`}
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                <li>
                  <a
                    href="#about"
                    className=" scale-100 duration-500 hover:scale-110 hover:duration-500  block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className=" scale-100 duration-500 hover:scale-110 hover:duration-500 block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className=" scale-100 duration-500 hover:scale-110 hover:duration-500 block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className=" scale-100 duration-500 hover:scale-110 hover:duration-500 block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className=" scale-100 duration-500 hover:scale-110 hover:duration-500 block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className=" scale-100 duration-500 hover:scale-110 hover:duration-500 block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="absolute bottom-[110px] ml-[20px] md:ml-[40px] lg:ml-[60px] " data-aos="fade-left">
          <h1 className=" invisible" >Transforming industries with cutting-edge software solutions</h1>
          <h2 className="text-white text-[30px] md:text-[40px] lg:text-[50px] font-semibold">
            Transforming industries with cutting-edge
          </h2>
          <h2 className="text-white text-[30px] md:text-[40px] lg:text-[50px] font-semibold">
            software solutions
          </h2>
          <br />
          <p className="text-white text-[16px] md:text-[18px] lg:text-[21px]">
            Based in Sri Lanka. Delivering Innovative Solutions Worldwide
          </p>
        </div>

        <div className="  ">
          <div className=" fixed right-5 bottom-2 chat-container duration-500 animate-bounce z-50" >
            <p className="chat-text w-44 text-white h-9 hidden md:flex justify-center items-center rounded-[25px] fixed bottom-28 right-24 z-50 bg-gray-800">
              <span className="typing max-w-32"   >Chat with Jemo</span>
            </p>
          </div>
          <div
            className={`fixed z-50 bot bottom-10 right-10 w-16 h-16  flex items-center justify-center rounded-full transition-all duration-500 ${showBackground ? "bg-gradient-to-r from-[#3890FF] to-[#D95BB6]" : "bg-transparent"
              }`}
          >
            <Image src={Bot} className="w-16 h-16 p-2 transition-all duration-500" alt="Chat Bot" />
          </div>
        </div>
      </div>

      <div className="bg-[#EEF6FF]  text-black" >
        <div className="w-full text-center ">
          <br />
          <h2 className="text-center font-semibold text-[30px]  pt-6" data-aos="fade-top" >Discover the Power of <span className="text-[#2A92FF]">Jepsoft</span></h2>
          <p className="mt-6 ml-[4%] mr-[4%] text-center mb-5 text-[18px] " data-aos="fade-top" >Jepsoft is a forward thinking software company committed to empowering businesses through innovative and tailored solutions. Our expertise spans custom software development,Web Development, NFC card creation, ID card production, and a wide
            range of advanced digital tools. By streamlining workflows, enhancing data security, and elevating customer experiences, we help businesses thrive in an ever-evolving market. With a team of passionate developers and industry experts,
            we deliver user-friendly, efficient solutions designed to boost productivity, reduce operational costs, and support informed decision-making. At Jepsoft, we are dedicated to turning your vision into reality with technology that works for you.
          </p>
          <br />
        </div>
        <div className="bg-[#100425] ">
          <div className="border-cyan-400" >
            <h2 className="text-white font-semibold text-[30px] text-center pt-14">What We Build</h2>
          </div>
          {isWiggleActive && (
            <div className="flex justify-center mt-3">
              <motion.div
                className="flex justify-self-center   text-white text-xs bg-black px-3 py-1 rounded-full"
                animate={{ x: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                Swipe to Scroll →
              </motion.div>
            </div>
          )}
          <div className="mt-10 mb-10 overflow-hidden relative">
            {/* Scroll Hint (Animated Wiggle) */}
            <div className="flex justify-between  overflow-x-auto  snap-x px-4 md:px-0 ml-[5%] mr-[5%] pb-5 ">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  className="relative p-[2px] rounded-[40px] bg-gradient-to-r from-[#3890FF] to-[#D95BB6] snap-start min-w-[250px] md:min-w-[270px] first:ml-2 last:mr-2 ml-4 mr-4"
                  data-aos="zoom-in-up"
                >
                  <div className="rounded-[40px] bg-[#100425] min-h-[340px] max-h-[340px]   px-4 pt-5 pb-5">
                    <div className="flex justify-center">
                      <Image
                        src={CSD}
                        className="w-20 h-20 mb-4"
                        alt={service.title}
                      />
                    </div>
                    <div className="flex justify-center text-center">
                      <p className="text-white text-[15px] min-h-[40px] mb-4 font-bold ">{service.title}</p>
                    </div>
                    <div className="flex justify-center max-h-[110px]">
                      <p className="max-w-[230px] text-center text-[12px] text-white min-h-[100px] ">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <h4 className="text-white text-center bg-gradient-to-r from-[#3890FF]  to-[#D95BB6] p-2 mt-3 text-sm w-[140px] rounded-[40px]">
                        Explore More
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
        <div className="bg-[#EDF6FF] pb-2 min-h-[100vh] text-black pl-2 pr-2">
          <h2 className="text-[30px] font-semibold text-center pt-9 pb-4" data-aos="fade-top" >How <span className="text-[#2A92FF]">Jepsoft</span> Perform With Your Project</h2>
          <div className="flex justify-center pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              <div className="relative duration-500 hover:scale-105 hover:shadow-lg bg-white rounded-[40px] shadow-md p-6" data-aos="zoom-in-up">
                <div className="rounded-[40px] text-center">
                  <div className="flex justify-center">
                    <Image src={Hand} alt="Smart Business Analysis" className="w-20 h-20" />
                  </div>
                  <p className="text-[15px] mt-4 mb-2 text-black font-semibold">Smart Business Analysis</p>
                  <p className="max-w-[340px] text-center text-[11px] text-black text-opacity-50 mx-auto">
                    At Jepsoft, we work closely with you to understand your business needs through clear communication and strategic planning. By analyzing your challenges, we craft tailored solutions and provide actionable insights to keep your business ahead.
                  </p>
                </div>
              </div>
              <div className="relative duration-500 hover:scale-105 hover:shadow-lg bg-white rounded-[40px] shadow-md p-6" data-aos="zoom-in-up">
                <div className="rounded-[40px] text-center">
                  <div className="flex justify-center">
                    <Image src={newimage} alt="AI-Powered Design & Development" className="w-16 h-16 mb-3" />
                  </div>
                  <p className="text-[15px] mt-4 mb-2 text-black font-semibold">AI-Powered Design & Development</p>
                  <p className="max-w-[340px] text-center text-[11px] text-black text-opacity-50 mx-auto">
                    With AI-Powered Design & Development, we combine artificial intelligence with creative design to deliver innovative and efficient solutions. We streamline processes, improve user experiences, and build smarter applications.
                  </p>
                </div>
              </div>

              <div className="relative duration-500 hover:scale-105 hover:shadow-lg bg-white rounded-[40px] shadow-md p-6" data-aos="zoom-in-up">
                <div className="rounded-[40px] text-center">
                  <div className="flex justify-center">
                    <Image src={Computer} alt="Live Project Tracker" className="w-20 h-20 p-2" />
                  </div>
                  <p className="text-[15px] mt-4 mb-2 text-black font-semibold">Live Project Tracker</p>
                  <p className="max-w-[340px] text-center text-[11px] text-black text-opacity-50 mx-auto">
                    Live Project Tracking System provides real-time access to project progress through a dashboard, ensuring transparency and seamless collaboration. Designed to keep stakeholders informed and aligned.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-[30px] font-semibold text-center pt-14">Our Technology <span className="text-[#2A92FF]">Stack</span>  </h2>
          <div className="flex justify-center">
            <div className="w-[90%] mx-auto grid gap-y-8 mt-16 mb-16 grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {[logoReact, Java, Php, python, Node, RFID, Js, Laraval, Firbase, Mongo, Anaconda, Electrone, csharp, Github, Android].map(
                (src, index) => (
                  <Image
                    key={index}
                    className="w-20 h-20 hover:scale-110 transition-transform duration-500 flex justify-self-center mt-5 mb-5"
                    data-aos="fade-up"
                    src={src}
                    alt={src.toString().split("/").pop().split(".")[0]}
                  />
                )
              )}
            </div>
          </div>
        </div>
        <div className=" bg-white text-black ">
          <h2 className="text-[30px] font-semibold text-center pt-14" data-aos="fade-up" >What Our <span className="text-[#2A92FF]">Clients </span>Say</h2>
<<<<<<< HEAD
          <div className="flex justify-between mt-12 ml-0 mr-0 2xl:ml-[5%] 2xl:mr-[5%]">
            <div className=" flex justify-between ml-6 mr-6" data-aos="zoom-in-up" >
              <div className="bg-[#f9f9f9] shadow-md scale-100 hover:scale-105 hover:duration-500 duration-500 rounded-[25px]">
                <div className="ml-[20px] mr-[20px]">
                  <p className=" mb-3 text-center pt-8 "><strong>Excellent Service!</strong></p>
                  <p className="max-w-[300px] text-center text-sm">
                    I had an amazing experience with this service. The team was professional, the quality was top-notch,
                    and the response time was super fast. Highly recommend to everyone!  I had an amazing experience with this service. The team was professional, the quality was top-notch,
                    and the response time was super fast. Highly recommend to everyone! and the response time was super fast. Highly recommend to everyone!
                  </p>
                </div>
                <div className=" text-[#FFD700] flex justify-self-center  text-[30px]">
                  ★★★★★
                </div>
                <div className="flex justify-center p-2">
                  <Image src={Aravindha} alt="Mr Aravindha" className="w-12 h-12" />
                  <div>
                    <p className=" font-bold ml-4 ">Mr. Aravindha Koralage</p>
                    <p className="w-[200px] ml-4 mt-0 mb-4 mr-0 text-[10px] ">Managing Director At Global Talent Solutions</p>
                  </div>
                </div>
              </div>
=======
          {isWiggleActive && (
            <div className="flex justify-center mt-3">
              <motion.div
                className="flex justify-self-center   text-white text-xs bg-black px-3 py-1 rounded-full"
                animate={{ x: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                Swipe to Scroll →
              </motion.div>
>>>>>>> devmaneth
            </div>
          )}
          <div
            className="flex justify-between md:justify-center items-center mt-12 overflow-x-auto scrollbar-hide px-4 relative"
            ref={sliderRef}
          >
            <div className="flex gap-6 m-5 ">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
          <div className=" flex justify-center">
            <div className="mt-16 mb-10">
              <h2
                className="font-semibold text-center text-[30px] md:text-[40px] lg:text-[50px] 
             bg-gradient-to-r from-[#3890FF] to-[#D95BB6] bg-clip-text text-transparent"
                data-aos="fade-top"
              >
                Collaborate with Us to Build Smarter Solutions
              </h2>
              <br />
              <h3 className="text-[18px] font-semibold text-white px-4 py-2 bg-gradient-to-r flex justify-self-center from-[#3890FF] to-[#D95BB6] inline-block rounded-[25px]" data-aos="fade-bottom" >
                Let’s Start Your Project
              </h3>
            </div>
          </div>
          <br />
        </div>
        <div className="min-h-svh bg-[#D9D9D9] text-black pl-2 pr-2 ">
          <h2 className="text-[30px] font-semibold text-center pt-14" data-aos="fade-top">Smart <span className="text-[#2A92FF]">Solutions , </span>Worldwide <span className="text-[#2A92FF]">Impact </span></h2>
          <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 ml-[5%] mr-[5%] mb-0">
            <div className="text-center w-[150px] text-[#6B6B6B]" data-aos="fade-up">
              <h2 className="text-[#2A92FF] font-semibold text-[50px] md:text-[60px]">1+</h2>
              <p className="font-semibold text-center">Years Of Experience</p>
            </div>
            <div className="text-center w-[150px] text-[#6B6B6B]" data-aos="fade-up">
              <h2 className="text-[#2A92FF] font-semibold text-[50px] md:text-[60px]">5+</h2>
              <p className="font-semibold text-center">Clients Connected</p>
            </div>
            <div className="text-center w-[150px] text-[#6B6B6B]" data-aos="fade-up">
              <h2 className="text-[#2A92FF] font-semibold text-[50px] md:text-[60px]">100%</h2>
              <p className="font-semibold text-center">Client Satisfaction Rate</p>
            </div>
            <div className="text-center w-[150px] text-[#6B6B6B]" data-aos="fade-up">
              <h2 className="text-[#2A92FF] font-semibold text-[50px] md:text-[60px]">3+</h2>
              <p className="font-semibold text-center">Countries in Operation</p>
            </div>
          </div>
          <div className="flex justify-center mb-10" data-aos="fade-up"  >
            <Image src={Map} alt="Jepsoft Opartion Map" className="mt-14 w-[85%] rounded-[25px] shadow-xl duration-500 hover:duration-500 hover:scale-105 " data-aos="zoom-in-up" />
          </div>
          <br />
        </div>
        <div>
        </div>
        <div className="bg-white scale-100 pl-[5%] pr-[5%]  min-h-svh">
          <div className="text-center pt-8 ">
            <h2 className="text-[30px] font-semibold text-center pt-8 pb-10" data-aos="fade-up" >Why do you choose <span className="text-[#2A92FF]">Jepsoft </span></h2>
            <p className="" >Jepsoft is your trusted partner for smart, innovative, and high-quality digital solutions. We create custom websites, software, NFC cards, and AI-powered chatbots designed to help businesses grow. With a strong focus on quality, reliability, and customer satisfaction, we ensure every project meets the highest standards. Our expert team works closely with you to bring your ideas to life, offering seamless support and cutting-edge technology. Whether you’re a startup or an established business, Jepsoft provides the tools you need to succeed. Choose Jepsoft for solutions that make a real impact simple, powerful, and built for the future! </p>
          </div>
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-1/2 ">
              <form action="#" className="space-y-8">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                  <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@jepsoft.com" required />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                  <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-[20px] border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                  <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-[20px] shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-[20px] bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Send message</button>
              </form>
            </div>
            <div className="hidden lg:block w-1/2 pl-8 ml-10 ">
              <p className="text-gray-600 text-sm min-w-[350px] text-center font-bold">Have a project in mind or need expert software solutions? We’re here to help! Whether you’re looking for web development, AI solutions, or custom software, our team is ready to turn your ideas into reality.</p>
              <div className="flex justify-center mt-20">
                <Image src={User} className="w-14 h-14 ml-3 mr-3" alt="Social Links" />
                <Image src={User} className="w-14 h-14 ml-3 mr-3" alt="Social Links" />
                <Image src={User} className="w-14 h-14 ml-3 mr-3" alt="Social Links" />
                <Image src={User} className="w-14 h-14 ml-3 mr-3" alt="Social Links" />
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-[#100425]">
          <div className="p-14">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="https://jepsoft.com/" className="flex items-center ml-[-20px] mt-[-20px] ">
                  <Image src={Logo} className="h-24 object-contain w-24 mr-[-10px]" alt="Jepsoft Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap text-white  ">Jepsoft</span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div className="" >
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase">Resources</h2>
                  <ul className="text-gray-300 font-medium">
                    <li className="mb-4">
                      <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                    </li>
                    <li>
                      <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
                  <ul className="text-gray-300 font-medium">
                    <li className="mb-4">
                      <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                    </li>
                    <li>
                      <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
                  <ul className="text-gray-300 font-medium">
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
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-white sm:text-center">© 2025 <a href="https://jepsoft.com/" className="hover:underline">Jepsoft™</a>. All Rights Reserved.
              </span>
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                <a href="#" className="text-white hover:text-gray-900">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                    <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Facebook page</span>
                </a>
                <a href="#" className="text-white hover:text-gray-900 ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                  </svg>
                  <span className="sr-only">Discord community</span>
                </a>
                <a href="#" className="text-white hover:text-gray-900 ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </a>
                <a href="#" className="text-white hover:text-gray-900 ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.016A10.038 10.038 0 0 0 10 3.01 10.06 10.06 0 0 0 7.024 3.585c-.084.144-.17.291-.254.44-.175.297-.348.605-.526.91-.073.126-.148.253-.222.378-.042.071-.084.141-.127.212-.014.019-.029.038-.043.057-.005.01-.01.019-.015.029-.082.151-.157.31-.231.469.133.367.278.727.432 1.085-.308-.033-.613-.079-.919-.122-.238-.109-.477-.224-.715-.337a8.36 8.36 0 0 0 1.77 6.268c-.01.01-.02.021-.03.031-.215-.104-.423-.218-.633-.332a7.903 7.903 0 0 0 2.639-2.091c-.008-.036-.015-.073-.022-.11-.354-.813-.61-1.662-.74-2.521a7.712 7.712 0 0 1-4.657 1.701c-.12-.086-.24-.174-.358-.262-.88-.622-.91-.99-.003-1.618-.011-.024.01-.057.017-.086a7.646 7.646 0 0 1-1.308-.45c-.065.254-.14.507-.212.759-.65.325-1.296.648-1.948.97-.22-.188-.443-.375-.664-.561-.545-.478-.98-.995-1.3-1.609 3.055-.516 5.312-2.67 5.312-4.759a7.727 7.727 0 0 0-1.422-3.573c-.318.243-.663.476-.986.704-.182-.393-.34-.772-.498-1.16.348-.289.662-.623.985-.958-.348.01-.679-.04-1-.138a6.33 6.33 0 0 1-.353-.262C9.999 6.67 10.553 4.616 16.613 4.614Z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Github page</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}