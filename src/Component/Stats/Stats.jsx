const Stats = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center text-white">
        <div className="py-6 md:border-r border-white/30">
          <h2 className="text-4xl md:text-6xl font-extrabold">50K+</h2>
          <p className="text-lg md:text-xl">Active Users</p>
        </div>
        <div className="py-6 md:border-r border-white/30">
          <h2 className="text-4xl md:text-6xl font-extrabold">200+</h2>
          <p className="text-lg md:text-xl">Premium Tools</p>
        </div>
        <div className="py-6">
          <h2 className="text-4xl md:text-6xl font-extrabold">4.9</h2>
          <p className="text-lg md:text-xl">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
