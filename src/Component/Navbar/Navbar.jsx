import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-sm relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

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
            <li><a className="cursor-pointer">Products</a></li>
            <li><a className="cursor-pointer">Features</a></li>
            <li><a className="cursor-pointer">Pricing</a></li>
            <li><a className="cursor-pointer">Testimonials</a></li>
            <li><a className="cursor-pointer">FAQ</a></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <ShoppingCart />

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


