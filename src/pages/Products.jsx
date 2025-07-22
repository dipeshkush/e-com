import ProductFilters from "../components/ProductFilters";
import ProductGrid from "../components/ProductGrid";
import { useAppSelector } from '../hooks/redux';

const Products = () => {
    // const productsCount = useAppSelector(state => state.products.products.length);
    // const filters = useAppSelector(state => state.filters);

    // const filteredCount = useAppSelector(state => {
    //     let filtered = state.products.products.filter(product => {
    //         const categoryMatch = filters.category === 'all' || product.category === filters.category;
    //         const priceMatch = product.price >= filters.priceRange.min && product.price <= filters.priceRange.max;
    //         const searchMatch = filters.searchQuery === '' ||
    //             product.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
    //             product.category.toLowerCase().includes(filters.searchQuery.toLowerCase());
    //         return categoryMatch && priceMatch && searchMatch;
    //     });
    //     return filtered.length;
    // });

    return (
        <div className="min-h-screen bg-background">
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10">
                {/* <div className="mb-6 sm:mb-8 text-center sm:text-left">
                    <h1 className="text-3xl font-bold mb-1">Our Products</h1>
                    <p className="text-gray-500 text-sm">{filteredCount} products found</p>
                </div> */}

                <div className="flex flex-col lg:flex-row gap-6">
                    <aside className="lg:w-72 w-full">
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
