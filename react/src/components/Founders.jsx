function Founders() {
    return (
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex align-items-center">
              <div className="col-6">
                <img
                  src="../public/img/kurucu1.webp"
                  className="d-block w-100"
                  alt="First slide"
                />
              </div>
              <div className="col-6 text-white px-4">
                <h3>Ercüment Akça</h3>
                <p>
                  Restoranımızın mucitlerinden tasarım ve düzenlemesine kadar bütün
                  sorumluluklarını alan kuruculardan biridir.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex align-items-center">
              <div className="col-6">
                <img
                  src="../public/img/kurucu2.webp"
                  className="d-block w-100"
                  alt="Second slide"
                />
              </div>
              <div className="col-6 text-white px-4">
                <h3>Selim Yalçın</h3>
                <p>
                  Lezzet tariflerini geliştiren ve restoranın mutfak yönetiminde
                  uzmanlaşan kurucularımızdan biridir.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
  
  export default Founders;
  