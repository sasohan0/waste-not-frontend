const About = () => {
  return (
    <div className="flex justify-center items-center bg-opacity-0">
      <div className="hero w-auto min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="no_waste_bg.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">We are against wastage !</h1>
            <p className="py-6">
              WE simply provide the best solutions and options to reduse waste !
            </p>
            <a
              href="/#products"
              className="btn bg-slate-700 text-white hover:text-black"
            >
              See Products
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
