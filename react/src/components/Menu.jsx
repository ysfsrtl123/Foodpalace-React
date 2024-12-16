import PropTypes from 'prop-types';


function Menu({ menuData}) {
  
    

  return (
    <div className="card mx-auto mb-4 mt-4 kart" style={{ width: "18rem" }}>
      <img src={menuData.image} className="card-img-top w-100 h-100" alt="menu fotoğrafı" />
      <div className="card-body">
        <h5 className="card-title">{menuData.title}</h5>
        <p className="card-text">{menuData.description}</p>
        <div className="btn btn-outline-primary rounded-pill">Detay</div>
      </div>
    </div>
  );
} 

Menu.propTypes = {
  menuData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Menu;
