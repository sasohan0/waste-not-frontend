const Blogs = () => {
  return (
    <div className="">
      <div className="text-center mt-20 md:hidden">
        <h1 className="text-primary text-5xl">COMING SOON</h1>
        <span className="loading loading-bars loading-lg"></span>
      </div>
      <div className="hidden md:grid diff aspect-[16/9]">
        <div className="diff-item-1">
          <div className="bg-purple-600 text-primary-content text-9xl font-black grid place-content-center">
            COMING SOON !
          </div>
        </div>
        <div className="diff-item-2">
          <div className="bg-base-200 text-9xl font-black grid place-content-center">
            THANK YOU
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>
    </div>
  );
};

export default Blogs;
