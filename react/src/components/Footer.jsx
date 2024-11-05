
export default function Footer() {
    const kapanis = '23.30'
    return (
        <footer className="bg-dark text-white pt-4 border-top" data-bs-theme="dark">
       <div className="mx-3">
            <h4> {kapanis} a kadar sipariş Verebilirsiniz</h4>
        </div>
        <div className="container mt-5">
            <div className="row">
                {/* Navigation Links Section */}
                <div className="col-md-3 text-center mb-4">
                    <h5 className="mb-4">Sayfalar</h5>
                    <ul className="list-unstyled">
                        <li className="mb-2">
                            <a href="#" className=" foot  text-decoration-none">Anasayfa</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className=" foot  text-decoration-none">Hakkımızda</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className=" foot  text-decoration-none">Menülerimiz</a>
                        </li>
                        <li>
                            <a href="#" className=" foot  text-decoration-none">İletişim</a>
                        </li>
                    </ul>
                </div>
    
                {/* About FoodPalace Section */}
                <div className="col-md-3 text-center mb-4">
                    <h5 className="mb-4">FoodPalace Hakkında</h5>
                    <ul className="list-unstyled">
                        <li className="mb-2">
                            <a href="#" className=" foot  text-decoration-none">FOODPALACE Kimdir?</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className=" foot  text-decoration-none">Hizmetlerimiz</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className=" foot  text-decoration-none">Misyonumuz</a>
                        </li>
                        <li>
                            <a href="#" className="foot text-decoration-none">Vizyonumuz</a>
                        </li>
                    </ul>
                </div>
    
                {/* Contact Section */}
                <div className="col-md-6 text-center">
                    <h5 className="mb-4">Bize Ulaşın</h5>
                    <p>1234 Sokak Adresi, Antalya, Türkiye</p>
                    <p>Email: info@foodpalace.com | Tel: +90 (531) 456 78 90</p>
                    <div className="social-icons">
                        <a href="#" className=" btn btn-white me-3 facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className=" btn btn-white  me-3 instagram"><i className="bi bi-instagram"></i></a>
                        <a href="#" className=" btn btn-white twitter "><i className="bi bi-twitter"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    
    )

    
}