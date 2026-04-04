import userImage from "../../assets/user.png";
import packageImage from "../../assets/package.png";
import rocketImage from "../../assets/rocket.png";

const GetStarted = () => {
  return (
    <div className="bg-[#F9FAFC] py-30">
      <div className="container mx-auto  get-started-container ">
        <div className="text-container flex flex-col items-center text-center space-y-4">
          <h2 className="font-extrabold text-[48px]">Get Started in 3 Steps</h2>
          <p className="text-[#627382]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="steps-container pt-10 grid px-5 gap-8 lg:grid-cols-3 ">
          <div className="card-1 w-full hover:shadow-xl rounded-2xl px-6 border shadow-lg h-96  border-gray-200">
            <div className="flex justify-end mt-5 ">
              <p className="p-2.5 text-white font-bold rounded-[100%] bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
                01
              </p>
            </div>
            <div className="space-y-4 pt-5 flex flex-col text-center items-center">
              <img
                className="rounded-full bg-purple-200 p-5"
                src={userImage}
                alt=""
              />
              <h2 className="font-bold text-2xl">Create Account</h2>
              <p className="text-[#627382]">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
          <div className="card-2 w-full hover:shadow-xl h-96 rounded-2xl px-6 border shadow-lg  border-gray-200">
            <div className="flex justify-end mt-5 ">
              <p className="p-2.5 text-white font-bold rounded-[100%] bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
                02
              </p>
            </div>
            <div className="space-y-4 pt-5 flex flex-col text-center items-center">
              <img
                className="rounded-full bg-purple-200 p-5"
                src={packageImage}
                alt=""
              />
              <h2 className="font-bold text-2xl">Choose Products</h2>
              <p className="text-[#627382]">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>
          <div className="card-3 w-full hover:shadow-xl h-96 rounded-2xl px-6 border shadow-lg  border-gray-200">
            <div className="flex justify-end mt-5 ">
              <p className="p-2.5 text-white font-bold rounded-[100%] bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
                03
              </p>
            </div>
            <div className="space-y-4 pt-5 flex flex-col text-center items-center">
              <img
                className="rounded-full bg-purple-200 p-5"
                src={rocketImage}
                alt=""
              />
              <h2 className="font-bold text-2xl">Start Creating</h2>
              <p className="text-[#627382]">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
