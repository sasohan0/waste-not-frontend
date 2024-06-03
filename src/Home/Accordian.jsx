const Accordian = () => {
  return (
    <div className="bg-base-100 my-20 px-8 w-3/4 mx-auto py-4">
      <h1 className="my-16 text-center font-bold text-3xl">
        Frequently Asked Questions!
      </h1>
      <div className="bg-purple-200 border-4 border-purple-400 collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          How to determine size?
        </div>
        <div className="collapse-content">
          <p>Grab a scale and watch our size measurement on product page.</p>
        </div>
      </div>
      <div className="collapse border-4 border-purple-400 collapse-arrow bg-purple-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">How to return?</div>
        <div className="collapse-content">
          <p>Make Unboxing video and mail us!</p>
        </div>
      </div>
      <div className="collapse collapse-arrow border-4 border-purple-400 bg-purple-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How to check authentic product?
        </div>
        <div className="collapse-content">
          <p>Scan the barcode on package</p>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
