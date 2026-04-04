const TransformSection = () => {
  return (
    <div>
      <div className="px-7 md:px-0 bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-30">
        <div className="container mx-auto text-white">
            <div className="text-center space-y-4">
                <h2 className="font-extrabold text-[40px]">Ready to Transform Your Workflow?</h2>
            <p>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
            </div>
            <div className="flex justify-center gap-4 mt-10">
                <button className="btn shadow-none bg-white rounded-full"><h4 className="bg-clip-text text-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA]">Explore Products</h4></button>
                <button className="btn shadow-none rounded-full bg-transparent"> <h4 className="text-white">View Pricing</h4></button>
            </div>
            <p className="text-center mt-6">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </div>
    </div>
  );
};

export default TransformSection; 
