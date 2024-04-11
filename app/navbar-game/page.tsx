"use client";
import { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

function NavbarGame() {
  // This state will determine which content to display
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const pages = ["home", "about", "contact"];
  const NUM_PAGES = 3;

  // Function to change the current page
  const navigateNext = () => {
    setCurrentPageIndex((prev) => (prev < 2 ? prev + 1 : 2));
  };
  const navigatePrev = () => {
    setCurrentPageIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  // Content components for different "pages"
  const HomePage = () => <div>Home Page Content</div>;
  const AboutPage = () => <div>About Page Content</div>;
  const ContactPage = () => <div>Contact Page Content</div>;

  // Render the current page based on `currentPage` state
  let content;
  // switch (currentPageIndex) {
  //   case "home":
  //     content = <HomePage />;
  //     break;
  //   case "about":
  //     content = <AboutPage />;
  //     break;
  //   case "contact":
  //     content = <ContactPage />;
  //     break;
  //   default:
  //     content = <HomePage />;
  // }

  if (currentPageIndex <= 0) {
    content = <HomePage />;
  } else if (currentPageIndex == 1) {
    content = <AboutPage />;
  } else if (currentPageIndex >= 2) {
    content = <ContactPage />;
  }

  return (
    <div className="App">
      <header>
        <button onClick={navigateNext}>Next</button>
        <button onClick={navigatePrev}>Prev</button>
      </header>
      <main>{content}</main>
      <div className="w-1/2">
        <LinearProgress
          variant="determinate"
          value={((currentPageIndex + 1) / 3) * 100}
        />
      </div>
    </div>
  );
}

export default NavbarGame;
