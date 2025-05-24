import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="h-16 px-3 bg-purple-700 flex justify-between  items-center text-white">
      <div className="logo font-bold text-lg">
        {" "}
        <Link href="/">Link Slicer</Link>
      </div>
      <ul className="flex justify-center gap-4 items-center">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/shorten">
          <li>Shorten</li>
        </Link>
        <li className="flex gap-3">
          <Link href="/shorten">
            <button className="bg-purple-500 shadow-lg p-3 rounded-lg">
              Try Now
            </button>
          </Link>
          <Link target="_blank" href="https://github.com/KSH5856/url-shortner">
            <button className="bg-purple-500 shadow-lg p-3 rounded-lg">
              GitHub
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
