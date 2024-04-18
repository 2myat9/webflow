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

const AddLogo = () => {
  return (
    <div className="flex flex-col gap-4 p-2">
      <h1 className="text-center uppercase">Branding your Navbar</h1>
      <p>Now, we can change the navbar to show off your branding.</p>
      <p>
        <span className="underline">Your goal:</span> Add a photo of the Webflow
        logo to the brand section of the navbar.
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
      <h1 className="text-center uppercase">Color Matching</h1>
      <p>Lastly, we want our navbar to look cohesive and clean-cut.</p>
      <p>
        <span className="underline">Your goal:</span> Change the color of the
        navbar to match the Webflow logo blue.
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

export {
  AlignCenter,
  AddNavbar,
  AddLogo,
  ChangeNavbarColor,
  AddButton,
  StyleButton,
};