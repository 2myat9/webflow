"use client";

export default function Home() {
  const handleClick = () => {
    console.log("Hello hello");
    // const myDOMElement = webflow.createDOM("span");
    // if (myDOMElement.textContent) {
    //   myDOMElement.setTextContent("Hello, Webflow!");
    // }
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
