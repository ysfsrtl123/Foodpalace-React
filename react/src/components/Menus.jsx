import menuData from "./data"; 

function Menus() {
  if (!menuData || menuData.length === 0) {
    return <h2 className="text-danger">Bir Hata Oluştu. Lütfen Daha Sonra Tekrar Deneyin.</h2>;
  }

  return (
    <div className="container text-center mt-5 mb-3">
      <div className="row align-items-start mt-5">
        <div className="col-6 mt-5">
          <div className="accordion mt-5" id="accordionExample">
            <div className="bg-white rounded-3">
              <h2><strong>Menü Kataloğu</strong></h2>
              {menuData.map((item, index) => (
                <div className="accordion-item" key={item.id}>
                  <button
                    className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${item.id}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={`collapse${item.id}`}
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        className="w-25 rounded-pill"
                        alt={item.title}
                      />
                    ) : (
                      <span className="text-muted">Görsel Yok</span>
                    )}
                    <h5 className="mx-2">{item.title}</h5>
                  </button>
                  <div
                    id={`collapse${item.id}`}
                    className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Menus;
