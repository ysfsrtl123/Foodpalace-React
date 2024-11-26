import Founders from "./Founders"

function About() {
  // dinamik yap  yazıları değiştirebilsinler
   const content1 = {
    head: 'Biz Kimiz?',
    head2:'Kime Hitap Ediyoruz?'
   }
  return (
    <>
    <div className="container-fluid mt-5 mb-5">
      <div className="container-fluid mt-5 bizkimiz ">
      <div className="row ">
        <div className="col mt-5 mx-5 ">
          <h2>
            {content1.head}
          </h2>
          <h4 className="d-flex justify-content-end text-secondary"> okumak için karta basılı kalın!</h4>
        </div>
      </div>
      <div className="row align-items-center mx-5 mt-5">
    <div className="col mx-5">
      <p>
      Hoş geldiniz! Burada, modern dünyanın rafine zevklerini yansıtan ve her detayında lüksü hissettiren eşsiz bir gastronomi deneyimi sunuyoruz. Restoranımız, yalnızca bir yemek yeme alanı değil; zarafet, yenilikçilik ve unutulmaz anılar yaratma felsefesiyle tasarlanmış bir yaşam tarzı mekanıdır. Göz alıcı bir mimari tasarım, benzersiz lezzetler ve özenle hazırlanmış bir atmosferle sizi her ziyaretinizde özel hissettirmeyi amaçlıyoruz.

      Her şey, dünya mutfaklarının en seçkin örneklerini sunma hayaliyle başladı. Bu hayal, yalnızca yemeklerin tadı ve görselliğiyle sınırlı değil, aynı zamanda gelen misafirlerimizin hislerini ve anılarını zenginleştiren bir deneyim yaratmayı içeriyordu. Restoranımız, çağdaş tasarım anlayışının zarafetle birleştiği, incelikle düzenlenmiş bir alan sunar. Mekanımızda kullanılan doğal taş, mermer, altın detaylar ve sıcak tonlarla süslenmiş ahşap dokular, modern yaşamın en üst düzey stiline işaret eder.
      </p>
      <br />
      <p>

      </p>
    </div>
    </div>
    </div>
    <div className="container mt-5 mb-5">
    <Founders />  
    </div>
    
    <div className="container-fluid  mt-5 bizkimiz ">
      <div className="row ">
        <div className="col mt-5 mx-5 ">
          <h2>
            {content1.head2}
          </h2>
          <h4 className="d-flex justify-content-end text-secondary"> okumak için karta basılı kalın!</h4>
        </div>
      </div>
      <div className="row align-items-center mx-5 mt-5">
    <div className="col mx-5">
      <p>
      Restoranımız, sofistike bir yemek deneyimi arayan, ince zevk sahibi bireyler için tasarlandı. İş toplantıları, özel kutlamalar veya sadece hayatın tadını çıkarmak isteyenler için lüks bir ortam sunuyoruz. İçeri adım attığınız andan itibaren, her şeyin size özel tasarlandığını hissedeceksiniz.

       Burada, zarafetin ve lezzetin buluştuğu bir deneyim sizi bekliyor. Bu, yalnızca yemek yemek değil, aynı zamanda kendinize hak ettiğiniz bir anı armağan etmektir. Her ziyaret, yeni bir hikaye yazmak ve unutulmaz bir deneyim yaşamak için bir fırsat olacak.

       Sizleri, mükemmel bir gastronomi yolculuğuna davet ediyoruz. Özel anlarınızı bizimle paylaşmak için sabırsızlanıyoruz.
      </p>
    </div>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default About