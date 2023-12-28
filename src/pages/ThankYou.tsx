import { BackgroundImage, CustomButton } from "@/components/shared";
import { transition } from "@/framer";
import { useTitle } from "@/hooks";
import { Home } from "lucide-react";
import { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { Link } from "react-router-dom";

export const ThankYou = () => {
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsExploding(true);
    }, 1000);
  }, []);

  useTitle("Thank You");

  return (
    <main className="p-5 sm:p-10">
      {isExploding && (
        <ConfettiExplosion
          duration={6000}
          force={0.7}
          width={3000}
          zIndex={100}
          particleCount={300}
          className="ml-[20%]"
        />
      )}
      <div className="relative border border-textPrimary rounded-xl pb-16">
        <BackgroundImage />
        <div className="mt-3">
          <img src="/thank_you.svg" alt="thank you" className="mx-auto " />
        </div>
        <div className=" max-w-2xl mx-auto text-xl font-medium px-2">
          <h1 className=" text-center text-textPrimary text-3xl font-bold my-5 underline">
            CONGRATULATIONS!
          </h1>
          <p className=" leading-7 mb-3">
            Your form has been submitted. <br /> Your decision to join us marks
            the beginning of a transformative coding journey.
          </p>
          <p className=" leading-7 mb-3">
            Here, learning transcends boundaries, challenges are opportunities,
            and success is a collective celebration.
          </p>

          <p className=" leading-7 ">
            We're elated to have you as part of our community and are eager to
            witness the remarkable journey that awaits you
          </p>
        </div>

        <div className="text-center text-xl mt-3">
          <Link to="/">
            <CustomButton
              title="Return Home"
              direction="left"
              width="  !w-[12rem] box-shadow"
            >
              <Home className="mr-2" />
            </CustomButton>
          </Link>
        </div>
      </div>
    </main>
  );
};

const ThankYouWithTransition = transition(ThankYou);

export { ThankYouWithTransition };
