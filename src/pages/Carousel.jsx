const Carousel = () => {
  return (
    <div>
      <h1 className="text-5xl text-center text-primary font-bold mt-5">
        EXAMPLES
      </h1>
      <div className="carousel w-full h-auto mt-12 ">
        <div id="item1" className="carousel-item w-full">
          <img src="example_1.jpg" className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="example_2.jpg" className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src="example_3.jpg" className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src="example_4.jpg" className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Carousel;
