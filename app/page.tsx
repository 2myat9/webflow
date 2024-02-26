"use client";

import { WebflowElementSchema } from './generateTemplate';
import { generateDOMTree } from './generateTemplate';



export default function Home() {
  
  const handleClick = async () => {
    const element = await webflow.getSelectedElement();
    let newStyle = await webflow.getStyleByName('beautifulStyle');
    if (!newStyle) {
      newStyle = await webflow.createStyle('divBlockStyle');
      
    }
    newStyle.removeAllProperties();
    newStyle.setProperties({
    "background-color": "gold",
    "font-size": "16px",
    "font-weight": "bold",
  });

  // Example usage
  const sampleElement: WebflowElementSchema = {
    element_type: webflow.elementPresets.HFlex,

    // content: "Hello, world!",
    children: [
        {
        element_type: webflow.elementPresets.Paragraph,
        content: "Option 1",
        styles: newStyle,
        },
        {
          element_type: webflow.elementPresets.Paragraph,
          content: "Option 2",
          styles: newStyle,
        },
        {
          element_type: webflow.elementPresets.Paragraph,
          content: "Option 3",
          styles: newStyle,
        },
    ],
    
    };

    if (element && element?.children) {
      element.prepend(await generateDOMTree(sampleElement, element));
    
    } else {
      console.log("Please select the body element!");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-white">Welcome to Webflow! Select the body element from the navigation tree on the left, and click below to get started!</div>
      <button
        id = "buttonous"
        type="button"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={handleClick}
      >
        Start Tutorial!
      </button>
    </main>
  );
}
