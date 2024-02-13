"use client";

import { CopyJSONButton } from "@/CopyJSONButton";
import copyData from '../copydata.json';

export default function Home() {
  // const handleClick = async () => {
  //   const el = await webflow.getAllElements();
  //   if (el[0].type == "Body") {
  //     const divEl = webflow.createDOM("div");
  //     divEl.setTextContent(
  //       "Hello world!"
  //     );

  //     let myStyle = await webflow.getStyleByName('divBlockStyle');
  //     if (!myStyle) {
  //       myStyle = webflow.createStyle('divBlockStyle');
        
  //     }
  //     myStyle.clearAllProperties();
  //     myStyle.setProperties({ 'background-color': 'blue', 
  //                               'font-size': '30px', 
  //                               'display': 'flex', 
  //                               'justify-content': 'center'});
  //     myStyle.save();

  //     divEl.setStyles([myStyle]); 
      
  //     const existingChildren = el[0].getChildren();
  //     el[0].setChildren([...existingChildren, divEl]);
  //     el[0].save();
  //   }
  // };
  const handleClick = async () => {
    const element = document.getElementById("buttonous");
    console.log(element);
    if (!element) return;

    // Initializing the method
    new CopyJSONButton({ element, copyData, successText: 'Copied! Paste in Webflow', errorText: 'Didn\'t work' });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-white">Welcome to Webflow!</div>
      <button
        id = "buttonous"
        type="button"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={handleClick}
      >
        Click Me!
      </button>
    </main>
  );
}
