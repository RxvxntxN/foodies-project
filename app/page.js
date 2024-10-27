import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import Link from "next/link";
import HomeSlider from './components/HomeSlider';

export default function Home() {
  return (
    <>
      <header className="flex gap-12 my-12 mx-auto w-[90%] max-w-[75rem]">
        <div>
          <HomeSlider />
        </div>
        <div className="flex flex-col space-y-8">
          <div>
            <h1 className="text-2xl font-bold font-montserrat tracking-wide uppercase bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent">
              <span>Gaming and Eating,</span>
              <span className="block">Do whatever you want !! </span>
            </h1>
            <p className="text-[#185838] text-hero font-bold">Taste & food from all over the world.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href='/community' className="text-xl">Join the Community</Link>
            <Link href='/foods' className="mt-0 px-4 py-2 rounded-md bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline">Explore Khabar Dabar</Link>
          </div>
        </div>
      </header>
      <main className="flex items-center flex-col space-y-8 ">
        <section className="flex items-center flex-col text-[#008080] text-xl max-w-[50rem] w-[90%] my-8 leading-loose">
          <h2 className="text-2xl font-bold text-center leading-loose">How it works</h2>
          <p className="mt-4 text-base leading-loose text-center">
            Gamings is a platform for gaming enthusiasts
            to share their favorite experiences with the world.
            Its a place to discover new games and connect with other gaming lovers.
          </p>
          <p className="mt-4 text-base leading-loose">
            Gamings is a place to discover new games and
            connect with other gaming enthusiasts.
          </p>
        </section>

        <section className="flex items-center flex-col text-[#008080] text-xl max-w-[50rem] w-[90%]">
          <h2 className=" font-bold text-center leading-loose">Why Gaming Communities? Why is the gaming community important?</h2>
          <p className="mt-4 text-base text-center leading-loose">
            Gamings is a vibrant platform for gamers to share their favorite experiences with the world.
            It serves as a hub for discovering new games and connecting with fellow gaming enthusiasts.
            The gaming community fosters creativity, collaboration,
            and a sense of belonging among players
            . It enables individuals to share tips, strategies, and stories, enhancing the overall gaming experience.
            Moreover, this community encourages diversity and inclusivity,
            making it a welcoming space for everyone,
            regardless of background or skill level.
          </p>
          <p className="mt-4 text-base leading-loose">
            Gamings is a space to explore new titles and connect with fellow gamers.
          </p>
        </section>
      </main>

    </>
  );
}
