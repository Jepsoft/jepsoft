'use client'
import Image from 'next/image';
import Jepsoft from '../../icons/Jepsoft.svg';
import '../../style.scss';
import Link from 'next/link';
import Loader from "../../loader.gif";
import { enqueueSnackbar } from 'notistack';
import Logo from "../../images/logo.png";
import '../../style.scss';
import axios from 'axios';
import BG from '../../images/image copy.png';
import Hat from "../../images/santa-hat.png";
import Education from '../../images/mortarboard.png';
import Happy from "../../icons/happy.png";
import { useEffect, useState } from 'react';
export default function Lms_login() {
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


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login_user = () => {
        axios.post('https://jepsoft.com/backend/public/api/login', {
            email,
            password
        }).then((response) => {
            localStorage.setItem('token', response.data.token);
            enqueueSnackbar("Login Success", { variant: 'success' });
            window.location.href = 'https://jepsoft.com/education/lms';

        }).catch((error) => {
            enqueueSnackbar("Check Your Email or Connection", { variant: 'error' });
        });
    }
    return (
        <div>
            {isLoading && (
                <div className='flex justify-center backdrop-blur-sm items-center fixed left-0 right-0 top-0 bottom-0 z-50'>
                    <Image unoptimized src={Loader} alt='loader' className='object-contain' />
                </div>
            )}
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
                <div className=' h-svh flex justify-center items-center '>
                    <div class="mt-10 sm:mx-auto ml-[5%] mr-[5%] w-full bg-black bg-opacity-30 backdrop-blur-sm sm:w-full max-w-md shadow-lg shadow-[#af69ff]  p-5 rounded-[30px]">
                        <form className=" space-y-6">
                            <h1 className=' text-white text-[25px] text-center font-bold mt-5'>Jepsoft Education</h1>
                            <div>
                                <label for="email" class="block text-sm font-medium leading-6 text-white">Email address</label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Your Email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} // Update state on change
                                        className="pl-2 block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black rounded-[30px] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div class="flex items-center justify-between">
                                    <label for="password" class="block text-sm font-medium leading-6 text-white">Password</label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Your Password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} // Update state on change
                                        className="block w-full rounded-[30px] border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                                    />
                                </div>
                            </div>
                            <p class="mt-10 text-center text-md ai-gradient-textt ">
                                Not a member?
                                <a href="https://wa.me/94774835253" class="font-semibold leading-6 text-blue-600 hover:text-indigo-500"> Contact Us</a>
                            </p>
                            <div>
                                <h1 onClick={() => login_user()} class="flex w-full justify-center rounded-[30px] ai-gradient-bg px-3 py-1.5 text-sm cursor-pointer font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login here</h1>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}