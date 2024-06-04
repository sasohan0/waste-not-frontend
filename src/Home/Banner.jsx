const Banner = () => {
  return (
    <div
      className="hero h-[500px] "
      style={{
        backgroundImage: "url(banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome To productist</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
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
