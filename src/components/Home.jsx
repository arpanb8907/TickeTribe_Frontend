import { FaTrain, FaFilm, FaTrophy, FaMusic, FaBus } from 'react-icons/fa';
import { useEffect } from 'react';

const Home = () => {
  const categories = [
    { id: 1, name: "Train Tickets", icon: <FaTrain className='text-blue-500 text-4xl' />, bg: "bg-blue-200" },
    { id: 2, name: "Movie Tickets", icon: <FaFilm className='text-red-500 text-4xl' />, bg: "bg-red-200" },
    { id: 3, name: "IPL Tickets", icon: <FaTrophy className='text-yellow-500 text-4xl' />, bg: "bg-yellow-200" },
    { id: 4, name: "Concerts", icon: <FaMusic className='text-green-500 text-4xl' />, bg: "bg-green-200" },
    { id: 5, name: "Bus Tickets", icon: <FaBus className='text-purple-500 text-4xl' />, bg: "bg-purple-200" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
     
      {/* Hero Section - Banner Carousel */}
      <div className="relative w-full h-[350px] overflow-hidden mt-16">
        {/* <img src="https://source.unsplash.com/1600x900/?stadium,concert" className="w-full h-full object-cover" alt="Banner" /> */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-3xl font-bold text-center p-4">
          <p>Discover & Book Your Favorite Events</p>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
        {categories.map((category) => (
          <div key={category.id} className={`p-6 rounded-lg shadow-lg flex flex-col items-center cursor-pointer hover:scale-105 transition-all ${category.bg}`}>
            {category.icon}
            <p className="mt-3 text-lg font-semibold">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
