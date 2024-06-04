const OurLocation = () => {
  return (
    <div className="mockup-window border bg-slate-300 mt-12 rounded-full pb-12 px-12">
      <h1 className="text-5xl text-center p-5 pt-0 mt-0 mb-5">Find Us Here</h1>
      <div className="flex justify-center px-4 py-16 bg-slate-400 rounded-full">
        {" "}
        <iframe
          className="rounded-full flex justify-center items-center border-4 border-black"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.437177792311!2d90.39303043824806!3d23.731784778771846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b934fecec641%3A0xb98c1080b250d866!2sTSC%2C%20University%20of%20Dhaka!5e0!3m2!1sen!2sbd!4v1717441025839!5m2!1sen!2sbd"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        />
      </div>
    </div>
  );
};

export default OurLocation;
