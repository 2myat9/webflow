"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LinearProgress from "@mui/material/LinearProgress";
import TutoTemplate from "./TutoTemplate";
import {
  AlignCenter,
  AddNavbar,
  AddLogo,
  ChangeNavbarColor,
  AddButton,
  StyleButton,
  PublishPage,
} from "./instructionBlobs";
import {
  checkCenterAlign,
  checkNavbarAdded,
  checkNavBrand,
  checkNavbarColor,
  checkButtonAdded,
  checkButtonStyle,
  checkPublished,
} from "./checkFunctions";

function NavbarGame() {
  const NUM_PAGES = 6;
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isPassed, setIsPassed] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const router = useRouter();

  // pages mapped to their relevant check functions
  const functions = [
    checkCenterAlign,
    checkNavbarAdded,
    checkNavbarColor,
    checkButtonAdded,
    checkButtonStyle,
    checkPublished,
  ];

  const redirectHome = () => {
    router.push("/");
  };

  // update current page index state
  const navigateNext = () => {
    setCurrentPageIndex((prev) => (prev < 5 ? prev + 1 : 5));

    if (currentPageIndex == 5 && !isPassed.includes(false)) {
      router.push("/");
    }
  };
  const navigatePrev = () => {
    setCurrentPageIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handlePageCheck = async (pageIndex: number) => {
    const func = functions[pageIndex];
    if (func) {
      const res = await func(); // Call the function if it exists
      if (res != undefined) {
        setIsPassed((prev) => {
          prev[currentPageIndex] = res;
          return prev;
        });
      }
      if (res) {
        navigateNext();
      }
    } else {
      console.log("Checking function not found for page");
    }
  };

  // Render the current page based on `currentPageIndex` state
  // TODO: try indexing from an array of func components instead
  let content;

  if (currentPageIndex <= 0) {
    content = <AlignCenter />;
  } else if (currentPageIndex == 1) {
    content = <AddNavbar />;
  } else if (currentPageIndex == 2) {
    content = <ChangeNavbarColor />;
  } else if (currentPageIndex == 3) {
    content = <AddButton />;
  } else if (currentPageIndex == 4) {
    content = <StyleButton />;
  } else if (currentPageIndex == 5) {
    content = <PublishPage />;
  }

  return (
    <div>
      <button className="bg-gray-300 text-black" onClick={redirectHome}>
        Home
      </button>
      <TutoTemplate
        isPassed={isPassed[currentPageIndex]}
        InstructionsBlob={content}
      />
      <div className="flex flex-col w-full gap-2 mt-4">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => handlePageCheck(currentPageIndex)}
        >
          Check My Work
        </button>
        <div className="flex flex-row justify-center items-center">
          <button
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={navigatePrev}
          >
            Prev
          </button>
          <button
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={navigateNext}
          >
            Next
          </button>
        </div>
        <div className="w-auto h-2">
          <LinearProgress
            variant="determinate"
            value={((currentPageIndex + 1) / NUM_PAGES) * 100}
          />
        </div>
      </div>
    </div>
  );
}

export default NavbarGame;
