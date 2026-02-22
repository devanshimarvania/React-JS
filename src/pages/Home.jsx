import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import SkeletonCard from "../components/SkeletonCard";
import Pagination from "../components/Pagination";

function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState("light");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch products.");
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className={theme === "dark" ? "bg-dark text-light min-vh-100" : "min-vh-100"}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="container py-4">
        <Search onSearch={handleSearch} />

        {error && <div className="alert alert-danger">{error}</div>}

        {loading ? (
          <div className="row">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <div className="row">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {!loading && totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}

export default Home;