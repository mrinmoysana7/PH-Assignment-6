import { Check } from "lucide-react";

const PricingSection = () => {
  return (
    <div>
      <div className="py-30">
        <div className="container mx-auto  pricing-container ">
          <div className="text-container flex flex-col items-center text-center space-y-4">
            <h2 className="font-extrabold text-[48px]">
              Simple, Transparent Pricing
            </h2>
            <p className="text-[#627382] md:mb-8">
              Choose the plan that fits your needs. Upgrade or downgrade
              anytime.
            </p>
          </div>
          <div className="steps-container pt-10 grid px-5 gap-8 lg:grid-cols-3 ">
            <div className="card-first bg-[#F9FAFC] flex flex-col h-112 hover:shadow-xl p-6 rounded-2xl px-6 border shadow-lg border-gray-200">
              <div className="flex-1 space-y-6">
                <div className="">
                  <h2 className="font-bold text-2xl">Starter</h2>
                  <p className="text-[#627382]">Perfect for getting started</p>
                </div>
                <div className="flex place-items-baseline">
                  <h2 className="font-bold text-[40px]">$0</h2>
                  <p className="text-[#627382] text-[20px]">/Month</p>
                </div>

                <div className="">
                  <div className="flex items-center gap-2">
                    <Check color="#33e826" />
                    <p>Access to 10 free tools</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="#33e826" />
                    <p>Basic templates</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="#33e826" />
                    <p>Community support</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="#33e826" />
                    <p>1 project per month</p>
                  </div>
                </div>
              </div>

              <div>
                <button className="btn text-white rounded-full border-none w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
                  Get Started Free
                </button>
              </div>
            </div>
            <div className="card-middle md:-mt-6 text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex flex-col h-112 md:h-125 hover:shadow-xl p-6 rounded-2xl px-6 border shadow-lg border-gray-200">
              <div className="flex-1 space-y-6">
                <div className="">
                  <h2 className="font-bold text-2xl">Pro</h2>
                  <p className="">Best for professionals</p>
                </div>
                <div className="flex place-items-baseline">
                  <h2 className="font-bold text-[40px]">$19</h2>
                  <p className=" text-[20px]">/Month</p>
                </div>

                <div className="">
                  <div className="flex items-center gap-2">
                    <Check />
                    <p>Access to all premium tools</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check />
                    <p>Unlimited templates</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check />
                    <p>Unlimited templates</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check />
                    <p>Unlimited projects</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check />
                    <p>Cloud sync</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check />
                    <p>Advanced analytics</p>
                  </div>
                </div>
              </div>

              <div>
                <button className="btn bg-white btn-ghost rounded-full border-none w-full">
                  <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                   <h2 className="font-bold text-[18px]">
                     Start Pro Trial
                   </h2>
                  </div>
                </button>
              </div>
            </div>
            <div className="card-last bg-[#F9FAFC] flex flex-col h-112 hover:shadow-xl p-6 rounded-2xl px-6 border shadow-lg border-gray-200">
              <div className="flex-1 space-y-6">
                <div className="">
                  <h2 className="font-bold text-2xl">Enterprise</h2>
                  <p className="text-[#627382]">For teams and businesses</p>
                </div>
                <div className="flex place-items-baseline">
                  <h2 className="font-bold text-[40px]">$49</h2>
                  <p className="text-[#627382] text-[20px]">/Month</p>
                </div>

                <div className="">
                  <div className="flex items-center gap-2">
                    <Check color="#33e826" />
                    <p>Everything in Pro</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="#33e826" />
                    <p>Team collaboration</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="#33e826" />
                    <p>Custom integrations</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="#33e826" />
                    <p>Dedicated support</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="#33e826" />
                    <p>SLA guaranteet</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="#33e826" />
                    <p>Custom branding</p>
                  </div>
                </div>
              </div>

              <div>
                <button className="btn btn-primarybtn-ghost rounded-full border-none w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
                  <p className="text-white">
                    Contact Sales
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
