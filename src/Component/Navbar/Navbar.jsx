import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({number}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white sticky top-0 shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">

        {/* LEFT */}
        <div className="flex items-center gap-3">

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="md:hidden"/> : <Menu className="md:hidden"/>}
          </button>

          <h1 className="text-2xl md:text-3xl font-extrabold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </h1>
        </div>

        {/* CENTER (DESKTOP MENU) */}
        <div className="hidden lg:flex">
          <ul className="flex gap-6 font-medium">
            <li><a className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg">Products</a></li>
            <li><a className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg">Features</a></li>
            <li><a className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg">Pricing</a></li>
            <li><a className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg">Testimonials</a></li>
            <li><a className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg">FAQ</a></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* <ShoppingCart /> */}
          <div tabIndex={0} role="button" className="btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span className="badge badge-sm rounded-full indicator-item bg-[red] text-white">
            {number}
          </span>
        </div>
      </div>

          <button className="hidden btn btn-ghost sm:block px-5 py-2 rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            Get Started
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <p className="cursor-pointer">Products</p>
          <p className="cursor-pointer">Features</p>
          <p className="cursor-pointer">Pricing</p>
          <p className="cursor-pointer">Testimonials</p>
          <p className="cursor-pointer">FAQ</p>

          <button className="w-full btn btn-ghost mt-2 px-5 py-2 rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;


