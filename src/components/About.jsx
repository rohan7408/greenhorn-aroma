import React from "react";
import oil from "../assets/images/essential-oils-mint-bottle.jpg";

const About = () => {
  return (
    <section className="bg-gradient-to-br from-green-100 via-green-200 to-green-100 py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6 text-center">
          About Essential Oils
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-green-800 text-base md:text-lg">
              Essential oils are natural plant extracts that have been used for
              centuries to promote health and well-being. They are highly
              concentrated and aromatic, extracted from various parts of plants,
              including leaves, flowers, stems, and roots.
            </p>
            <p className="text-green-800 text-base md:text-lg">
              These oils contain the essence of the plant and are known for
              their therapeutic properties. They can be used in aromatherapy,
              topical applications, and even for household purposes like
              cleaning and disinfecting.
            </p>
            <p className="text-green-800 text-base md:text-lg">
              Each essential oil has unique characteristics and benefits. Some
              popular essential oils include Lavender for relaxation, Peppermint
              for energy and focus, Tea Tree for its antibacterial properties,
              and Eucalyptus for respiratory support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="https://soapytwist.com/cdn/shop/products/basil_essential_oil.jpg?v=1689577768&width=1080"
              alt="Essential Oil 1"
              className="rounded-md shadow-lg w-full"
            />
            <img
              src="https://img80003852.weyesimg.com/uploads/w1l96vws.allweyes.com/images/16467068847609.jpg?imageView2/2/w/1920/q/75/format/webp"
              alt="Essential Oil 2"
              className="rounded-md shadow-lg w-full"
            />
            <img
              src="https://img80003852.weyesimg.com/uploads/w1l96vws.allweyes.com/images/16466397406598.jpg?imageView2/2/w/1920/q/75/format/webp"
              alt="Essential Oil 3"
              className="rounded-md shadow-lg w-full"
            />
            <img
              src="https://img80003852.weyesimg.com/uploads/w1l96vws.allweyes.com/images/16462116012775.jpg?imageView2/2/w/1920/q/75/format/webp"
              alt="Essential Oil 4"
              className="rounded-md shadow-lg w-full"
            />
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
            Benefits of Essential Oils
          </h3>
          <ul className="list-disc list-inside text-green-800 text-base md:text-lg space-y-2">
            <li>Relieves stress and anxiety</li>
            <li>Improves sleep quality</li>
            <li>Boosts mood and mental clarity</li>
            <li>Supports respiratory health</li>
            <li>Alleviates muscle tension and soreness</li>
            <li>Natural alternative for skin care</li>
            <li>Enhances overall well-being</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
