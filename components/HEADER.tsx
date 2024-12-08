import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { MdOutlineSportsHandball } from "react-icons/md";
import { PiHandbagSimpleThin } from "react-icons/pi";
import { SiNike } from "react-icons/si";

export default function Nav() {
  return (
    <header>
      {/* Top Bar */}
      <div className="bg-gray-200 px-4 md:px-8 py-2">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left Section - Logo */}
          <div className="bg-gray-200 flex justify-between items-center px-6 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-gray-500">
            <Image
              src={"/logo1.png"}
              alt={""}
              className="bg-gray-200"
              width={24}
              height={24}
            />
          </div>
          <div className="hidden sm:block">
            <a
              href="#main-content"
              className="text-xs md:text-sm text-gray-600 hover:text-gray-800"
            ></a>
          </div>

          {/* Right Section - Links */}
          <div className="flex items-center space-x-3 md:space-x-4 text-xs md:text-sm text-gray-700">
            <a href="#" className="hover:text-gray-800">
              Find a Store
            </a>
            <span className="hidden sm:block">|</span>
            <a href="#" className="hover:text-gray-800">
              Help
            </a>
            <span className="hidden sm:block">|</span>
            <a href="#" className="hover:text-gray-800">
              Join Us
            </a>
            <span className="hidden sm:block">|</span>
            <a href="#" className="hover:text-gray-800">
              Sign In
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white px-4 md:px-8 py-4 border-b border-gray-300">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <SiNike className="text-3xl md:text-4xl text-black" />
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-4 md:gap-6 font-medium text-sm md:text-base text-gray-700">
            <Link href="#" className="hover:text-black">
              New & Featured
            </Link>
            <Link href="#" className="hover:text-black">
              Men
            </Link>
            <Link href="#" className="hover:text-black">
              Women
            </Link>
            <Link href="#" className="hover:text-black">
              Kids
            </Link>
            <Link href="#" className="hover:text-black">
              Sale
            </Link>
            <Link href="#" className="hover:text-black">
              SNKRS
            </Link>
          </nav>

          {/* Right Section - Search, Wishlist, Cart */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
              />
              <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
            </div>
            <CiHeart className="text-gray-700 text-xl cursor-pointer hover:text-black" />
            <PiHandbagSimpleThin className="text-gray-700 text-xl cursor-pointer hover:text-black" />
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="block md:hidden px-4 mt-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none w-full"
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
        </div>
      </div>

      <div className="bg-gray-200 flex flex-col justify-center items-center ">
        <h1 className="text-3xl font-bold mb-4">Hello Nike App</h1>
        <p className="text-lg text-gray-700">
          Download the app to access everything Nike.{" "}
          <span className="underline text-gray-700">Get Your Great.</span>
        </p>
      </div>
    </header>
  );
}
