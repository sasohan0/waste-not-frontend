const Accordian = () => {
  return (
    <div className="bg-base-100 my-20 px-8 w-3/4 mx-auto py-4">
      <h1 className="my-16 text-center font-bold text-3xl">
        Frequently Asked Questions!
      </h1>
      <div className="bg-slate-200 border-4 border-slate-400 collapse collapse-arrow ">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          How to determine Authentic product?
        </div>
        <div className="collapse-content">
          <p>We conctantly verify our listed products.</p>
        </div>
      </div>
      <div className="collapse border-4 border-slate-400 collapse-arrow bg-slate-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">How to return?</div>
        <div className="collapse-content">
          <p>Contact us with proof</p>
        </div>
      </div>
      <div className="collapse collapse-arrow border-4 border-slate-400 bg-slate-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How to get my listing on top?
        </div>
        <div className="collapse-content">
          <p>
            If your listing is legit and useful it will be on top automatically
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
