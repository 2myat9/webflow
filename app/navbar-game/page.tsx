"use client";
import { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import TutoTemplate from "./TutoTemplate";
import {
  AlignCenter,
  AddNavbar,
  AddLogo,
  ChangeNavbarColor,
} from "./instructionBlobs";
import { checkCenterAlign } from "./checkFunctions";

function NavbarGame() {
  const NUM_PAGES = 4;
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isPassed, setIsPassed] = useState([false, false, false]);

  // pages mapped to their relevant check functions
  const functions = [checkCenterAlign, checkCenterAlign, checkCenterAlign];

  // update current page index state
  const navigateNext = () => {
    setCurrentPageIndex((prev) => (prev < 3 ? prev + 1 : 3));
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
  // alt: try indexing from an array of func components instead
  let content;

  if (currentPageIndex <= 0) {
    content = <AlignCenter />;
  } else if (currentPageIndex == 1) {
    content = <AddNavbar />;
  } else if (currentPageIndex == 2) {
    content = <AddLogo />;
  } else if (currentPageIndex >= 3) {
    content = <ChangeNavbarColor />;
  }

  return (
    <div>
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
