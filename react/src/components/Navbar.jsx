const Navbar = () => {
  return (
  <div className="fixed-top">  
   <header>
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <nav className="navbar navbar-expand-sm rounded-3 mt-5 mx-auto" id="navbar" data-bs-theme="dark">
          <a className="navbar-brand mx-5" href="#" id="navBrand">
            <strong>FOODPALACE</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-flex justify-content-center">
              <li className="nav-item">
                <a className="nav-link mx-4" href="#" id="item">
                  <strong>Anasayfa</strong>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-4" href="#" id="item">
                  <strong>Menülerimiz</strong>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-4" href="#" id="item">
                  <strong>Hakkımızda</strong>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-4" href="#" id="item">
                  <strong>İletişim</strong>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-4" href="#" id="item">
                  <strong>Şubelerimiz</strong>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
   </div>
  
  );
};

export default Navbar;
