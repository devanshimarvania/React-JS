import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    setProduct(data);
  };

  if (!product) return <Loader />;

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            style={{ height: "300px", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-6">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <h4>${product.price}</h4>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;