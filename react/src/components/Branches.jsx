
export default Branches;

function Branches({branches}) {

    return (
     <div className="card text-bg-dark mt-2 mb-2 d-flex flex-row">
                                    
    <img
        src={branches.img}
        className="card-img w-50 h-50"
        alt="sube resmi"
    />
   
    <div
        className="card-body text-start"
        style={{
            padding: "10px",
            borderRadius: "5px",
        }}
    >
        <p>Şube adı: {branches.sube_adi}</p>
        <p>Adres: {branches.adres}</p>
        <p>Değerlendirme puanı:{branches.puan}</p>
    </div>
</div>
    )
}