const categories = [
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

const CategoryFilter = ({ selected, onChange }) => {
  return (
    <div className="flex gap-2 mb-6 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-2 rounded-full border ${
            selected === cat
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300"
          } hover:bg-blue-600 hover:text-white transition`}
          onClick={() => onChange(cat)}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
