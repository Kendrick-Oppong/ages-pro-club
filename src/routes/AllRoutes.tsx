import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  BootcampWithTransition,
  HomePageWithTransition,
  OverViewWithTransition,
  PageNotFound,
  PersonalInformationWithTransition,
  ThankYouWithTransition,
} from "../pages";

import { AnimatePresence } from "framer-motion";
import { Stepper } from "@/components/shared";
import { ToastNotification } from "@/components/shared/ToastNotification";
import { useEffect } from "react";

import { getPersonalDetails } from "@/redux/personalDetailSlice";
import { useSelector } from "react-redux";
import { getBootcampDetails } from "@/redux/bootCampSlice";

export const AllRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const personalDetails = useSelector(getPersonalDetails);
  const bootcampDetails = useSelector(getBootcampDetails);

  // Check if any field is empty in personal details or bootcamp details
  const isPersonalDetailsEmpty = Object.values(personalDetails).some(
    (value) => !value
  );
  const isBootcampDetailsEmpty = Object.values(bootcampDetails).some(
    (value) => !value
  );

  useEffect(() => {
    if (
      location.pathname === "/bootcamp" &&
      isPersonalDetailsEmpty &&
      !isHomePage
    ) {
      navigate("/personal-details");
      setTimeout(() => {
        ToastNotification(
          "submit",
          false,
          "Redirect aborted. Please fill all fields in this page"
        );
      }, 2000);
    } else if (
      location.pathname === "/overview" &&
      (isPersonalDetailsEmpty || isBootcampDetailsEmpty) &&
      !isHomePage
    ) {
      //Redirect to the appropriate page with empty fields
      if (isPersonalDetailsEmpty) {
        navigate("/personal-details");
      } else {
        navigate("/bootcamp");
      }
    }
  }, [
    location.pathname,
    isHomePage,
    isPersonalDetailsEmpty,
    isBootcampDetailsEmpty,
    navigate,
  ]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<HomePageWithTransition />} />
        <Route
          path="personal-details"
          element={
            <>
              {!isHomePage && <Stepper />}
              <PersonalInformationWithTransition />
            </>
          }
        />
        <Route
          path="bootcamp"
          element={
            <>
              {!isHomePage && <Stepper />}
              <BootcampWithTransition />
            </>
          }
        />
        <Route
          path="overview"
          element={
            <>
              {!isHomePage && <Stepper />}
              <OverViewWithTransition />
            </>
          }
        />
        <Route path="thank_you" element={<ThankYouWithTransition />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
};
