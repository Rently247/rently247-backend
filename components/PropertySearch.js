import React from "react";

const PropertySearch = () => {
  return (
    <div className="mx-auto p-6">
      <h1 className="text-2xl font-semibold text-primary mb-6 text-center">
        Find property for rent.
      </h1>

      <div className="bg-primary rounded-lg p-8">
        <div className="space-y-6">
          <div>
            <label className="block text-white mb-2 text-sm font-medium">
              Where
            </label>
            <input
              type="text"
              placeholder="Search locations"
              className="w-full p-2.5 rounded border-gray-300 text-gray-700 bg-white"
            />
          </div>

          <div className="flex gap-4 lg:items-end flex-col lg:flex-row">
            <div>
              <label className="block text-white mb-2 text-sm font-medium">
                Price Range
              </label>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Minimum"
                  className="w-1/2 lg:w-36 p-2.5 rounded border-gray-300 text-gray-700 bg-white"
                />
                <input
                  type="text"
                  placeholder="Maximum"
                  className="w-1/2 lg:w-36 p-2.5 rounded border-gray-300 text-gray-700 bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-white mb-2 text-sm font-medium">
                Bedrooms
              </label>
              <select className="w-full lg:w-36 p-2.5 rounded border-gray-300 text-gray-700 bg-white">
                <option>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2 text-sm font-medium">
                Bathrooms
              </label>
              <select className="w-full lg:w-36 p-2.5 rounded border-gray-300 text-gray-700 bg-white">
                <option>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
            </div>

            <button className="bg-white text-primary px-8 py-2.5 rounded font-medium hover:bg-gray-50">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;
