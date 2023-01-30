import Image from 'next/image'
import { Inter } from '@next/font/google'
import { BsMoonStarsFill } from 'react-icons/bs';
import { AiFillCode, AiFillTwitterCircle, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import waveimg from 'public/dev-ed-wave.png';
import design from 'public/design.png';
import code from 'public/code.png';
import consulting from 'public/consulting.png';
import web1 from 'public/web1.png';
import web2 from 'public/web2.png';
import web3 from 'public/web3.png';
import web4 from 'public/web4.png';
import web5 from 'public/web5.png';
import web6 from 'public/web6.png';
/*import { useState } from 'react';*/


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <main className=' bg-orange-100 px-10 text-black md:px-20 lg:px-40'>
      <section className='min-h-screen'>
        <nav className=' flex justify-between p-10 mb-10'>
          <h1 className=' text-xl flex items-center'> <AiFillCode />ergin.erkiner</h1>
          <ul className=' flex items-center'>
            <li><BsMoonStarsFill className=' cursor-pointer text-xl mr-4' /></li>
            <li><a href='#' className=' text-white rounded bg-gradient-to-b from-green-300 to to-teal-700 p-2'>Resume</a></li>
          </ul>
        </nav>

        <div className='text-center p-8'>
          <h2 className=' text-5xl py-2 font-medium md:text-6xl'>Ergin Erkiner</h2>
          <h3 className=' text-2xl py-2 mb:text-3xl'>web developer and designer</h3>
          <p className=' text-md py-5 leading-5 text-gray-400 md:text-xl mx-auto'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>

        <div className=' text-5xl flex justify-center gap-10 py-4'>
          <a href='https://twitter.com' target={ '_blank'}><AiFillTwitterCircle /></a>
          <a href='https://facebook.com' target={'_blank'}><AiFillFacebook /></a>
          <a href='https://linkedin.com' target={'_blank'}><AiFillLinkedin /></a>

        </div>

        <div className=' relative mx-auto overflow-hidden bg-gradient-to-b from-green-300 to-teal-700 rounded-full w-80 h-80 p-10 mt-5 md:h-96 md:w-96'>
          <Image src={ waveimg }  alt='Hello There!' title='Hello There!'/>
        </div>

      </section>

      <section className=' mx-auto mt-4'>
        <div>
          <h3 className=' text-3xl py-2'>Services offered</h3>
          <p className=' text-md py-5 leading-5 text-gray-400'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>

        <div className='lg:flex gap-10'>
          <div className=' text-center shadow-lg p-10 rounded-xl my-10 '>
            <Image className=' mx-auto' src={design} width={100} height={100} alt='' />
            <h3 className=' text-lg font-medium text-black pt-8 pb-2'>Modern Designs</h3>
            <p>I create websites that are up-to-date and look gorgeous.</p>
            <h4 className='py-4 text-black font-medium'>Tools I Use</h4>
            <ul className=' px-4'>
              <li>Next.Js</li>
              <li>React</li>
              <li>Adobe DW</li>
            </ul>
            </div>

            <div className=' text-center shadow-lg p-10 rounded-xl my-10 '>
            <Image className=' mx-auto' src={code} width={100} height={100} alt='' />
            <h3 className=' text-lg font-medium text-black pt-8 pb-2'>Modern Designs</h3>
            <p>I create websites that are up-to-date and look gorgeous.</p>
            <h4 className='py-4 text-black font-medium'>Tools I Use</h4>
            <ul className=' px-4'>
              <li>Next.Js</li>
              <li>React</li>
              <li>Adobe DW</li>
            </ul>
            </div>

            <div className=' text-center shadow-lg p-10 rounded-xl my-10 '>
            <Image className=' mx-auto' src={consulting} width={100} height={100} alt='' />
            <h3 className=' text-lg font-medium text-black pt-8 pb-2'>Modern Designs</h3>
            <p>I create websites that are up-to-date and look gorgeous.</p>
            <h4 className='py-4 text-black font-medium'>Tools I Use</h4>
            <ul className=' px-4'>
              <li>Next.Js</li>
              <li>React</li>
              <li>Adobe DW</li>
            </ul>
            </div>

        </div>


      </section>

      <section>
        <div>
          <h3 className=' text-3xl py-1'>Portfolio</h3>
        </div>

        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          <div className='basis-1/3 flex-1'>
            <Image className='rounded-lg object-cover w-100 h-100 md:h-200 md:w-200' src={web1} alt=''/>
          </div>

          <div className='basis-1/3 flex-1'>
            <Image className='rounded-lg object-cover w-100 h-100 md:h-200 md:w-200' src={web2} alt=''/>
          </div>

          <div className='basis-1/3 flex-1'>
            <Image className='rounded-lg object-cover w-100 h-100 md:h-200 md:w-200' src={web3} alt=''/>
          </div>

          <div className='basis-1/3 flex-1'>
            <Image className='rounded-lg object-cover w-100 h-100 md:h-200 md:w-200' src={web4} alt=''/>
          </div>

          <div className='basis-1/3 flex-1'>
            <Image className='rounded-lg object-cover w-100 h-100 md:h-200 md:w-200' src={web5} alt=''/>
          </div>

          <div className='basis-1/3 flex-1'>
            <Image className='rounded-lg object-cover w-100 h-100 md:h-200 md:w-200' src={web6} alt=''/>
          </div>
        </div>

      </section>



    </main>
  );
}
