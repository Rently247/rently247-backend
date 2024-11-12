import React from "react";

const PropertyCard = ({ address, type, price }) => (
  <div className="flex flex-col">
    <div className="relative rounded-2xl overflow-hidden mb-3">
      <img
        src="https://i.ytimg.com/vi/UbtJncQuHGE/maxresdefault.jpg"
        alt="Property"
        className="w-full aspect-square object-cover"
      />
      {/* <button className="absolute bottom-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </button> */}
    </div>
    <a href="/properties/1" className="">
      <h3 className="font-bold text-gray-900">{address}</h3>
      <p className="text-gray-600">{type}</p>
      <p className="font-semibold text-gray-900">
        RWF {Number(price)?.toLocaleString()}{" "}
        <span
          className="text-sm text-gray-600 font-normal
      "
        >
          / month
        </span>
      </p>
    </a>
  </div>
);

const PropertyGrid = () => {
  const properties = [
    {
      address: "KG 20, Zindiro",
      type: "Condo",
      price: "100000",
      id: 1,
    },
    {
      address: "KG 20, Zindiro",
      type: "Condo",
      price: "100000",
      id: 2,
    },
    {
      address: "KG 20, Zindiro",
      type: "Condo",
      price: "100000",
      id: 3,
    },
    {
      address: "KG 20, Zindiro",
      type: "Condo",
      price: "100000",
      id: 4,
    },
    {
      address: "KG 20, Zindiro",
      type: "Condo",
      price: "100000",
      id: 5,
    },
    {
      address: "123 Main Street",
      type: "Sample property",
      price: "250000",
      id: 6,
    },
    {
      address: "123 Main Street",
      type: "Sample property",
      price: "250000",
      id: 7,
    },
    {
      address: "123 Main Street",
      type: "Sample property",
      price: "250000",
      id: 8,
    },
    {
      address: "123 Main Street",
      type: "Sample property",
      price: "250000",
      id: 9,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6 gap-y-12">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          address={property.address}
          type={property.type}
          price={property.price}
        />
      ))}
    </div>
  );
};

export default PropertyGrid;
