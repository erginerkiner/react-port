import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { BsCodeSquare } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=' bg-orange-100 px-10'>
     <section className='min-h-screen'>
      <nav className='p-10 mb-12 flex justify-between'>
        <h1 className=' text-base flex items-center text-black'><BsCodeSquare className=' text-black text-2xl flex items-center mr-2'  /> ergin</h1>
        <ul className='flex items-center'>
<li><BsFillMoonStarsFill className=' text-black cursor-pointer text-2xl'/></li>
<li><a className=' bg-gradient-to-r from-green-400 to-orange-400 text-white p-4 rounded-md ml-4' href='#'>Resume</a></li>

        </ul>
      </nav>

    <div className='text-center p-10'>
    <h2 className=' text-5xl py-2 text-black font-medium mx-auto'>ergin erkiner</h2>
      <h3 className=' text-2xl py-2 text-gray-500'>web developer and designer</h3>
        <p className=' text-md py-5 leading-8 text-gray-700'>lorem ipsum asdasdas adsdlasdlasldas lasdlasdla</p>
    </div>
    <div className=' text-5xl justify-center flex gap-14 py-3 text-gray-500'>
      <AiFillTwitterCircle />
      <AiFillLinkedin />
      <AiFillFacebook />
    </div>

    <div>
      <Image />
    </div>

     </section>
    </main>
  );
}
