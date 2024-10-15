import { Link } from "react-router-dom";
import { FaComment } from "react-icons/fa";

export const TrendingPost = () => {
  return (
    <>
      <div className="trendingComment-List">
        <div className="items  bg-[#2b2a3c] w-[100%] block p-[20px] rounded-[1rem] relative text-[12px] leading-[1.4] text-white/[.54] mb-[.5rem]">
          <div className="item_gi-top mb-[.75rem] text-[11px] flex items-center justify-between">
            <div className="ztag font-Poppins">
              <span className="text-[#ffce71] mr-[.5rem]  ">#Question</span>
              <div className="time-line text-[#aaa] inline">
                <span>3 hours ago</span>
              </div>
            </div>
            <div className="gi-stats flex items-center">
              <div className="ml-[1.5rem] flex gap-1 items-center">
                <i className="font-[900] ">
                  <FaComment />
                </i>
                289
              </div>
            </div>
          </div>
          <h4 className="item-name cursor-pointer text-[1.3rem] font-500 leading-[1.4] mb-[.5rem]">
            <Link to="" className="text-[#fff] outline-none bg-transparent">
              👀 What&apos;s a Random Fact About You That No One Knows?
            </Link>
          </h4>
          <div className="subject mb-[.75rem] text-[#aaa] text-ellipsis overflow-hidden">
            <div>
              So, Drop the most random fact about yourself that even your
              besties don’t know 🤫💭 Spill the tea in the comments!Don&apos;t
              laugh but my random thought is I feel like someone out there might
              already love me deeply, and I&apos;ll never even know.
            </div>
          </div>
          <div className="cn-owner flex items-center">
            <div className="profile-avtar  flex flex-shrink items-center font-300 relative overflow-hidden">
              <img
                src="https://cdn.noitatnemucod.net/avatar/100x100/one_piece/user-01.jpeg"
                alt="profile logo"
                className="w-[30px] h-[30px] rounded-full  mr-[10px]"
              />
              <a href="" className="">
                <i className="badg-level level-a"></i>
              </a>
              𝐒𝐜𝐚𝐫𝐥𝐞𝐭 🌼✨ Angelfish
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
