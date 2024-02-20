"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const addDiv = async () => {
    const allElements = await webflow.getAllElements();
    const bodyEl = allElements[0];
    console.log(bodyEl);

    if (bodyEl.type != "Body") {
      return;
    }
    const divEl = webflow.createDOM("div");
    divEl.setTextContent("Hellow world!");

    let myStyle = await webflow.getStyleByName("divBlockStyle");
    if (!myStyle) {
      myStyle = webflow.createStyle("divBlockStyle");
    }
    myStyle.clearAllProperties();
    myStyle.setProperties({
      "background-color": "blue",
      "font-size": "30px",
      display: "flex",
      "justify-content": "center",
    });
    await myStyle.save();

    divEl.setStyles([myStyle]);

    const existingChildren = bodyEl.getChildren();
    bodyEl.setChildren([...existingChildren, divEl]);
    await bodyEl.save();
  };

  const handleClick = () => {
    console.log("Hello hello");
    addDiv();
    router.push("/tuto");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-white">Welcome to Webflow!</div>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={handleClick}
      >
        Click Me!
      </button>
    </main>
  );
}
