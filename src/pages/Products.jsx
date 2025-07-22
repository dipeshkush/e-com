import ProductFilters from "../components/ProductFilters";
import ProductGrid from "../components/temp";
import { useAppSelector } from '../hooks/redux';


const Products = () => {
    const productsCount = useAppSelector(state => state.products.products.length);
    const filters = useAppSelector(state => state.filters);

    const filteredCount = useAppSelector(state => {
        let filtered = state.products.products.filter(product => {
            const categoryMatch = filters.category === 'all' || product.category === filters.category;
            const priceMatch = product.price >= filters.priceRange.min && product.price <= filters.priceRange.max;
            const searchMatch = filters.searchQuery === '' ||
                product.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
                product.category.toLowerCase().includes(filters.searchQuery.toLowerCase());
            return categoryMatch && priceMatch && searchMatch;
        });
        return filtered.length;
    });

    return (
        <div className="min-h-screen bg-background">

            <main className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Our Products</h1>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <aside className="lg:w-80 flex-shrink-0 sticky top-24 self-start">
                        <ProductFilters />
                    </aside>

                    <div className="flex-1">
                        <ProductGrid />
                    </div>
                </div>

            </main>
        </div>
    );
};

export default Products;
