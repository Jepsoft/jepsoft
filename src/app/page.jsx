'use client'
import Image from "next/image";
import Bot from "./icons/happy.png";
import axios from "axios";
import BG from "./wallpaper.webp";
import CSD from "./jepimg/csd.png";
import Computer from "./jepimg/comp.png";
import Hand from "./jepimg/hand.png";
import newimage from "./jepimg/new.png";
import logoReact from "./icons/react.webp";
import Java from "./icons/java.webp";
import RFID from "./icons/rfid.webp";
import csharp from "./icons/Csharp.webp";
import Electrone from "./icons/Electron.webp";
import Firbase from "./icons/Firebase.webp";
import Github from "./icons/GitHub.webp";
import Laraval from "./icons/Laravel.webp";
import Mongo from "./icons/MongoDB.webp";
import Node from "./icons/node.webp";
import Anaconda from "./icons/Anaconda.webp";
import Js from "./icons/js.webp";
import Php from "./icons/php.webp";
import Android from "./icons/Android.png";
import python from "./icons/python.webp";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Hey this is Jemo from Jepsoft. How Can I Assist You Today.' },
  ]);
  const [input, setInput] = useState('');

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

  return (
    <div>
      <div>
        <Image src={BG} className=" relative left-0 right-0 top-0 bottom-0 object-cover h-[100vh] " alt="Wallpaper" />
        <nav
          className={`fixed w-full z-20 top-0 left-0 transition-all duration-300 pt-1 ${scrolled
            ? " bg-gray-900 shadow-lg pb-1 bg-opacity-85 "
            : "bg-transparent pt-0"
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
                className="text-white bg-blue-700 hover:bg-blue-800 hover:scale-105 hover:duration-500 duration-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[25px] text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                get a quote
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
                    className=" scale-100 duration-500 hover:scale-110 hover:duration-500  block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className=" scale-100 duration-500 hover:scale-110 hover:duration-500 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className=" scale-100 duration-500 hover:scale-110 hover:duration-500 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className=" scale-100 duration-500 hover:scale-110 hover:duration-500 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className=" scale-100 duration-500 hover:scale-110 hover:duration-500 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className=" scale-100 duration-500 hover:scale-110 hover:duration-500 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          <div className="chat-container" >
            <Image src={Bot} className="bot w-16 h-16 fixed bottom-10 right-10 z-50" alt="chat bot" />
            <p className="chat-text w-44  text-white h-9 flex justify-center items-center rounded-[25px] fixed bottom-28 right-24 z-50 bg-gray-800">
              <span className="typing max-w-32">Chat with Jemo</span>
            </p>
          </div>
          {/* Chatbox */}
          {/* <div className="bg-white rounded-[25px] shadow-md w-[25%] h-[70vh] fixed bottom-28 right-20 z-[999] flex flex-col">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold flex items-center justify-between px-4 py-3 rounded-t-[25px]">
              <Image src={Bot} alt="chatbot" className="w-10 h-10" />
              <span>Chat with Jemo</span>
              <button className="text-white bg-transparent border-none text-lg">×</button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} space-x-2`}
                >
                  <Image src={Bot} className="w-9 h-9" alt="chatbot" />
                  <div
                    className={`${message.role === 'assistant' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                      } px-4 py-2 rounded-b-[10px] rounded-tr-[10px] shadow text-xs`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="bg-gray-100 p-4 rounded-b-[25px] flex items-center space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={handleInputChange}
                className="flex-1 bg-white border-none outline-none border-gray-300 rounded-full px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-[2px] ring-[2px] focus:ring-blue-600"
              />
              <button
                onClick={sendMessage}
                className="bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Send
              </button>
            </div>
          </div> */}
          <div className=" relative bottom-[250px] ml-[70px] ">
            <h2 className="text-white text-[50px] font-semibold">Transforming industries with cutting-edge</h2>
            <h2 className="text-white text-[50px] font-semibold">software solutions</h2>
            <br />
            <p className="text-white text-[21px]">Based in Sri Lanka. Delivering Innovative Solutions Worldwide</p>
          </div>
        </div>
        <div className="bg-[#EEF6FF] absolute left-0  right-0 bottom-0 top-[100vh] h-[100vh]">
          <div className="w-full text-center mt-[2%]">
            <h2 className="text-center font-semibold text-[30px]">Discover the Power of <span className="text-[#2A92FF]">Jepsoft</span></h2>
            <p className="mt-[1%] ml-[4%] mr-[4%] text-justify mb-5">Jepsoft is a forward-thinking software company committed to empowering businesses through innovative and tailored solutions. Our expertise spans custom software development,Web Development, NFC card creation, ID card production, and a wide
              range of advanced digital tools. By streamlining workflows, enhancing data security, and elevating customer experiences, we help businesses thrive in an ever-evolving market. With a team of passionate developers and industry experts,
              we deliver user-friendly, efficient solutions designed to boost productivity, reduce operational costs, and support informed decision-making. At Jepsoft, we are dedicated to turning your vision into reality with technology that works for you.
            </p>
          </div>
          <div className="bg-[#100425] absolute left-0 right-0 bottom-0 h-[68%] ">
            <div className="border-cyan-400" >
              <h2 className="text-white text-[25px] text-center pt-14">What We Build</h2>
            </div>
            <div className="flex justify-center pt-[4%] " >
              <div className="relative p-[2px] rounded-[40px] bg-gradient-to-r from-[#3890FF] to-[#D95BB6] ml-5 mr-5">
                <div className="rounded-[40px] bg-[#100425] pl-4 pr-4 pt-10 pb-5 ">
                  <div className="flex justify-center">
                    <Image src={CSD} className="w-20 h-20 mb-4" alt="Custom Software Development" />
                  </div>
                  <div className="flex justify-center">
                    <p className="text-white text-[15px] mb-4">Custom Software Development</p>
                  </div>
                  <div className="flex justify-center">
                    <p className=" max-w-[230px] text-center text-[12px] text-white " >We specialize in custom software development, creating tailored solutions that optimize efficiency, enhance user experience, and drive business growth</p>
                  </div>
                  <h4 className="text-white text-center bg-gradient-to-r from-[#3890FF] to-[#D95BB6] p-1.5 mt-3 text-sm rounded-[40px]">Explore More</h4>
                </div>
              </div>
              <div className="relative p-[2px] rounded-[40px] bg-gradient-to-r from-[#3890FF] to-[#D95BB6] ml-5 mr-5">
                <div className="rounded-[40px] bg-[#100425] pl-4 pr-4 pt-10 pb-5 ">
                  <div className="flex justify-center">
                    <Image src={CSD} className="w-20 h-20 mb-4" alt="Custom Software Development" />
                  </div>
                  <div className="flex justify-center">
                    <p className="text-white text-[15px] mb-4">Custom Software Development</p>
                  </div>
                  <div className="flex justify-center">
                    <p className=" max-w-[230px] text-center text-[12px] text-white " >We specialize in custom software development, creating tailored solutions that optimize efficiency, enhance user experience, and drive business growth</p>
                  </div>
                  <h4 className="text-white text-center bg-gradient-to-r from-[#3890FF] to-[#D95BB6] p-1.5 mt-3 text-sm rounded-[40px]">Explore More</h4>
                </div>
              </div>
              <div className="relative p-[2px] rounded-[40px] bg-gradient-to-r from-[#3890FF] to-[#D95BB6] ml-5 mr-5">
                <div className="rounded-[40px] bg-[#100425] pl-4 pr-4 pt-10 pb-5 ">
                  <div className="flex justify-center">
                    <Image src={CSD} className="w-20 h-20 mb-4" alt="Custom Software Development" />
                  </div>
                  <div className="flex justify-center">
                    <p className="text-white text-[15px] mb-4">Custom Software Development</p>
                  </div>
                  <div className="flex justify-center">
                    <p className=" max-w-[230px] text-center text-[12px] text-white " >We specialize in custom software development, creating tailored solutions that optimize efficiency, enhance user experience, and drive business growth</p>
                  </div>
                  <h4 className="text-white text-center bg-gradient-to-r from-[#3890FF] to-[#D95BB6] p-1.5 mt-3 text-sm rounded-[40px]">Explore More</h4>
                </div>
              </div>
              <div className="relative p-[2px] rounded-[40px] bg-gradient-to-r from-[#3890FF] to-[#D95BB6] ml-5 mr-5">
                <div className="rounded-[40px] bg-[#100425] pl-4 pr-4 pt-10 pb-5 ">
                  <div className="flex justify-center">
                    <Image src={CSD} className="w-20 h-20 mb-4" alt="Custom Software Development" />
                  </div>
                  <div className="flex justify-center">
                    <p className="text-white text-[15px] mb-4">Custom Software Development</p>
                  </div>
                  <div className="flex justify-center">
                    <p className=" max-w-[230px] text-center text-[12px] text-white " >We specialize in custom software development, creating tailored solutions that optimize efficiency, enhance user experience, and drive business growth</p>
                  </div>
                  <h4 className="text-white text-center bg-gradient-to-r from-[#3890FF] to-[#D95BB6] p-1.5 mt-3 text-sm rounded-[40px]">Explore More</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[78vh] bg-[#EDF6FF]"></div>
        <div className="bg-[#EDF6FF] pb-2 min-h-[100vh]">
          <h2 className="text-[30px] font-semibold text-center pt-4 pb-4">How <span className="text-[#2A92FF]">Jepsoft</span> Perform With Your Project</h2>
          <div className="flex justify-center pt-10 " >
            <div className="relative duration-500 hover:scale-105 hover:duration-500 hover:shadow-lg  rounded-[40px] bg-gradient-to-r shadow-md ml-8 mr-8 ">
              <div className="rounded-[40px]  pl-4 pr-4 pt-5 pb-5 ">
                <div className="flex justify-center">
                  <Image src={Hand} alt="Smart Business Analysis" className="w-20 h-20" />
                </div>
                <div className="flex justify-center">
                  <p className=" text-[15px] mb-4 text-black font-semibold ">Smart Business Analysis</p>
                </div>
                <div className="flex justify-center">
                  <p className=" max-w-[340px] text-center text-[11px] text-black text-opacity-50 " >At Jepsoft, we work closely with you to understand your business needs through clear communication and strategic planning. By analyzing your challenges, we craft tailored solutions and provide actionable insights to keep your business ahead. Our focus is on delivering effective strategies that drive sustainable growth and success</p>
                </div>
              </div>
            </div>
            <div className="relative duration-500 hover:scale-105 hover:duration-500 hover:shadow-lg  rounded-[40px] bg-gradient-to-r shadow-md ml-8 mr-8 ">
              <div className="rounded-[40px]  pl-4 pr-4 pt-10 pb-5 ">
                <div className="flex justify-center">
                  <Image src={newimage} alt="Smart Business Analysis" className="w-16 h-16 mb-3" />
                </div>
                <div className="flex justify-center">
                  <p className=" text-[15px] mb-4 text-black font-semibold ">AI-Powered Design & Development</p>
                </div>
                <div className="flex justify-center">
                  <p className=" max-w-[340px] text-center text-[11px] text-black text-opacity-50 " >With AI-Powered Design & Development, we combine advanced artificial intelligence with creative design to deliver innovative and efficient solutions for your business. We use AI to streamline processes, improve user experiences, and build smarter, more scalable applications. Our goal is to keep your business ahead with cutting-edge technology and seamless, tailored development</p>
                </div>
              </div>
            </div>
            <div className="relative duration-500 hover:scale-105 hover:duration-500 hover:shadow-lg  rounded-[40px] bg-gradient-to-r shadow-md ml-8 mr-8 ">
              <div className="rounded-[40px] pl-4 pr-4 pt-10 pb-5 ">
                <div className="flex justify-center">
                  <Image src={Computer} alt="Smart Business Analysis" className="w-20 h-20 p-2" />
                </div>
                <div className="flex justify-center">
                  <p className=" text-[15px] mb-4 text-black font-semibold ">Live Project Tracker</p>
                </div>
                <div className="flex justify-center">
                  <p className=" max-w-[340px] text-center text-[11px] text-black text-opacity-50 " >Live Project Tracking System gives clients real-time access to their project’s progress through a user-friendly dashboard. With clear insights into milestones, updates, and overall status, it ensures complete transparency and seamless collaboration. Designed to keep stakeholders informed and aligned, our system simplifies project management while building trust. At JepSoft, we make staying on top of your projects effortless and efficient</p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-[30px] font-semibold text-center pt-14">Our Technology <span className="text-[#2A92FF]">Stack</span>  </h2>
          <div className="flex justify-center">
          <div className="w-[90%] mx-auto grid gap-y-8 mt-16 mb-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
            <Image
              className="w-20 h-20 hover:scale-110 transition-transform duration-500 flex justify-self-center "
              src={logoReact}
              alt="React"
            />
            <Image
              className="w-20 h-20 hover:scale-110 transition-transform duration-500 flex justify-self-center"
              src={Java}
              alt="Java"
            />
            <Image
              className="w-20 h-20 hover:scale-110 transition-transform duration-500 flex justify-self-center"
              src={Php}
              alt="PHP"
            />
            <Image
              className="w-20 h-20 hover:scale-110 transition-transform duration-500 flex justify-self-center"
              src={python}
              alt="Python"
            />
            <Image
              className="w-20 h-20 hover:scale-110 transition-transform duration-500 flex justify-self-center"
              src={Node}
              alt="Node.js"
            />
            <Image
              className="w-20 h-20 hover:scale-110 transition-transform duration-500 flex justify-self-center"
              src={RFID}
              alt="RFID"
            />
            <Image
              className="w-20 h-20 hover:scale-110 transition-transform duration-500 flex justify-self-center"
              src={Js}
              alt="JavaScript"
            />
            <Image
              className="w-20 h-20 hover:scale-110 transition-transform duration-500 flex justify-self-center "
              src={Laraval}
              alt="Laravel"
            />
            <Image
              className="w-20 h-20 hover:scale-110 transition-transform duration-500 flex justify-self-center "
              src={Firbase}
              alt="Firebase"
            />
            <Image
              className="w-20 h-20 hover:scale-110 transition-transform duration-500 flex justify-self-center "
              src={Mongo}
              alt="MongoDB"
            />
            <Image
              className="w-20 h-20 hover:scale-110 transition-transform duration-500 flex justify-self-center "
              src={Anaconda}
              alt="Anaconda"
            />
            <Image
              className="w-20 h-20 hover:scale-110 transition-transform duration-500 flex justify-self-center "
              src={Electrone}
              alt="Electron"
            />
            <Image
              className="w-20 h-20 hover:scale-110 transition-transform duration-500 flex justify-self-center "
              src={csharp}
              alt="C#"
            />
            <Image
              className="w-20 h-20 hover:scale-110 transition-transform duration-500 flex justify-self-center "
              src={Github}
              alt="GitHub"
            />
            <Image
              className="w-20 h-20 hover:scale-110 transition-transform duration-500 flex justify-self-center "
              src={Android}
              alt="Android"
            />
          </div>
          </div>
          <div className=" min-h-[100vh] bg-white ">
          <h2 className="text-[30px] font-semibold text-center pt-14">What Our <span className="text-[#2A92FF]">Clients</span> Say  </h2>
             <div className="flex justify-between ml-[5%] mr-[5%] mt-10 ">
              <div className="border">
                
                <h3>handleScroll</h3>
              </div>
              <div className="border">
                <h3>handleScroll</h3>
              </div>
              <div className="border">
                <h3>handleScroll</h3>
              </div>
              <div className="border">
                <h3>handleScroll</h3>
              </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}