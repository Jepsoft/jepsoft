'use client'
import Link from 'next/link';
import Logo from "../../images/logo.png";
import Happy from "../../icons/happy.png";
import BG from '../../images/image copy.png';
import Login from "../../icons/enter.png";
import Hat from "../../images/santa-hat.png";
import Grd from "./graduate.png";
import Logout from "./logout.png";
import Image from 'next/image';
import '../../style.scss';
import { useEffect, useState } from 'react'
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';
import { Content } from 'next/font/google';
import Loader from "../../loader.gif";
export default function Dashboard() {
    const [token, settoken] = useState('');
    const [Enroll, setEnroll] = useState('Enroll Now');
    const [status, setstatus] = useState('Not Enrolled');
    const [logouttext, setlogout] = useState('Welcome');
    const [isSticky, setIsSticky] = useState(false);
    const [islogin, setislogin] = useState(Login);
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
    useEffect(() => {
        settoken(localStorage.getItem('token'));
        if (typeof window === 'undefined') {
            localStorage.getItem('token');
        }
    }, [])
    const coming_soon_msg = () => {
        enqueueSnackbar("Coming Soon", { variant: 'info' });
    }
    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.post(
            'https://jepsoft.com/backend/public/api/check_enroll',
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        ).then((response) => {
            if (response.data.message == "success" && response.data.course_id == "1") {
                setEnroll('Join Now');
                setstatus("Enrolled");
                setlogout("Logout");
                setislogin(Logout);

            }
        }).catch((error) => {
            window.location.href = 'https://jepsoft.com/education/lms-login';
        });
    }, []);

    const logout = () => {
        localStorage.clear();
        window.location.href = 'https://jepsoft.com/education';
    }
    const join_devide = () => {
        if (status == "Enrolled") {
            enqueueSnackbar("Joining to the Class..", { variant: 'info' });
            setTimeout(() => {
                window.location.href = "https://meet.google.com/pym-zigk-dpa";
            }, 1500);

        } else if (status == "Not Enrolled") {
            enqueueSnackbar("Send Whatsapp Message for Enroll", { variant: 'info' });
            setTimeout(() => {
                window.location.href = "https://wa.me/94774835253?text=I%20would%20like%20to%20join%20the%20web%20development%20course";
            }, 1500);
        }

    }
    return (
        <div>
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
                                <Link href={"/education"} className=' cursor-pointer'>

                                    <Image className="w-10 h-10 rounded-full" src={islogin} alt="user photo" />
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
            </div>

            <div className="ml-[5%] mr-[5%] flex justify-center items-center flex-wrap absolute left-0 right-0 top-0 bottom-0">
                <div className="m-3 w-full sm:w-[45%] md:w-[30%] p-6 backdrop-blur-sm bg-white bg-opacity-25 shadow-lg shadow-[#0080ff] rounded-lg ">
                    <a href="#">
                        <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-white ">
                            Web Development Free Course
                        </h5>
                    </a>
                    <p className="mb-3 text-base sm:text-lg font-normal text-gray-100">
                        We will teach you the basics of web development. You will Learn HTML, CSS, JavaScript and web hosting.
                    </p>
                    <a
                        href="#"
                        onClick={() => join_devide()}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-white ai-gradient-bg rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
                    >
                        {Enroll}
                        <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}