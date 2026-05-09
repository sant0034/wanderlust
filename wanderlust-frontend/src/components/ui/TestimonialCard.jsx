const TestimonialCard = ({ t }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow rounded-2xl text-center transition-all duration-300 hover:scale-105">
      
      <img
        src={t.img}
        alt={t.name}
        className="w-16 h-16 mx-auto rounded-full mb-4 object-cover"
      />

      <p className="text-gray-600 dark:text-gray-300 italic mb-3">
        "{t.text}"
      </p>

      <h3 className="font-bold">{t.name}</h3>

      <div className="text-yellow-500 mt-2">
        {"⭐".repeat(5)}
      </div>
    </div>
  );
};

export default TestimonialCard;