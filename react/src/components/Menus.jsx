import React, { useState, useEffect } from "react";
import menuData from "./data";

function Menus() {
  const [activeIndex, setActiveIndex] = useState(null); // Hangi collaps açık
  const [animateCombination, setAnimateCombination] = useState(false); // Combination animasyonu

  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Aynı collaps'a tıklanırsa kapat
    } else {
      setActiveIndex(index); // Yeni collaps aç
      setAnimateCombination(true); // Combination animasyonunu başlat
    }
  };

  // Animasyonu bitirmek için bir effect
  useEffect(() => {
    if (animateCombination) {
      const timeout = setTimeout(() => {
        setAnimateCombination(false);
      }, 2000); // Animasyon süresine göre ayarla
      return () => clearTimeout(timeout); // Temizleme
    }
  }, [animateCombination]);

  return (
    <div className="container text-center mt-5 mb-3">
      <div className="row align-items-start mt-5">
        <div
          className={`col ${
            activeIndex !== null
              ? "col-6 soft" // Açıkken normal görünüm
              : "col-6 soft collapsed" // Kapalı durumu
          }`}
        >
          <div className="accordion mt-5" id="accordionExample">
            <div className="bg-white rounded-3">
              <h2>
                <strong>Menü Kataloğu</strong>
              </h2>
              {menuData.map((item, index) => (
                <div className="accordion-item" key={item.id}>
                  <button
                    className={`accordion-button ${
                      activeIndex === index ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => handleAccordionClick(index)}
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
                  {activeIndex === index && (
                    <div className="accordion-body">
                      <p>{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Combination Alanı */}
        {activeIndex !== null && (
          <>
            <div className="col-1 mt-5">
              <hr className="vertical-line" />
            </div>
            <div className="col-3 align-items-center mt-5 mb-3 ">
              <div
                className={`combination mb-3 ${
                  animateCombination ? "animate" : ""
                }`} // Animasyon sınıfı ekleniyor
              >
                <p>{menuData[activeIndex]?.combination}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Menus;
