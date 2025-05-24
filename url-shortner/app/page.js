import Image from "next/image";
import localFont from 'next/font/local';
import Link from "next/link";

const poppins = localFont({
  src:'/fonts/Poppins-ExtraBold.ttf',
  variable: "--font-poppins",
  weight:'100 900'
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL shortner in the Market
          </p>
          <p className="px-56 text-center">
          We allow users to host websites from their own domain endpoints. It functions like a simplified version of URL shortening or domain masking, where each custom endpoint dynamically redirects to a specified original URL.
          </p>
          <div className="flex gap-3 justify-center text-white">
          <Link href="/shorten">
            <button className="bg-purple-500 shadow-lg p-2 rounded-lg">Try Now</button>
          </Link>
          <Link target="_blank" href="https://github.com/KSH5856/url-shortner">
            <button className="bg-purple-500 shadow-lg p-2 rounded-lg">GitHub</button>
          </Link>
        </div>
        </div>
        <div className="flex justify-start relative">
          <Image alt='Vector image' src={'/vector.jpg'} fill></Image>
        </div>
        
      </section>
    </main>
  );
}
