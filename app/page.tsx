"use client";

import { returnSchema } from "./templates/firstElement";
import { generateDOMTree } from "./generateTemplate";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = async () => {
    const element = await webflow.getSelectedElement();
    const sampleElement = await returnSchema("beautifulStyle");

    if (element && element?.children) {
      element.prepend(await generateDOMTree(sampleElement, element));
      router.push("/tuto");
    } else {
      await webflow.notify({
        type: "Error",
        message:
          "Please make sure to select the Body element before clicking Start Tutorial",
      });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-white">
        Welcome to Webflow! Select the body element from the navigation tree on
        the left, and click below to get started!
      </div>
      <button
        id="buttonous"
        type="button"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={handleClick}
      >
        Start Tutorial!
      </button>
    </main>
  );
}
