import webimg from './images/webimg.png';
import Image from 'next/image';
import Logo from './images/logo.png';
import reactIcon from './icons/science.png';
import phpIcon from './icons/php.png';
import javaIcon from './icons/java.png';
import sqlIcon from './icons/sql.png';
import dotNet from './icons/dotnet.svg';
import laravel from './icons/laravel.svg';
export default function Home() {
  return (
    <div className='bg-[#090827] h-svh'>
      <div className=''>
        <div>
          <Image src={Logo} width={100} height={100} alt="logo" className='w-52 ml-20 pt-5' unoptimized />
          <div className='nav-bar flex text-white absolute right-10 top-20 text-xl '>
            <h4 className='ml-10 mr-10'>Home</h4>
            <h4 className='ml-10 mr-10'>Service</h4>
            <h4 className='ml-10 mr-10'>Portfolio</h4>
            <h4 className='ml-10 mr-10'>About</h4>
            <h4 className='ml-10 mr-10'>Contact</h4>
          </div>
        </div>
        <div className='ml-10 mt-20'>
          <Image src={webimg} width={100} height={100} alt="animate-img-top" className='top-20 mt-10 absolute right-0 w-2/5 p-20 ' unoptimized />
          <h1 className='text-white text-7xl font-bold w-4/12 m-5 leading-normal'>Best Software Company Of The Planet</h1>
          <p className='text-white w-3/6 text-xl ml-5'>
            Our software company delivers cutting-edge solutions, we are team of expert developers and designers work closely with clients to create custom software that drives business growth, enhances efficiency, and delivers a seamless user experience.
          </p>
        </div>
        <div>
          <h4 className='text-center text-white mt-10'>
            Expert With,
          </h4>
          <div className=' justify-center flex mt-10'>
            <div className='ml-auto mr-auto'>
              <Image src={reactIcon} width={50} height={50} className='w-14 h-14' unoptimized />
              <h3 className='text-center text-white'>React</h3>
            </div>
            <div className='ml-auto mr-auto'>
              <Image src={phpIcon} width={50} height={50} className='w-14 h-14' unoptimized />
              <h3 className='text-center text-white'>PHP</h3>
            </div>
            <div className='ml-auto mr-auto'>
              <Image src={sqlIcon} width={50} height={50} className='w-14 h-14' unoptimized />
              <h3 className='text-center text-white'>SQL</h3>
            </div>
            <div className='ml-auto mr-auto'>
              <Image src={javaIcon} width={50} height={50} className='w-14 h-14' unoptimized />
              <h3 className='text-center text-white'>JAVA</h3>
            </div>
            <div className='ml-auto mr-auto'>
              <Image src={laravel} width={50} height={50} className='w-14 h-14' unoptimized />
              <h3 className='text-center text-white'>Laravel</h3>
            </div>
            <div className='ml-auto mr-auto'>
              <Image src={dotNet} width={50} height={50} className='w-14 h-14' unoptimized />
              <h3 className='text-center text-white'>.Net</h3>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}