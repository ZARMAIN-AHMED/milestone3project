import Image from 'next/image';
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div>
            <Image
              src="/3.jpg" // Replace with your image path
              alt="About Us"
              height={200}
              width={900}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-indigo-500">Shop.CO</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              At <span className="font-semibold">Shop.CO</span>, we are committed to
              delivering the best online shopping experience. With a wide
              selection of top-quality products, seamless navigation, and
              outstanding customer support, we ensure that our customers always
              find what they’re looking for.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our mission is to make online shopping convenient, reliable, and
              enjoyable. Whether you are searching for the latest trends or
              everyday essentials, we’ve got you covered.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-indigo-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                Premium quality products
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-indigo-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                Seamless online shopping experience
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-indigo-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                24/7 customer support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
