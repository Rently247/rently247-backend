import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";

export default function PropertyDetails() {
  return (
    <div className="max-w-9xl mx-auto p-4">
      {/* Property Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-2xl font-semibold">Condo</h1>
          <p className="text-gray-500">KG 20, Zindiro</p>
        </div>
        <div className="flex space-x-4 text-gray-600">
          <button className="flex items-center space-x-1">
            <AiOutlineHeart className="text-xl" />
            <span>Favorite</span>
          </button>
          <button className="flex items-center space-x-1">
            <AiOutlineShareAlt className="text-xl" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="flex flex-col lg:flex-row gap-4 max-h-[600px]">
        <div className="w-full lg:w-1/2">
          <img
            src="https://i.ytimg.com/vi/UbtJncQuHGE/maxresdefault.jpg"
            alt="Property"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-wrap gap-2">
          <img
            src="https://i.ytimg.com/vi/UbtJncQuHGE/maxresdefault.jpg"
            alt="Interior 1"
            className="w-[49%] h-[49%] object-cover rounded-lg"
          />
          <img
            src="https://i.ytimg.com/vi/UbtJncQuHGE/maxresdefault.jpg"
            alt="Interior 2"
            className="w-[49%] h-[49%] object-cover rounded-lg"
          />
          <img
            src="https://i.ytimg.com/vi/UbtJncQuHGE/maxresdefault.jpg"
            alt="Interior 3"
            className="w-[49%] h-[49%] object-cover rounded-lg"
          />
          <div className="relative w-[49%] h-[49%]">
            <img
              src="https://i.ytimg.com/vi/UbtJncQuHGE/maxresdefault.jpg"
              alt="Thumbnail"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
              <span className="text-white text-lg">+23 photos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Property Info */}
      <div className="mt-4">
        <p className="text-xl font-semibold">RWF 50,000 per month</p>
        <p className="text-gray-500">
          3 guests · 2 rooms · 1 bathroom · 1 toilet
        </p>
      </div>
    </div>
  );
}
