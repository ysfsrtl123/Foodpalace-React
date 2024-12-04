import { useState } from "react";
import Founders from "./Founders";

function About() {
  // Dinamik içerik yönetimi için state
  const [content, setContent] = useState([
    {
      head: "Biz Kimiz?",
      paragraph: `Hoş geldiniz! Burada, modern dünyanın rafine zevklerini yansıtan ve her detayında lüksü hissettiren eşsiz bir gastronomi deneyimi sunuyoruz. 
      
      Restoranımız, yalnızca bir yemek yeme alanı değil; zarafet, yenilikçilik ve unutulmaz anılar yaratma felsefesiyle tasarlanmış bir yaşam tarzı mekanıdır. 
      Göz alıcı bir mimari tasarım, benzersiz lezzetler ve özenle hazırlanmış bir atmosferle sizi her ziyaretinizde özel hissettirmeyi amaçlıyoruz.`,
    },
    {
      head: "Kime Hitap Ediyoruz?",
      paragraph: `Restoranımız, sofistike bir yemek deneyimi arayan, ince zevk sahibi bireyler için tasarlandı. İş toplantıları, özel kutlamalar veya sadece hayatın tadını çıkarmak isteyenler için lüks bir ortam sunuyoruz. 
      
      Sizleri, mükemmel bir gastronomi yolculuğuna davet ediyoruz. Özel anlarınızı bizimle paylaşmak için sabırsızlanıyoruz.`,
    },
  ]);

  return (
    <div className="mt-5">
      <div className="container-fluid mt-5 mb-5">
        {/* İlk içerik */}
        <div className="container-fluid mt-5 bizkimiz">
          <div className="row mb-5">
            <div className="col mt-5 mx-auto">
              <h2>{content[0].head}</h2>
              <h4 className="d-flex justify-content-end text-secondary">
                okumak için karta basılı kalın!
              </h4>
            </div>
            <div className="row align-items-center mx-5 mt-5">
              <div className="col mx-5">
                <p className="align-items-center">{content[0].paragraph}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Kurucular Bölümü */}
        <div className="container mt-5 mb-5">
          <Founders />
        </div>

        {/* İkinci içerik */}
        <div className="container-fluid mt-5 bizkimiz">
          <div className="row mb-5">
            <div className="col mt-5 mx-auto">
              <h2>{content[1].head}</h2>
              <h4 className="d-flex justify-content-end text-secondary">
                Daha fazla bilgi için karta basılı kalın!
              </h4>
            </div>
            <div className="row align-items-center mx-5 mt-5">
              <div className="col mx-5">
                <p className="align-items-center">{content[1].paragraph}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
