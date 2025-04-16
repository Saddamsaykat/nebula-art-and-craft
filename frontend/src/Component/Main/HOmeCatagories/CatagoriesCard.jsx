import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const CatagoriesCard = ({e}) => {
    const {image, subcatagory} = e;
    return (
        <div>
            
            <Link to={`/catagory/${subcatagory}`}>
                        <div className="card w-48 h-44 glass">
                            <figure><img src={image} alt="car!" /></figure>
                            <div className="card-body">
                                <h1>{subcatagory}
                                </h1>
                            </div>
                            
                        </div>
                    </Link>
        </div>
    );
};

export default CatagoriesCard;
CatagoriesCard.propTypes = {
    name: PropTypes.object
  };