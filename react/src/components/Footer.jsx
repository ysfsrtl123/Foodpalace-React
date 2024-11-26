import  { useState, useEffect } from 'react';

export default function Footer() {
    const [isClosed, setIsClosed] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const kapanis = '23.30’a kadar sipariş verebilirsiniz';
    const kapali = 'Şu an Kapalıyız. Yarın yine bekleriz!';

    useEffect(() => {
        const checkOpeningHours = () => {
            const now = new Date();
            const hour = now.getHours();
            const minute = now.getMinutes();

        
            if ((hour > 23 || (hour === 23 && minute >= 30)) || hour < 9) {
                setIsClosed(true);
            } else {
                setIsClosed(false);
            }
        };

        checkOpeningHours();

        // Her dakika kontrol etmek için bir interval kur
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
            checkOpeningHours();
        }, 1000);

        // Bileşen kaldırıldığında interval'i temizle
        return () => clearInterval(intervalId);
    }, []);

    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');

    return (
        <footer className="bg-dark text-white pt-4 border-top position-relative" data-bs-theme="dark">
            {/* Canlı Saat */}
            <div className='hour' style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                fontSize: '1.2em',
                fontWeight: 'bold'
            }}>
                {hours}:{minutes}:{seconds}
            </div>

            {/* Açık/Kapalı Mesajı */}
            <div className="mx-3 close">
                <h4 className='message'>
                    {isClosed ? kapali : kapanis}</h4>
            </div>

            <div className="container mt-5">
                <div className="row">
                    {/* Sayfalar Bölümü */}
                    <div className="col-md-3 text-center mb-4">
                        <h5 className="mb-4">Sayfalar</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" className="foot text-decoration-none">Anasayfa</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="foot text-decoration-none">Hakkımızda</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="foot text-decoration-none">Menülerimiz</a>
                            </li>
                            <li>
                                <a href="#" className="foot text-decoration-none">İletişim</a>
                            </li>
                        </ul>
                    </div>

                    {/* FoodPalace Hakkında */}
                    <div className="col-md-3 text-center mb-4">
                        <h5 className="mb-4">FoodPalace Hakkında</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" className="foot text-decoration-none">FOODPALACE Kimdir?</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="foot text-decoration-none">Hizmetlerimiz</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="foot text-decoration-none">Misyonumuz</a>
                            </li>
                            <li>
                                <a href="#" className="foot text-decoration-none">Vizyonumuz</a>
                            </li>
                        </ul>
                    </div>

                    {/* İletişim Bölümü */}
                    <div className="col-md-6 text-center">
                        <h5 className="mb-4">Bize Ulaşın</h5>
                        <p>1234 Sokak Adresi, Antalya, Türkiye</p>
                        <p>Email: info@foodpalace.com | Tel: +90 (531) 456 78 90</p>
                        <div className="social-icons">
                            <a href="#" className="btn btn-white me-3 facebook"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="btn btn-white me-3 instagram"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="btn btn-white twitter"><i className="bi bi-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
