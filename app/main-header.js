import Link from 'next/link';
import logIMG from '@/assets/logo.png';
import Image from 'next/image';

export default function MainHeader() {
  return (
    <header className='flex justify-between items-center px-4 py-4'>
      <Link className='flex items-center justify-center gap-4 text-[#c2f5ea] font-bold uppercase text-2xl tracking-wider font-montserrat no-underline' href='/'>
        <Image className='object-contain drop-shadow-[0_0_12px_rgba(0,0,0,0.5)]' src={logIMG} width={70} height={70} quality={100} alt='plate with foods' priority />
        Noob Gamings and Foodies
      </Link>
      <nav>
        <ul className='list-none m-0 p-0 flex gap-6 text-xl text-[#c2f5ea] font-bold px-4 py-2 rounded-md '>
          <li>
            <Link className='hover:bg-gradient-to-r hover:from-[#ffac05] hover:to-[#f6d69c] 
           hover:bg-clip-text hover:text-transparent' href='/gamings'>Browse games</Link>
          </li>
          <li>
            <Link className='hover:bg-gradient-to-r hover:from-[#ffac05] hover:to-[#f6d69c] 
           hover:bg-clip-text hover:text-transparent' href='/meals'>Blog for Foodies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}