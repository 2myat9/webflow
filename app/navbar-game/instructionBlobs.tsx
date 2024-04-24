"use client";

import Image from "next/image";

const AlignCenter = () => {
  return (
    <div className="flex flex-col gap-4 p-2">
      <h1 className="text-center uppercase">Flexbox Basics</h1>
      <p>You are given a flexbox element with 3 children elements inside it.</p>
      <p>
        <span className="underline">Your goal:</span> Center the children
        elements on both the horizontal and the vertical axes. You can find the
        controls you need in the Layout section of the style panel on the right.
      </p>
      <Image
        src="https://blogct.creative-tim.com/blog/content/images/2021/11/How-flexbox--works-.png"
        alt="figure illustrating flexbox axes"
      />
      <p>
        Once you are satisfied with the changes you made, click the Check button
        below.
      </p>
    </div>
  );
};

const AddNavbar = () => {
  return (
    <div className="flex flex-col gap-4 p-2">
      <h1 className="text-center uppercase">Adding a Navbar</h1>
      <p>Let`s add in and customize a navbar to roundout your website .</p>
      <p>
        <span className="underline">Your goal:</span> Add a navbar above the
        three boxes you just aligned.
      </p>
      <Image
        src="https://i.postimg.cc/mg3v2Q0F/Screen-Shot-2024-04-23-at-12-05-12-PM.png"
        alt="default navbar above flexbox"
      />
      <p>
        Once you are satisfied with the changes you made, click the Check button
        below.
      </p>
    </div>
  );
};

const AddLogo = () => {
  return (
    <div className="flex flex-col gap-4 p-2">
      <h1 className="text-center uppercase"></h1>
      <p>DEPRECATED/COMBINED WITH COLOR</p>
      <p>
        <span className="underline">Your goal:</span> 
      </p>
      <Image
        src="https://assets-global.website-files.com/64f9399ca7d13575ff21a675/64f9399ca7d13575ff21d699_SYBG_ArchiveWorkspace_2400x1400.jpg"
        alt="screenshot of the layout panel"
      />
      <p>
        Once you are satisfied with the changes you made, click the Check button
        below.
      </p>
    </div>
  );
};

const ChangeNavbarColor = () => {
  return (
    <div className="flex flex-col gap-4 p-2">
      <h1 className="text-center uppercase">Styling your Navbar</h1>
      <p>We want our navbar to show off our brand, while looking cohesive and clean-cut.</p>
      <p>
        <span className="underline">Your goal:</span> Add <a href="https://yt3.googleusercontent.com/sY8Sgkv2msaC_iVJQ3tf1U5ybIqkuZMWH9nilQUQt0n9192f7J57JkCwOsr5pn91Z0q4UNKyLA=s900-c-k-c0x00ffffff-no-rj" target="_blank" className="underline">this photo</a> of the Webflow
        logo to the brand section of the navbar. Then, change the color of the
        navbar to match the Webflow logo blue.
      </p>
      <Image
        src="https://i.postimg.cc/wvMZVn3h/Screen-Shot-2024-04-23-at-12-04-01-PM.png"
        alt="screenshot of colorized and branded navbar"
      />
      <p>
        Once you are satisfied with the changes you made, click the Check button
        below.
      </p>
    </div>
  );
};

const AddButton = () => {
  return (
    <div className="flex flex-col gap-4 p-2">
      <h1 className="text-center uppercase">The Button Game, Part 1</h1>
      <p>It is time to bring some functionality into our website! </p>
      <p>
        <span className="underline">Your goal:</span> Let&#39;s add in a button
        below the flexbox and change it&#39;s text to say &quot;Click me!&quot;
      </p>
      <Image
        src="https://i.postimg.cc/T2LY24QL/Screen-Shot-2024-04-23-at-12-49-00-PM.png"
        alt="screenshot of Click me! button"
      />
      <p>
        Once you are satisfied with the changes you made, click the Check button
        below.
      </p>
    </div>
  );
};

const StyleButton = () => {
  return (
    <div className="flex flex-col gap-4 p-2">
      <h1 className="text-center uppercase">The Button Game, Part 2</h1>
      <p>Now we should give the button some button-like characteristics. </p>
      <p>
        <span className="underline">Your goal:</span> First, in the button
        settings, add a link to your website of choice. Maybe...
        http://www.webflow.com . Next, we want the button to turn green when we
        hover over it.
      </p>
      <Image
        src="https://i.postimg.cc/6pw905Kn/Screen-Shot-2024-04-23-at-12-50-40-PM.png"
        alt="screenshot of the button styling"
      />
      <p>
        Once you are satisfied with the changes you made, click the Check button
        below.
      </p>
    </div>
  );
};

const PublishPage = () => {
  return (
    <div className="flex flex-col gap-4 p-2">
      <h1 className="text-center uppercase">Publishing Your Website!</h1>
      <p>We want to introduce you to Webflow&#39;s superpower: the easiest publishing pipeline ever. </p>
      <p>
        <span className="underline">Your goal:</span> Use the Publish button in the top right corner of the Designer to stage your website! Don&#39;t worry, you can also unpublish with one click of a button.
      </p>
      <Image
        src="https://i.postimg.cc/rsxk17Yf/Screen-Shot-2024-04-23-at-12-54-48-PM.png"
        alt="screenshot of publishing drop down"
      />
      <p>
        Once you have published your website, open it up and take a look! Congrats on completing the tutorial.
      </p>
    </div>
  );
};


export {
  AlignCenter,
  AddNavbar,
  AddLogo,
  ChangeNavbarColor,
  AddButton,
  StyleButton,
  PublishPage
};
