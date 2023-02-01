import PropTypes from 'prop-types';
import './Rocket.css';

const Rocket = ({ title, description, image }) => (
  <div className="rocket">
    <img src={image} alt={title} />
    <div className="title-desc">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

Rocket.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;
