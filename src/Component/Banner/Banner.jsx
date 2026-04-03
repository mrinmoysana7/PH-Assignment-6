import { Play } from "lucide-react";
import bannerImage from "../../assets/banner.png";
import buttonImage from "../../assets/Group 5 (1).png";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10 py-16">

      {/* LEFT */}
      <div className="space-y-6 text-center md:text-left">

        <div className="flex items-center gap-2 bg-[#E1E7FF] py-2 px-4 rounded-full w-max mx-auto md:mx-0">
          <img src={buttonImage} alt="" />
          <p className="text-sm font-medium">New: AI-Powered Tools Available</p>
        </div>

        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          Supercharge Your Digital Workflow
        </h1>

        <p className="text-gray-600 max-w-lg mx-auto md:mx-0">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          
          <button className="px-6 btn btn-ghost py-3 rounded-full text-white font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            Explore Products
          </button>

          <button className="flex btn btn-ghost items-center gap-2 px-6 py-3 border-2 border-indigo-500 rounded-full">
            <Play className="text-indigo-600" />
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-medium">
              Watch Demo
            </span>
          </button>

        </div>
      </div>

      {/* RIGHT */}
      <div>
        <img src={bannerImage} alt="" className="w-full max-w-md mx-auto" />
      </div>

    </div>
    
  );
};

export default Banner;



// <div className="w-9/12 container mx-auto justify-center flex-row md:flex items-center gap-15 my-20 ">
    //   <div className="left-side-content">
    //     <div className="space-y-4 mb-4">
    //       <div className="flex items-center gap-2 bg-[#E1E7FF] py-2 px-4 rounded-full w-max">
    //         <span>
    //           <img src={buttonImage} alt="" />
    //         </span>
    //         <p>New: AI-Powered Tools Available</p>
    //       </div>

    //       <h1 className="text-[72px] font-bold">
    //         Supercharge Your Digital Workflow
    //       </h1>
    //       <p className="py-6">
    //         Access premium AI tools, design assets, templates, and productivity            
    //         software—all in one place. Start creating faster today. Explore
    //         Products
    //       </p>
    //     </div>
    //     <div className="flex gap-4">
    //       <button className="btn font-bold text[16px] rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
    //         Explore Products
    //       </button>
    //       <button className="btn bg-transparent border rounded-full border-indigo-500">
            
    //           <Play className="text-indigo-600" />
    //         {" "}
    //         <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
    //           Watch Demo
    //         </p>
    //       </button>
    //     </div>
    //   </div>
    //   <div className="right-side-content">
    //     <img src={bannerImage} alt=""></img>
    //   </div>
    // </div>
