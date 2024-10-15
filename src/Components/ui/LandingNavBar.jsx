import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";


export const LandingNavBar = () => {
  const [visible, setVisible] = useState(false);

  const handleVisiblity = () => {
    setVisible(!visible);
  };
 

  return (
    <>
      <div className="xheader w-full" id="xheader">
        <div className="xheader_menu lxl:pt-[60px] p">
          {/* this is menu icon */}
          <div
            className={`xheader_browser flex items-center gap-2 lmd:hidden p-[14px] pt-[20px] text-[20px] ${
              visible ? "text-[#ffbade]" : "text-[#fff]"
            }`}
            onClick={handleVisiblity}
          >
            <IoMenu />
            <span className="text-[16px] ">Menu</span>
          </div>

          {/* Mobile menu */}
          {visible && (
            <div className=" lmd:hidden z-20 relative">
              <div className="w-full p-4 absolute top-0 left-0  ">
                <ul className="w-full  bg-[#0e0d0db8]  text-center   rounded-[1.9em]">
                  <li className="hover:text-[#ffbade] ">
                    <Link
                      to="/home"
                      className=" text-center  leading-[60px]"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="hover:text-[#ffbade] ">
                    <Link
                      to="/movies"
                      className=" text-center  leading-[60px]"
                    >
                      Movies
                    </Link>
                  </li>
                  <li className="hover:text-[#ffbade] ">
                    <Link
                      to="/tvseries"
                      className=" text-center leading-[60px]"
                    >
                      TV Series
                    </Link>
                  </li>
                  <li className="hover:text-[#ffbade] ">
                    <Link
                      to="/mostpopular"
                      className=" text-center  leading-[60px]"
                    >
                      Most Popular
                    </Link>
                  </li>
                  <li className="hover:text-[#ffbade] ">
                    <Link
                      to="/topairing"
                      className=" text-center  leading-[60px]"
                    >
                      Top Airing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Destop menu */}
          <div className={`hidden lmd:block`}>
            <ul className="flex items-center justify-center space-x-10 mb-[10px] ">
              <li>
                <Link
                  to="/home"
                  className="hover:text-[#ffbade] text-center  leading-[60px]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/movies"
                  className="hover:text-[#ffbade] text-center  leading-[60px]"
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  to="/tvseries"
                  className="hover:text-[#ffbade] text-center leading-[60px]"
                >
                  TV Series
                </Link>
              </li>
              <li>
                <Link
                  to="/mostpopular"
                  className="hover:text-[#ffbade] text-center  leading-[60px]"
                >
                  Most Popular
                </Link>
              </li>
              <li>
                <Link
                  to="/topairing"
                  className="hover:text-[#ffbade] text-center  leading-[60px]"
                >
                  Top Airing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
