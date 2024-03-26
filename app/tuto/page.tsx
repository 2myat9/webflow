"use client";

import Image from "next/image";
import { checkElementStyles } from "../checkElementStyles";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const handleClick = async () => {
    const isPassed = await checkElementStyles();
    if (isPassed) {
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col gap-4 p-2">
      <h1 className="text-center uppercase">Flexbox Basics</h1>
      <p>You are given a flexbox element with 3 children elements inside it.</p>
      <p>
        <span className="underline">Your goal:</span> Center the children
        elements on both the main axis and cross axis. Focus on the Layout area
        of the style panel on the right.
      </p>
      <Image
        src="https://miro.medium.com/v2/resize:fit:1183/1*ubDrM-3m22gLF_pZ4DCdMw.png"
        alt="figure explaining flexbox"
      />
      <p>
        Once you are satisfied with the changes you made, select the Body
        element in the left sidebar and click the Check button below.
      </p>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={handleClick}
      >
        Check My Work
      </button>
    </div>
  );
}
