import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setCategory, setPriceRange, setSortBy, resetFilters } from '../store/slices/filtersSlice';

export default function ProductFilters() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(state => state.filters);
  const products = useAppSelector(state => state.products.products);

  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="border border-gray-200 p-6 rounded-lg bg-white sticky top-24 shadow-sm space-y-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Filter Products</h2>

      {/* Category Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
        <select
          value={filters.category}
          onChange={(e) => dispatch(setCategory(e.target.value))}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="all">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Price Range: <span className="font-semibold">${filters.priceRange.min} - ${filters.priceRange.max}</span>
        </label>
        <input
          type="range"
          min="0"
          max="200"
          value={filters.priceRange.max}
          onChange={(e) =>
            dispatch(setPriceRange({ min: filters.priceRange.min, max: parseInt(e.target.value) }))
          }
          className="w-full accent-blue-500"
        />
      </div>

      {/* Sort By */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
        <select
          value={filters.sortBy}
          onChange={(e) => dispatch(setSortBy(e.target.value))}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="name">Name</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {/* Reset Button */}
      <button
        onClick={() => dispatch(resetFilters())}
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Reset Filters
      </button>
    </div>
  );
}
