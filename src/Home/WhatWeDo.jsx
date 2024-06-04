const WhatWeDo = () => {
  return (
    <div className=" w-96 mx-auto mt-20">
      <h1 className="text-center text-4xl text-primary pb-12">
        {" "}
        What We Actually Do
      </h1>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-header">
          Awesome User
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">What do you do actually?</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-header">
          Waste Not
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">
          Like the name we help you to stop wasting used products and sell them
          !
        </div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
    </div>
  );
};

export default WhatWeDo;
