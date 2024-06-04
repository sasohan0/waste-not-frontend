const Banner = () => {
  return (
    <div
      className="hero h-[600px] "
      style={{
        backgroundImage: "url(banner.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome To Waste Not</h1>
          <p className="mb-5">
            Here you can buy what you want and sell what you don't need
          </p>
          <a
            href="#products"
            className="btn bg-slate-700 text-white hover:text-black "
          >
            Start Shopping
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
