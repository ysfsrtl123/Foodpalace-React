

const Slider = () => {
  const sliderImg = {
    image: '/img/background.png', 
  };

  return (
    <main>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide mt-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={sliderImg.image}
              className="d-block w-100"
              alt="First Slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src={sliderImg.image}
              className="d-block w-100"
              alt="Second Slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src={sliderImg.image}
              className="d-block w-100"
              alt="Third Slide"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </main>
  );
};

export default Slider;
