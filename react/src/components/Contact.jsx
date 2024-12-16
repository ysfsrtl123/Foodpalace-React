function Contact({ isModalOpen, onClose }) {
  if (!isModalOpen) {
    return null; // Modal kapalıyken hiçbir şey render edilmez.
  }
  /*const handleInputChange = (e) => {
    setInputValue(e.target.value); // Girdi alanındaki değişiklikleri izler
  };*/
  return (
    <div className="modal" tabIndex="-1" style={{ display: 'block' }} aria-hidden="false">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">İletişime Geç</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="inputEmail1" className="form-label">
                  E-Posta Adresiniz
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail1"
                  aria-describedby="emailHelp"
                  //value={emailValue}
                  //onChange={handleInputChange}
                  required
                />
                <div id="emailHelp" className="form-text">
                  <label className="form-label text-white">E-Posta Adresiniz Kimseyle Paylaşılmamaktadır. </label>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="phoneInput" className="form-label">
                  Telefon Numarası
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneInput"
                  //value={phoneValue}
                  //onChange={handleInputChange}
                  pattern="(\+90)\s?5\d{2}\s?\d{3}\s?\d{2}\s?\d{2}"
                  placeholder="(+90) 5xx xxx xx xx"
                  required
                />
              </div>
              <div className="mb-2">
                <input 
                type="checkbox" 
                name=""
                //value={checkValue} 
                //onChange={handleInputChange}
                id="" /> benimle telefon ile iletişime geçilsin.
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              İptal
            </button>
            <button 
            type="button" 
            className="btn btn-primary"
            //nClick={saveValues}
            >
              Gönder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
