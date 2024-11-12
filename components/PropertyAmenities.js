"use client";

import { useState } from "react";
import { BsPatchCheckFill } from "react-icons/bs";

export default function PropertyAmenities() {
  const [showMore, setShowMore] = useState(false);
  const description =
    "Beautiful, spacious, detached bungalow with heated swimming pool with children's plateau and large, enclosed garden with total privacy. Quiet location. Designer outlet, museums, Market Square, historic churches, and Maasplassen. Living room with sitting area, TV corner and open fireplace. Fully equipped spacious kitchen. Covered terrace with sitting area, dining table, barbecue and TV/audio installation. Complete bathrooms with bath, rain shower, double sink and toilet. Four bedrooms, of which 3 with TV. Everywhere Wifi. The space It concerns detached villa with spacious rooms. Spacious reception hall with cloakroom and toilet. 4 bedrooms with comfortable box springs. 2 bathrooms with double sink, toilet, bathtub and/or rain shower. Extra separate toilet. Laundry room with washing machine, dryer, iron and iron. Spacious living room with TV corner and seating area. Kitchen with American fridge, Quooker, sink with dishwasher, gas stove, oven, dining table with 8 chairs, toaster, etc. Utility room with honesty wine fridge, combi microwave and Nespresso machine with coffee from the house, and a wide range of tea. Covered terrace with seating area and dining area with 8 chairs, gas barbecue in the garden. Yoga mats are provided for relaxation. Heated pool with children's plateau. Sunbeds. All in all a lovely place to stay! The pool is heated/open from May to mid-September. Minimum age for adults is 30 years old. Children are of course always welcome. Other things to note Safety is important to us. The house also has good locks. Upon receipt, you will receive 2 keys that are part of a key plan. In the event of loss of a key, all locks will need to be replaced. The deposit of €250 is therefore to cover the cost of losing a key. HOUSE RULES Our house is decorated with love and attention and you will not lack anything. In return, we expect our house rules to be followed: - the minimum age of our adult guests is 30 years - no smoking inside the house and no drug use - no parties (it's a place to unwind) - no extra visitors - respect the neighbors, it is a very quiet area and we would like to keep it that way. - due to the tranquility and cleaning of the pool, swimming is only possible between 09.00 and 21.00 hours";
  return (
    <div className="max-w-9xl mx-auto p-6">
      <div className="flex justify-between flex-col-reverse lg:flex-row items-start mb-6">
        {/* Main Content */}
        <div className="w-full lg:w-3/4">
          <hr className="mb-6" />
          {/* Description */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Description</h2>
            <p className="text-gray-700 mt-2">
              {showMore
                ? description
                : description.slice(0, 300) +
                  `${description.length > 300 ? "..." : ""}`}
              <span
                className="text-blue-900 cursor-pointer ml-2"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show less" : "Show more"}
              </span>
            </p>
          </div>

          {/* Facilities */}
          <div className="mb-12">
            <h2 className="text-lg font-semibold">Facilities</h2>
            <div className="flex flex-wrap gap-y-4 mt-2">
              <div className="flex items-center gap-2 text-gray-700 w-1/2">
                <span className="text-xl">🌼</span>
                <span>Garden view</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 w-1/2">
                <span className="text-xl">📶</span>
                <span>Wifi</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 w-1/2">
                <span className="text-xl">🚗</span>
                <span>Free parking on premises</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 w-1/2">
                <span className="text-xl">🍴</span>
                <span>Kitchen</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 w-1/2">
                <span className="text-xl">🖥️</span>
                <span>Dedicated workspace</span>
              </div>
            </div>
            <button className="mt-8 px-4 py-2 bg-primary text-white rounded-lg underline">
              Show all facilities
            </button>
          </div>

          {/* Verification */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-green-600">
              <BsPatchCheckFill className="text-xl" />
              <span className="text-md">Property is verified.</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              If you think something is not right, report it and we will
              investigate.
            </p>
            <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg">
              Report Property
            </button>
          </div>

          {/* Location */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Location</h2>
            <p className="text-gray-500">To be implemented</p>
          </div>

          {/* Similar Properties */}
          <div>
            <h2 className="text-lg font-semibold">Similar Properties</h2>
            <p className="text-gray-500">To be implemented</p>
          </div>
        </div>

        {/* Agent Contact */}
        <div className="w-full lg:w-1/4 lg:ml-8 mt-6 lg:mt-0 lg:pt-10">
          <div className="p-4 border border-gray-200 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-700 mb-4">Meet the Agent</h3>
            <div className="flex items-center mb-4">
              <img
                src="/path/to/agent-avatar.jpg"
                alt="Agent"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-gray-800">Abass Tope</p>
                <p className="text-sm text-gray-500">Joined 5 months ago</p>
              </div>
            </div>
            <button className="w-full mb-2 px-4 py-2 bg-primary text-white rounded-lg">
              Show Contact
            </button>
            <button className="w-full px-4 py-2 bg-primary text-white rounded-lg flex items-center justify-center">
              <span className="mr-2">💬</span> Send a message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
