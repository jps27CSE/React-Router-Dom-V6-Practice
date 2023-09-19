import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Card = ({ user }) => {
  const { name, phone, id } = user;
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/user/${id}`);
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Phone: {phone}</p>
          <div className="card-actions justify-end">
            <button onClick={handleClick} className="btn btn-primary">
              See More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  user: PropTypes.object,
};
