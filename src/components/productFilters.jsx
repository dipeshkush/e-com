import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setCategory, setPriceRange, setSortBy, resetFilters } from '../store/slices/filtersSlice';

export default function ProductFilters() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(state => state.filters);
  const products = useAppSelector(state => state.products.products);

  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="border p-4 rounded bg-white sticky top-20 space-y-4">
      <div>
        <label className="block mb-1 font-semibold">Category</label>
        <select
          value={filters.category}
          onChange={(e) => dispatch(setCategory(e.target.value))}
          className="w-full border px-2 py-1 rounded"
        >
          <option value="all">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-semibold">Price Range: ${filters.priceRange.min} - ${filters.priceRange.max}</label>
        <input
          type="range"
          min="0"
          max="200"
          value={filters.priceRange.max}
          onChange={(e) =>
            dispatch(setPriceRange({ min: filters.priceRange.min, max: parseInt(e.target.value) }))
          }
          className="w-full"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Sort By</label>
        <select
          value={filters.sortBy}
          onChange={(e) => dispatch(setSortBy(e.target.value))}
          className="w-full border px-2 py-1 rounded"
        >
          <option value="name">Name</option>
          <option value="price-low">Price Low to High</option>
          <option value="price-high">Price High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <button
        onClick={() => dispatch(resetFilters())}
        className="w-full bg-gray-300 text-black px-3 py-1 rounded"
      >
        Reset Filters
      </button>
    </div>
  );
}
