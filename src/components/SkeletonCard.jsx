function SkeletonCard() {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card p-3">
        <div className="placeholder-glow">
          <span className="placeholder col-12 mb-2" style={{ height: "200px" }}></span>
          <span className="placeholder col-8"></span>
          <span className="placeholder col-4"></span>
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;