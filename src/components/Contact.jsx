import React from "react";

const ContactUs = () => {
  return (
    <div className="p-4 md:p-8 bg-green-100">
      <h2 className="text-3xl text-center mb-8 font-serif text-green-800">
        Contact Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src="https://burst.shopifycdn.com/photos/contact-us-phone.jpg?width=1200&format=pjpg&exif=1&iptc=1"
            alt="Contact Us"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-green-800 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-white text-gray-800 rounded-md shadow-md"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-green-800 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-white text-gray-800 rounded-md shadow-md"
                placeholder="john@example.com"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-green-800 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 bg-white text-gray-800 rounded-md shadow-md resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
              Send Message
            </button>
            <div className="mt-4">
              <p className="text-green-800 font-semibold mb-2">
                Follow us on social media:
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-green-500 hover:text-green-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a
                  href="#"
                  className="text-green-500 hover:text-green-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a
                  href="#"
                  className="text-green-500 hover:text-green-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
                {/* Add more social media icons here */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
