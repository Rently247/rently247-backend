"use client";

import React, { useState } from "react";

const ListYourProperty = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabsInfo = [
    {
      title: "Step 1",
      description: "House Information",
    },
    {
      title: "Step 2",
      description: "House Images",
    },
    {
      title: "Step 3",
      description: "House Pricing",
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* tab header */}
      <div className="flex justify-center space-x-6">
        {tabsInfo.map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer p-4 flex-1`}
            onClick={() => setActiveTab(index)}
          >
            <div
              className={`h-[2px] w-full ${
                activeTab === index ? "bg-primary" : "bg-gray-400"
              }`}
            ></div>
            <div
              className={` mt-2 ${
                activeTab === index ? "text-primary font-bold" : "text-gray-600"
              }`}
            >
              {tab.title}
            </div>
            <div
              className={`text-sm ${
                activeTab === index ? "text-primary font-bold" : "text-gray-600"
              }`}
            >
              {tab.description}
            </div>
          </div>
        ))}
      </div>

      {/* Tabs CONTENT */}
      {/* first tab */}
      {activeTab === 0 && (
        <div className="mt-4 px-6">
          <h2 className="text-2xl font-bold mb-4">Tell us about your place</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name of Property
              </label>
              <input
                type="text"
                id="name"
                className="border rounded-lg p-2 w-full"
                placeholder="Enter name of property"
              />
            </div>
            <div>
              <label
                htmlFor="apartment"
                className="block text-gray-700 font-medium mb-2"
              >
                Apartment Type
              </label>
              <select id="apartment" className="border rounded-lg p-2 w-full">
                <option value="">Select apartment type</option>
                <option value="1">Single Room</option>
                <option value="2">Two Room</option>
                <option value="3">Three Room</option>
                <option value="4">Four Room</option>
              </select>
            </div>
            {/* No. of guests, No. of Bedrooms, No. of Bathrooms, No. of Toilets */}

            <div>
              <label
                htmlFor="guests"
                className="block text-gray-700 font-medium mb-2"
              >
                No. of Guests
              </label>
              <input
                type="number"
                id="guests"
                className="border rounded-lg p-2 w-full"
                placeholder="Enter number of guests"
                defaultValue={0}
              />
            </div>

            <div>
              <label
                htmlFor="bedrooms"
                className="block text-gray-700 font-medium mb-2"
              >
                No. of Bedrooms
              </label>
              <input
                type="number"
                id="bedrooms"
                className="border rounded-lg p-2 w-full"
                placeholder="Enter number of bedrooms"
                defaultValue={0}
              />
            </div>

            <div>
              <label
                htmlFor="bathrooms"
                className="block text-gray-700 font-medium mb-2"
              >
                No. of Bathrooms
              </label>
              <input
                type="number"
                id="bathrooms"
                className="border rounded-lg p-2 w-full"
                placeholder="Enter number of bathrooms"
                defaultValue={0}
              />
            </div>

            <div>
              <label
                htmlFor="toilets"
                className="block text-gray-700 font-medium mb-2"
              >
                No. of Toilets
              </label>
              <input
                type="number"
                id="toilets"
                className="border rounded-lg p-2 w-full"
                placeholder="Enter number of toilets"
                defaultValue={0}
              />
            </div>

            {/* Features */}
            <div className="col-span-2">
              <label
                htmlFor="features"
                className="block text-gray-700 font-medium mb-2"
              >
                Features
              </label>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Survey",
                  "Swimming pool",
                  "Gym",
                  "Security",
                  "Wifi",
                  "Cafe",
                  "Coffee Shop",
                  "Bar",
                ].map((feature) => (
                  <div key={feature} className="flex items-center">
                    <input type="checkbox" id={feature} className="mr-2" />
                    <label htmlFor={feature}>{feature}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Provide a brief description about your place
             */}
            <div className="col-span-2">
              <label
                htmlFor="description"
                className="block text-gray-700 font-medium mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                className="border rounded-lg p-2 w-full"
                placeholder="Enter description of property"
                rows={5}
              ></textarea>
            </div>
          </div>
        </div>
      )}

      {/* second tab */}
      {activeTab === 1 && (
        <div className="mt-4 px-6">
          <h2 className="text-2xl font-bold mb-4">
            Tell us where your place is located
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((image) => (
              <div key={image} className="relative aspect-square bg-gray-200">
                <input
                  type="file"
                  id={`image-${image}`}
                  className="absolute inset-0 w-full h-full opacity-0"
                />
                <label
                  htmlFor={`image-${image}`}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                >
                  <span className="text-white text-lg">+</span>
                </label>
              </div>
            ))}
          </div>
          <div className="mt-4">
            {/* House Address */}
            <label
              htmlFor="address"
              className="block text-gray-700 font-medium mb-2"
            >
              House Address
            </label>
            <input
              type="text"
              id="address"
              className="border rounded-lg p-2 w-full"
              placeholder="Enter address of property"
            />
            {/* province, district, sector */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div>
                <label
                  htmlFor="province"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Province
                </label>
                <select id="province" className="border rounded-lg p-2 w-full">
                  <option value="">Select province</option>
                  <option value="1">Kigali</option>
                  <option value="2">Western</option>
                  <option value="3">Eastern</option>
                  <option value="4">Southern</option>
                  <option value="5">Northern</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="district"
                  className="block text-gray-700 font-medium mb-2"
                >
                  District
                </label>
                <select id="district" className="border rounded-lg p-2 w-full">
                  <option value="">Select district</option>
                  <option value="1">Gasabo</option>
                  <option value="2">Kicukiro</option>
                  <option value="3">Nyarugenge</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="sector"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Sector
                </label>
                <select id="sector" className="border rounded-lg p-2 w-full">
                  <option value="">Select sector</option>
                  <option value="1">Remera</option>
                  <option value="2">Gisozi</option>
                  <option value="3">Kimironko</option>
                </select>
              </div>
            </div>

            {/* Landmark (Market, Filling station, ...) or Bustop, Name of Estate (if Applicable)             */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label
                  htmlFor="landmark"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Landmark
                </label>
                <input
                  type="text"
                  id="landmark"
                  className="border rounded-lg p-2 w-full"
                  placeholder="Enter landmark"
                />
              </div>
              <div>
                <label
                  htmlFor="estate"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name of Estate
                </label>
                <input
                  type="text"
                  id="estate"
                  className="border rounded-lg p-2 w-full"
                  placeholder="Enter name of estate"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* third tab (currency, price, period (yearly, monthly)) */}
      {activeTab === 2 && (
        <div className="mt-4 px-6">
          <h2 className="text-2xl font-bold mb-4">Pricing Information</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label
                htmlFor="currency"
                className="block text-gray-700 font-medium mb-2"
              >
                Currency
              </label>
              <select id="currency" className="border rounded-lg p-2 w-full">
                <option value="">Select currency</option>
                <option value="1">RWF</option>
                <option value="2">USD</option>
                <option value="3">EUR</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-gray-700 font-medium mb-2"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                className="border rounded-lg p-2 w-full"
                placeholder="Enter price"
              />
            </div>
            <div>
              <label
                htmlFor="period"
                className="block text-gray-700 font-medium mb-2"
              >
                Period
              </label>
              <select id="period" className="border rounded-lg p-2 w-full">
                <option value="">Select period</option>
                <option value="1">Yearly</option>
                <option value="2">Monthly</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Next and Previous buttons */}
      <div className="flex justify-between mt-6">
        <button
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
          onClick={() => setActiveTab(activeTab - 1)}
          disabled={activeTab === 0}
        >
          Previous
        </button>
        <button
          className="bg-primary text-white px-4 py-2 rounded-lg"
          onClick={() => setActiveTab(activeTab + 1)}
          disabled={activeTab === tabsInfo.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ListYourProperty;
