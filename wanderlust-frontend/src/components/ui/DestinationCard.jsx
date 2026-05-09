import { Link } from "react-router-dom";

const DestinationCard = ({ d }) => {
  return (
    <div className="h-[260px] flex flex-col justify-between bg-white dark:bg-gray-900 rounded-2xl shadow-lg group transition-all duration-300 hover:scale-105">

      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={d.img}
          alt={d.name}
          className="h-[150px] w-full object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>
      </div>

      {/* CONTENT */}
      <div className="p-3 text-center flex flex-col justify-between flex-1">
        <h3 className="font-bold text-sm mb-2">{d.name}</h3>

        <div className="flex gap-2 justify-center">
          
          <Link to={`/destination/${encodeURIComponent(d.name)}`}>
            <button className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-xs">
              Details
            </button>
          </Link>

          <Link to="/booking" state={{ destination: d }}>
            <button className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs hover:bg-blue-700">
              Book
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default DestinationCard;