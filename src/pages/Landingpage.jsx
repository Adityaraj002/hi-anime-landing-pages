// import {  Route, Routes } from "react-router-dom";
// import Movies from "./Movies";
// import Home from "./Home";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { TrendingPost } from "../Components/ui/TrendingPost";

export const Landingpage = () => {
  return (
    <>
      <div className="xm-wrapper lsm:p-2 ">
        {/* Top  */}
        <div className="mw-top ">
          <div className=" ">
            <div className="px-12 relative lsm:rounded-[2.2rem]   lxl:mx-75 bg-[#2B2A3C]">
              {/* background img */}
              <div
                className="awn-icon hidden lmd:block   z-0  absolute top-0 right-0 bottom-0 w-[650px] "
                id="awn-icon"
              >
                <img
                  src="	https://hianime.to/images/anw-min.webp?v=0.1"
                  alt=""
                  className="w-[100%] h-[100%] absolute object-cover opacity-[.5]  sm:rounded-r-[2.2rem]"
                />
              </div>
              {/* Logo */}
              <div className="logo  pt-16 flex  justify-center lsm:justify-start  ">
                <img
                  src="https://hianime.to/images/logo.png?v=0.1"
                  alt="logo"
                  className="object-center"
                />
              </div>

              <div className="xsearch relative  sm:pr-4  ">
                {/* Search */}
                <form action="/search" className=" p-2">
                  <div className="search pt-6  max-w-[450px]  flex space-x-4">
                    <div className="flex items-center bg-gray-50 border border-gray-300  rounded-lg  w-full  px-2.5 py-2.5">
                      <input
                        type="text"
                        className="outline-none w-full bg-transparent  text-[#000000d7]"
                        placeholder="Search Anime.."
                      />
                    </div>
                    <div className="max-w-[100px] bg-[#ffbade] p-3 rounded-xl text-black text-xl flex items-center">
                      <FaSearch />
                    </div>
                  </div>
                </form>

                {/* hastags */}
                <div className="top-search pt-6 flex flex-wrap max-w-[500px]">
                  <span className="topSearchTitle">Top Search: </span>
                  <Link to="/search?keyword=One%20Piece" className="item">
                    One Piece
                  </Link>
                  <Link to="/search?keyword=Naruto" className="item">
                    Naruto
                  </Link>
                  <Link
                    to="/search?keyword=Attack%20on%20Titan"
                    className="item"
                  >
                    Attack on Titan
                  </Link>
                  <Link
                    to="/search?keyword=My%20Hero%20Academia"
                    className="item"
                  >
                    My Hero Academia
                  </Link>
                  <Link to="/search?keyword=Jujutsu%20Kaisen" className="item">
                    Jujutsu Kaisen
                  </Link>
                  <Link to="/search?keyword=Bleach" className="item">
                    Bleach: Thousand-Year Blood War
                  </Link>
                  <Link to="/search?keyword=Demon%20Slayer" className="item">
                    Demon Slayer
                  </Link>
                  <Link to="/search?keyword=Chainsaw%20Man" className="item">
                    Chainsaw Man
                  </Link>
                  <Link to="/search?keyword=Spy%20X%20Family" className="item">
                    Spy X Family
                  </Link>
                  <Link to="/search?keyword=Tokyo%20Revengers" className="item">
                    Tokyo Revengers
                  </Link>
                  <Link to="/search?keyword=Blue%20Lock" className="item">
                    Blue Lock
                  </Link>
                  <Link to="/search?keyword=Dragon%20Ball%20Z" className="item">
                    Dragon Ball Z
                  </Link>
                </div>

                {/* homepage buttom */}
                <div
                  className="watch-anime  pb-10   w-full lsm:max-w-[260px] "
                  id="action-btn"
                >
                  <Link
                    to="/home"
                    className="flex text-[20px] gap-5 items-center justify-center rounded-xl py-[15px] px-[20px] font-600 bg-[#ffbade] text-[#111] border-none shadow-none "
                  >
                    Watch anime
                    <FaArrowCircleRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Share */}
        <div className="shareHiAnime mb-[30px] inline-block w-[100%] ">
          <div className="sharebutton relative flex space-x-6 pt-[3em]  lxl:mx-75 l2xl:mx-90 p-2">
            <div className="share-title  font-[12px]  ">
              <span className="font-500 text-[14px] text-[#ffbade] ">
                Share Hianime
              </span>
              <p className="mb-0 text-[12px] opacity-35 font-200">
                to your friends
              </p>
            </div>
            <div className="share-social  flex gap-4 items-center  justify-center">
              <div className="grid grid-cols-1 opacity-25">
                <span className="sharetotal  text-[16px]">400k</span>
                <span className="st text-[8px] text-center leading-[2px]">
                  Shares
                </span>
              </div>
              <button className="bg-green-400 text-[22px] p-2 rounded-2xl">
                <IoShareSocial />
              </button>
            </div>
          </div>
        </div>
        {/* Main Body */}
        <div className="mw-body grid grid-cols-1  lxl:mx-75 l2xl:mx-90 llg:grid-cols-3   ">
          <div className="mwLeft-side col-span-2 mr-[4.5rem] ">
            <h1 className="mw-headiing text-[1.8em] font-600 mb-[1em] text-[#fff] leading-[1.4em]">
              HiAnime.to - The best site to watch anime online for Free
            </h1>
            <p>
              Do you know that according to Google, the monthly search volume
              for anime related topics is up to over 1 Billion times? Anime is
              famous worldwide and it is no wonder we&apos;ve seen a sharp rise
              in the number of free anime streaming sites.
            </p>
            <p>
              Just like free online movie streaming sites, anime watching sites
              are not created equally, some are better than the rest, so
              we&apos;ve decided to build HiAnime.to to be one of the best free
              anime streaming site for all anime fans on the world.
            </p>
            <h2>1/ What is HiAnime.to?</h2>
            <p>
              HiAnime.to is a free site to watch anime and you can even download
              subbed or dubbed anime in ultra HD quality without any
              registration or payment. By having only one ads in all kinds, we
              are trying to make it the safest site for free anime.
            </p>
            <h2>2/ Is HiAnime.to safe?</h2>
            <p>
              Yes we are, we do have only one Ads to cover the server cost and
              we keep scanning the ads 24/7 to make sure all are clean, If you
              find any ads that is suspicious, please forward us the info and we
              will remove it.
            </p>
            <h2>
              3/ So what make HiAnime.to the best site to watch anime free
              online?
            </h2>
            <p>
              Before building HiAnime.to, we&apos;ve checked many other free
              anime sites, and learnt from them. We only keep the good things
              and remove all the bad things from all the competitors, to put it
              in our HiAnime website. Let&apos;s see how we&apos;re so confident
              about being the best site for anime streaming:
            </p>
            <ul className="pl-[15px]">
              <li>
                <strong>Safety:</strong>
                We try our best to not having harmful ads on HiAnime.
              </li>
              <li>
                <strong>Content library:</strong>
                Our main focus is anime. You can find here popular, classic, as
                well as current titles from all genres such as action, drama,
                kids, fantasy, horror, mystery, police, romance, school, comedy,
                music, game and many more. All these titles come with English
                subtitles or are dubbed in many languages.
              </li>
              <li>
                <strong>Quality/Resolution:</strong>
                All titles are in excellent resolution, the best quality
                possible. HiAnime.to also has a quality setting function to make
                sure our users can enjoy streaming no matter how fast your
                Internet speed is. You can stream the anime at 360p if your
                Internet is being ridiculous, Or if it is good, you can go with
                720p or even 1080p anime.
              </li>
              <li>
                <strong>Streaming experience:</strong>
                Compared to other anime streaming sites, the loading speed at
                HiAnime.to is faster. Downloading is just as easy as streaming,
                you won&apos;t have any problem saving the videos to watch
                offline later.
              </li>
              <li>
                <strong>Updates:</strong>
                We updates new titles as well as fulfill the requests on a daily
                basis so be warned, you will never run out of what to watch on
                HiAnime.
              </li>
              <li>
                <strong>User interface:</strong>
                Our UI and UX makes it easy for anyone, no matter how old you
                are, how long have you been on the Internet. Literally, you can
                figure out how to navigate our site after a quick look. If you
                want to watch a specific title, search for it via the search
                box. If you want to look for suggestions, you can use the
                site&apos;s categories or simply scroll down for new releases.
              </li>
              <li>
                <strong>Device compatibility:</strong>
                HiAnime works alright on both your mobile and desktop. However,
                we&apos;d recommend you use your desktop for a smoother
                streaming experience.
              </li>
              <li>
                <strong>Customer care: </strong>
                We are in active mode 24/7. You can always contact us for any
                help, query, or business-related inquiry. On our previous
                projects, we were known for our great customer service as we
                were quick to fix broken links or upload requested content.
              </li>
            </ul>
            <p>
              So if you&apos;re looking for a trustworthy and safe site for your
              Anime streaming, let&apos;s give HiAnime.to a try. And if you like
              us, please help us to spread the words and do not forget to
              bookmark our site.
            </p>
            <p>Thank you!</p>
          </div>
          <div className="mwRight-side">
            <div className="trending-page mx-4">
              <h1 className="text-[25px] text-[#fff] mb-[30px]">
                Trending Posts
              </h1>
              <TrendingPost />
              <TrendingPost />
              <TrendingPost />
              <TrendingPost />
              <div className="block">
                <a
                  href=""
                  className="bg-white/[.1] rounded-[30px] text-[12px] border-none text-[#fff] py-2 w-[100%] leading-[1.5] block text-center"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="xfooter pb-[40px] mt-[50px] ">
          <div className="lxl:mx-75 l2xl:mx-90">
            <p className="font-400 text-[#fff] text-[14px]">© HiAnime.to. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

