import React from "react";

const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center p-10 pt-20 ">
      {/* Left Section */}
      <div className="md:w-1/2">
        <h1 className="text-5xl font-bold mb-4">Let's talk</h1>
        <p className="text-gray-600 text-lg">
          We are here to support your business growth and development.
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-10 md:mt-0">
        <form className="grid grid-cols-2 gap-4">
          {/* First Row */}
          <div className="col-span-1">
            <label className="block text-sm text-gray-600 mb-2">Your name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#e3c170]"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm text-gray-600 mb-2">Your name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#e3c170]"
            />
          </div>

          {/* Second Row */}
          <div className="col-span-1">
            <label className="block text-sm text-gray-600 mb-2">Your name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#e3c170]"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm text-gray-600 mb-2">Your name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#e3c170]"
            />
          </div>

          {/* Third Row */}
          <div className="col-span-2">
            <label className="block text-sm text-gray-600 mb-2">Comments</label>
            <textarea
              placeholder="Write your comments here..."
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#e3c170] h-24"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-[#e3c170] text-black px-6 py-2 rounded-full flex items-center gap-2 hover:bg-black hover:text-white transition-all"
            >
              Get in touch
              <span>&#8594;</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
