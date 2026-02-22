import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={product.image}
          className="card-img-top p-3"
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div className="card-body d-flex flex-column">
          <h6 className="card-title">{product.title.substring(0, 50)}</h6>
          <p className="fw-bold">${product.price}</p>
          <button
            className="btn btn-primary mt-auto"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;