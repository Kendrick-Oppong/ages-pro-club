import { Button } from "@/components/ui/button";
import { transition } from "@/framer";
import { SendHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <section className=" min-h-[100dvh] md:grid overflow-hidden gap-8 grid-cols-2 relative px-6 md:px-12 pt-10 ">
      <span className="span !hidden lg:!inline-block  left-[10%] top-[10%] bg-textPrimary "></span>
      <span className="span !hidden lg:!inline-block  left-[50%] bottom-[20%] bg-[#272DFF] "></span>
      <span className="span  left-[10%] bottom-[5%] bg-violet-700 "></span>
      <div className=" absolute -z-[1] bottom-0  top-[10rem] bg-[url('/rings.svg')] bg-no-repeat w-[28rem] h-[28rem]"></div>
      <div className="absolute right-0 top-0 -z-[1] bg-[url('/Mask.svg')] bg-no-repeat w-[1007px] h-[700px]  translate-x-[13rem]"></div>
      <div className="self-center home-shadow">
        <h1 className=" font-black text-4xl lg:text-5xl  leading-[3rem] md:leading-[3.4rem] lg:leading-[3.8rem]">
          Join{" "}
          <span className=" text-violet-700 sm:text-textPrimary">
            AGES Pro Club
          </span>{" "}
          Today
        </h1>
        <div>
          <h3 className="text-xl my-6  leading-7 font-medium">
            Sign up to unlock a world of coding opportunities at AGES <br />{" "}
            Your path to becoming a coding pro starts here
          </h3>
          <Link to="/personal-details">
            <Button
              variant="outline"
              className="text-xl sm:text-lg mt-12 text-textPrimary hover:bg-textPrimary hover:text-[#ffff] cursor-pointer font-medium rounded-lg border-[2px] border-textPrimary px-10 py-6 box-shadow"
            >
              Sign Up{" "}
              <span className="ml-2 hover:text-[#ffff]">
                {" "}
                <SendHorizontal className="inline-flex align-middle" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-10 sm:mt-20 md:mt-0">
        <img
          src="/Sign up-cuate.svg"
          alt="banner"
          className="scale-[1.2] sm:scale-100 object-cover sm:h-auto md:h-[100%] md:object-cover"
        />
      </div>
    </section>
  );
};

const HomePageWithTransition = transition(HomePage);

export { HomePageWithTransition };
