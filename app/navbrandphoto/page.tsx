"use client";

import Image from "next/image";
import { checkNavBrand } from "@/navbarChecks";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const handleClick = async () => {
    const isPassed = await checkNavBrand();
    if (isPassed) {
      router.push("/colorchange");
    }
  };

  return (
    <div className="flex flex-col gap-4 p-2">
      <h1 className="text-center uppercase">Branding your Navbar</h1>
      <p>Now, we can change the navbar to show off your branding.</p>
      <p>
        <span className="underline">Your goal:</span> Add a photo of the Webflow logo to the brand section of the navbar.
      </p>
      <Image
        src="https://assets-global.website-files.com/64f9399ca7d13575ff21a675/64f9399ca7d13575ff21d699_SYBG_ArchiveWorkspace_2400x1400.jpg"
        alt="screenshot of the layout panel"
      />
      <p>
        Once you are satisfied with the changes you made, click the Check button below.
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
